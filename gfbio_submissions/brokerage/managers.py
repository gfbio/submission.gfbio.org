# -*- coding: utf-8 -*-
import csv
import json
import logging

from django.db import models, transaction
from django.db.models import Q
from django.utils.encoding import smart_text

logger = logging.getLogger(__name__)


class SiteConfigurationManager(models.Manager):
    # TODO: this will not fail on purpose, to allow get for default config but if get for 'default' fails exception will be raised
    # TODO: implement better fallback to a default config than rely on existence of entry with this title
    def get_site_configuration(self, site=None):
        try:
            return self.get(site=site)
        except self.model.DoesNotExist:
            return self.get(title='default')


class SubmissionManager(models.Manager):
    def get_submission(self, broker_submission_id):
        submissions = self.filter(broker_submission_id=broker_submission_id)
        if len(submissions) == 1:
            return submissions.first()
        else:
            return None

    def get_submission_instance(self, broker_submission_id):
        try:
            return self.get(broker_submission_id=broker_submission_id)
        except self.model.DoesNotExist:
            return self.model()

    def get_submitted_submissions_containing_reference(self, reference_type):
        return self.filter(status=self.model.SUBMITTED).filter(
            Q(additionalreference__type=reference_type) &
            Q(additionalreference__primary=True)
        )

    def get_open_submission(self, obj_id=None):
        # includes OPEN, SUBMITTED
        return self.get(
            Q(pk=obj_id),
            (~Q(status=self.model.CLOSED) & ~Q(status=self.model.ERROR)
             & ~Q(status=self.model.CANCELLED))
        )

    def get_non_error_submission(self, obj_id=None):
        # includes OPEN, SUBMITTED, CLOSED
        return self.get(
            Q(pk=obj_id), ~Q(status=self.model.ERROR),
            ~Q(status=self.model.CANCELLED)
        )

    def get_open_submission_id_for_bsi(self, broker_submission_id=None):
        try:
            submission = self.get(
                Q(broker_submission_id=broker_submission_id),
                (~Q(status=self.model.CLOSED) & ~Q(status=self.model.ERROR)
                 & ~Q(status=self.model.CANCELLED))
            )
            return submission.id
        except self.model.DoesNotExist:
            return -1

    def get_submissions_of_submitting_user(self,
                                           submitting_user_identifier=None):
        return self.filter(
            Q(submitting_user=submitting_user_identifier),
            ~Q(submitting_user='')
        )

    def get_submission_values(self, broker_submission_id=None):
        return self.values(
            'pk',
            # string identifier, here only id of django user possible
            'submitting_user', ).get(broker_submission_id=broker_submission_id)

    # def get_submission_for_task(self, obj_id, task=None, include_closed=False):
    #     try:
    #         submission = self.get_non_error_submission(
    #             obj_id) if include_closed else self.get_open_submission(obj_id)
    #     except self.model.DoesNotExist as e:
    #         print('NO submission ', e)
    #     try:
    #         site_config = SiteConfigurationManager.get_site_configuration(
    #             submission.site)
    #     except SiteConfigurationManager.model.DoesNotExist as e:
    #         print('No SiteConfig ', e)
    #     if task:
    #         TaskProgressReportManager.create_initial_report(
    #             submission=submission,
    #             task=task)
    #     return submission, site_config

    # def get_open_submission(cls, submission_id=None, task=None,
    #                             get_closed_submission=False):
    #     submission = cls._get_submission(submission_id, get_closed_submission)
    #     if task:
    #         task_report, created = TaskProgressReport.objects.create_initial_report(
    #             submission=submission,
    #             task=task)
    #     if submission is None:
    #         raise cls.TransferInternalError(
    #             'SubmissionTransferHandler | get_open_submission | no Submission available for submission pk={0}'.format(
    #                 submission_id))
    #     return submission


class BrokerObjectManager(models.Manager):

    def add_downloaded_pids_to_existing_broker_objects(
            self, study_pid, decompressed_file):

        entities_to_check = ['STUDY', 'EXPERIMENT', 'RUN', 'SAMPLE', ]
        reader = csv.DictReader(decompressed_file, delimiter=str('\t'))
        reports = []

        for row in reader:
            if row.get('STUDY_ID', '') == study_pid:
                for entity in entities_to_check:
                    report = {}
                    entity_id = row.get('{0}_ID'.format(entity), False)
                    entity_submitter_id = row.get(
                        '{0}_SUBMITTER_ID'.format(entity), False)
                    report['action'] = 'Checking {0} {1} {2}'.format(
                        entity,
                        entity_id,
                        entity_submitter_id
                    )

                    broker_agent_ids = entity_submitter_id.split(':')
                    if len(broker_agent_ids) == 2:
                        broker_object_pk = broker_agent_ids[0]
                        request_id = broker_agent_ids[1]
                        try:
                            broker_object = self.get(pk=broker_object_pk)
                            report['found'] = 'Brokerobject: {0}'.format(
                                broker_object
                            )
                            pid, created = broker_object.get_or_create_ena_pid(
                                entity_id,
                                request_id
                            )
                            report['result'] = 'Persistent identifier: ' \
                                               '{0} created: ' \
                                               '{1}'.format(pid.pid, created)
                        except self.model.DoesNotExist:
                            report['found'] = 'No broker object with id/pk: ' \
                                              '{0}'.format(broker_object_pk)
                    reports.append(report)
        return reports

    @staticmethod
    def process_experiment_file_block(experiment_data):
        files = [
            {'filename': experiment_data['files'].get('forward_read_file_name',
                                                      'no_forward_file'),
             'filetype': 'fastq',  # FIXME: hardcoded this
             }
        ]
        if 'reverse_read_file_name' in experiment_data['files']:
            files.append(
                {
                    'filename': experiment_data['files'].get(
                        'reverse_read_file_name',
                        'no_forward_file'),
                    'filetype': 'fastq',  # FIXME: hardcoded this
                }
            )
        if 'forward_read_file_checksum' in experiment_data['files']:
            files[0]['checksum_method'] = 'MD5'  # FIXME: hardcoded this
            files[0]['checksum'] = experiment_data['files'][
                'forward_read_file_checksum']
        if 'reverse_read_file_checksum' in experiment_data['files']:
            files[1]['checksum_method'] = 'MD5'  # FIXME: hardcoded this
            files[1]['checksum'] = experiment_data['files'][
                'reverse_read_file_checksum']
        data = {
            'experiment_ref': experiment_data.get('experiment_alias'),
            'data_block': {
                'files': files
            }
        }
        return data

    def add_file_entities(self, experiment_broker_object, submission):
        if experiment_broker_object.type == 'experiment':
            if 'files' in experiment_broker_object.data:
                data = self.process_experiment_file_block(
                    experiment_broker_object.data
                )
                obj, created = self.update_or_create(
                    type='run',
                    site=experiment_broker_object.site,
                    site_project_id=experiment_broker_object.site_project_id,
                    site_object_id='files_block_of_{0}'.format(
                        experiment_broker_object.site_object_id),
                    defaults={'data': data}
                )
                if obj.site_object_id == '':
                    obj.site_object_id = '{0}_{1}'.format(obj.site, obj.pk)
                    obj.save()
                obj.submissions.add(submission)

    def add_entity(self, submission, entity_type, site, site_project_id,
                   site_object_id, json_data):
        obj, created = self.update_or_create(
            type=entity_type,
            site=site,
            site_project_id=site_project_id,
            site_object_id=site_object_id,
            defaults={'data': json_data}
        )
        if obj.site_object_id == '':
            obj.site_object_id = '{0}_{1}'.format(obj.site, obj.pk)
            obj.save()
        obj.submissions.add(submission)
        return obj

    def add_submission_data(self, submission):
        if submission.release:
            if submission.target in ['ENA', 'ENA_PANGAEA']:
                self.add_ena_submission_data(submission)
            else:
                pass

    def add_ena_submission_data(self, submission):
        # TODO: check submission.data behaviour in this (new) python 3 environment
        if isinstance(submission.data, str):
            data = json.loads(submission.data)
        else:
            data = submission.data
        obj = self.add_entity(
            submission=submission,
            entity_type='study',
            site=submission.site,
            site_project_id=submission.site_project_id,
            site_object_id=data['requirements'].get('site_object_id', ''),
            json_data={
                'study_title': data['requirements']['title'],
                'study_abstract': data['requirements']['description'],
                'study_type': data['requirements']['study_type']
            }
        )
        data['requirements']['site_object_id'] = obj.site_object_id
        for i in range(0, len(data['requirements']['samples'])):
            # for sample in data['requirements']['samples']:
            sample = data['requirements']['samples'][i]
            obj = self.add_entity(submission=submission,
                                  entity_type='sample',
                                  site=submission.site,
                                  site_project_id=submission.site_project_id,
                                  site_object_id=sample.get('site_object_id',
                                                            ''),
                                  json_data=sample)
            data['requirements']['samples'][i][
                'site_object_id'] = obj.site_object_id

        for i in range(0, len(data['requirements']['experiments'])):
            # for experiment in data['requirements']['experiments']:
            experiment = data['requirements']['experiments'][i]
            obj = self.add_entity(submission=submission,
                                  entity_type='experiment',
                                  site=submission.site,
                                  site_project_id=submission.site_project_id,
                                  site_object_id=experiment.get(
                                      'site_object_id', ''),
                                  json_data=experiment)
            data['requirements']['experiments'][i][
                'site_object_id'] = obj.site_object_id
            self.add_file_entities(experiment_broker_object=obj,
                                   submission=submission)

        # for run in data['requirements'].get('runs', []):
        if 'runs' in data['requirements'].keys():
            for i in range(0, len(data['requirements']['runs'])):
                run = data['requirements']['runs'][i]
                obj = self.add_entity(submission=submission,
                                      entity_type='run',
                                      site=submission.site,
                                      site_project_id=submission.site_project_id,
                                      site_object_id=run.get('site_object_id',
                                                             ''),
                                      json_data=run)
                data['requirements']['runs'][i][
                    'site_object_id'] = obj.site_object_id

        submission.data = data
        submission.save()

    # TODO: rename, since this here is mostly ena specific
    # TODO: refactor for generic solution
    def append_persistent_identifier(self, result, archive, pid_type,
                                     alias=None):
        if alias is None:
            alias = result.get('alias', '-1:-1').split(':')
        try:
            broker_obj = self.get(id=alias[0])
        except self.model.DoesNotExist:
            logger.error(
                msg='BrokerObject with id={} does not exist. '
                    'Failed to append_persistent_identifier for archive={} '
                    'of pid_type={}'.format(alias[0], archive, pid_type)
            )
            return None
        logger.info(
            msg='append_persistent_identifier to pk={} of '
                'type={}.'.format(broker_obj.id, broker_obj.type)
        )
        return broker_obj.persistentidentifier_set.create(
            archive=archive,
            pid_type=pid_type,
            pid=result.get('accession', '-1'),
            outgoing_request_id=alias[1]
        )

    def append_persistent_identifiers(self, results, archive, pid_type,
                                      alias=None):
        return [
            self.append_persistent_identifier(r, archive, pid_type, alias)
            for r in results
        ]

    def append_pids_from_ena_response(self, parsed_response):
        study = parsed_response.get('study', {})
        pids = [
            self.append_persistent_identifier(study, 'ENA', 'ACC')
        ]
        for e in study.get('ext_ids', []):
            pids.append(self.append_persistent_identifier(
                e, 'ENA', 'PRJ', alias=study.get('alias', '-1:-1').split(':'))
            )

        for s in parsed_response.get('samples', []):
            pids.append(self.append_persistent_identifier(s, 'ENA', 'ACC'))
            for e in s.get('ext_ids', []):
                pids.append(
                    self.append_persistent_identifier(
                        e, 'ENA', 'BSA',
                        alias=s.get('alias', '-1:-1').split(':')
                    )
                )
        pids.extend(self.append_persistent_identifiers(
            parsed_response.get('experiments', []),
            'ENA',
            'ACC'
        ))
        pids.extend(self.append_persistent_identifiers(
            parsed_response.get('runs', []),
            'ENA',
            'ACC'
        ))
        return pids


class TaskProgressReportManager(models.Manager):
    @transaction.atomic()
    def create_initial_report(self, submission, task):
        report, created = self.update_or_create(
            task_id=task.request.id,
            defaults={
                'submission': submission,
                'task_name': task.name,
                'task_id': task.request.id,
            }
        )
        return report, created

    @transaction.atomic()
    def update_report_after_return(self, status, task_id):
        report, created = self.update_or_create(
            task_id=task_id,
            defaults={
                'task_id': task_id,
                'status': status,
            }
        )
        return report, created

    @transaction.atomic()
    def update_report_on_success(self, retval, task_id, args, kwargs):
        report, created = self.update_or_create(
            task_id=task_id,
            defaults={
                'task_id': task_id,
                'status': 'SUCCESS',
                'task_args': '{}'.format(args),
                'task_kwargs': json.dumps(kwargs),
                'task_return_value': '{}'.format(retval),
            }
        )
        return report, created

    @transaction.atomic()
    def update_report_on_exception(self, status, exc, task_id, args, kwargs,
                                   einfo):
        report, created = self.update_or_create(
            task_id=task_id,
            defaults={
                'task_id': task_id,
                'status': status,
                'task_exception': '{}'.format(exc),
                'task_exception_info': '{}'.format(einfo),
                'task_args': '{}'.format(args),
                'task_kwargs': json.dumps(kwargs),
            }
        )
        return report, created


class AuditableTextDataManager(models.Manager):
    def assemble_ena_submission_data(self, submission):
        xml_file_names = ['study.xml', 'sample.xml', 'experiment.xml',
                          'run.xml', ]
        request_file_keys = ['study', 'sample', 'experiment', 'run', ]
        # just one hit on the database, then work on queryset
        ena_data = self.filter(submission=submission).filter(
            name__in=xml_file_names)
        res = {}
        for r in request_file_keys:
            obj_qs = ena_data.filter(name__contains=r)
            if len(obj_qs):
                obj = obj_qs.first()
                res[r.upper()] = (
                    '{0}'.format(smart_text(obj.name)),
                    '{0}'.format(smart_text(obj.text_data)))
        return res
