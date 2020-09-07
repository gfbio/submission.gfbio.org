# -*- coding: utf-8 -*-
import csv
import os
import subprocess
from io import StringIO

from django.conf import settings

from gfbio_submissions.brokerage.models import AuditableTextData
from gfbio_submissions.generic.models import RequestLog


def create_ena_manifest_text_data(submission):
    try:
        study_bo = submission.brokerobject_set.filter(type='study').first()
        study_pid = study_bo.persistentidentifier_set.filter(
            archive='ENA').filter(pid_type='PRJ').first()
        upload = submission.submissionupload_set.filter(
            file__endswith='.tsv.gz').first()
    except AttributeError as ae:
        upload = None
        study_pid = None
        study_bo = None
    file_name = upload.file.name if upload else '*'
    tab_file_path = os.path.join(settings.MEDIA_ROOT, file_name)

    output = StringIO()
    writer = csv.writer(output, delimiter=str('\t'))

    writer.writerow(('STUDY', study_pid.pid if study_pid else '*'))
    if study_bo and submission:
        writer.writerow(('NAME', '{}:{}'.format(study_bo.pk,
                                                submission.broker_submission_id)))
    else:
        writer.writerow(('NAME', '*:*'))
    writer.writerow(('TAB', tab_file_path))
    writer.writerow(('AUTHORS', 'Weber M., Kostadinov I.;'))
    writer.writerow(('ADDRESS',
                     'University of Bremen, Leobener Str. 5, 28359 Bremen, Germany'))
    text_data, created = submission.auditabletextdata_set.update_or_create(
        name='MANIFEST',
        defaults={
            'text_data': output.getvalue(),
            'comment': 'Generated by create_ena_manifest_text_data',
        }
    )
    output.close()
    return text_data


def store_manifest_to_filesystem(submission):
    submission_folder = os.path.join(settings.MEDIA_ROOT,
                                     str(submission.broker_submission_id))
    manifest_text_data = AuditableTextData.objects.get_ena_manifest_file(
        submission)
    if manifest_text_data:
        with open('{0}{1}{2}'.format(
                submission_folder,
                os.sep,
                manifest_text_data.name), 'w') as output:
            output.write(manifest_text_data.text_data)


def submit_targeted_sequences(
        username,
        password,
        submission,
        center_name='GFBIO',
        test=True,
        validate=True):
    submission_folder = os.path.join(settings.MEDIA_ROOT,
                                     str(submission.broker_submission_id))
    manifest_path = os.path.join(submission_folder, 'MANIFEST')

    command = [
        'java', '-jar', 'ena_webin_cli/webin-cli-3.0.0.jar',
        '-context', 'sequence',
        '-username', username,
        '-password', password,
        '-centername', center_name,
        '-manifest', manifest_path,
        '-inputDir', submission_folder,
        '-outputDir', submission_folder
    ]
    if test:
        command.append('-test')
    if validate:
        command.append('-validate')
    else:
        command.append('-submit')

    request_log = RequestLog.objects.create(
        type=RequestLog.OUTGOING,
        method=RequestLog.NONE,
        url=manifest_path,
        submission_id=submission.broker_submission_id,
        user=submission.user,
        data='{}'.format(command),
        files=manifest_path,
        json={},
    )

    details = {}
    success = False
    try:
        res = subprocess.run(command, capture_output=True, check=False)

        details['output'] = {
            'args': '{}'.format(res.args),
            'returncode': '{}'.format(res.returncode),
            'stdout': '{}'.format(res.stdout),
            'stderr': '{}'.format(res.stderr),
        }
        details['folder_content'] = os.listdir(submission_folder)
        with open(os.path.join(submission_folder,
                               'webin-cli.report'), 'r') as report:
            details['webin_report'] = report.read()
        success = True
        # TODO: edit Manifest ? auditing trail ? when available use ATextData object ?

    except subprocess.CalledProcessError as e:
        details['called_process_error'] = '{}'.format(e)
        success = False
    except FileNotFoundError as e:
        details['file_not_found_error'] = '{}'.format(e)
        success = False
    request_log.request_details = details
    request_log.save()

    return success


def extract_accession_from_webin_report(broker_submission_id):
    submission_folder = os.path.join(settings.MEDIA_ROOT,
                                     str(broker_submission_id))
    accession = '-1'
    if not os.path.exists(submission_folder):
        return accession
    file_path = os.path.join(submission_folder, 'webin-cli.report')
    if not os.path.exists(file_path):
        return accession
    with open(file_path, 'r') as report:
        file_content = report.readlines()
        for f in file_content:
            if f.count('accession was assigned'):
                s = f.replace('\n', '').split('submission:')
                accession = s[-1].strip() if len(s) == 2 else '-1'
        return accession