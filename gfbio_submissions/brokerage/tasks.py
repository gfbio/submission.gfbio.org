# -*- coding: utf-8 -*-
import datetime
import logging
import os
from pprint import pprint

import celery
from celery import Task
from django.core.mail import mail_admins
from django.db import transaction
from django.db.utils import IntegrityError
from django.utils.encoding import smart_text
from kombu.utils import json
from requests import ConnectionError, Response

from config.settings.base import HOST_URL_ROOT, ADMIN_URL
from gfbio_submissions.generic.models import SiteConfiguration, RequestLog
from gfbio_submissions.users.models import User
from .configuration.settings import ENA, ENA_PANGAEA, PANGAEA_ISSUE_VIEW_URL, \
    SUBMISSION_COMMENT_TEMPLATE, JIRA_FALLBACK_USERNAME, \
    JIRA_FALLBACK_EMAIL, APPROVAL_EMAIL_SUBJECT_TEMPLATE, \
    APPROVAL_EMAIL_MESSAGE_TEMPLATE, JIRA_ACCESSION_COMMENT_TEMPLATE
from .configuration.settings import SUBMISSION_MAX_RETRIES, \
    SUBMISSION_RETRY_DELAY
from .exceptions import TransferServerError, TransferClientError
from .models import BrokerObject, AuditableTextData, \
    AdditionalReference, TaskProgressReport, Submission
from .models import SubmissionUpload, EnaReport
from .utils.csv import check_for_molecular_content, parse_molecular_csv
from .utils.ena import prepare_ena_data, store_ena_data_as_auditable_text_data, \
    send_submission_to_ena, parse_ena_submission_response, fetch_ena_report, \
    update_persistent_identifier_report_status
from .utils.gfbio import get_gfbio_helpdesk_username
from .utils.jira import JiraClient
from .utils.pangaea import pull_pangaea_dois
from .utils.schema_validation import validate_data_full
from .utils.submission_transfer import SubmissionTransferHandler
from .utils.task_utils import jira_error_auto_retry, \
    get_submission_and_site_configuration, raise_transfer_server_exceptions, \
    retry_no_ticket_available_exception, \
    get_submitted_submission_and_site_configuration

logger = logging.getLogger(__name__)


# abstract base class for tasks ------------------------------------------------

class SubmissionTask(Task):
    abstract = True

    # TODO: consider a report for every def here OR refactor taskreport to
    #  keep track in one report. Keep in mind to resume chains from a certain
    #  point, add a DB clean up task to remove from database
    # @abstractmethod
    # def __init__(self):
    #     super(SubmissionTask, self).__init__()

    def on_retry(self, exc, task_id, args, kwargs, einfo):
        logger.info('tasks.py | SubmissionTask | on_retry | task_id={0} | '
                    'name={1}'.format(task_id, self.name))
        # TODO: capture this idea of reporting to sentry
        # sentrycli.captureException(exc)
        TaskProgressReport.objects.update_report_on_exception(
            'RETRY', exc, task_id, args, kwargs, einfo)
        super(SubmissionTask, self).on_retry(exc, task_id, args, kwargs, einfo)

    def on_failure(self, exc, task_id, args, kwargs, einfo):
        logger.info('tasks.py | SubmissionTask | on_failure | task_id={0} | '
                    'name={1}| args={2} | kwargs={3} | einfo={4} | '
                    ''.format(task_id, self.name, args, kwargs, einfo))
        TaskProgressReport.objects.update_report_on_exception(
            'FAILURE', exc, task_id, args, kwargs, einfo)
        super(SubmissionTask, self).on_failure(exc, task_id, args, kwargs,
                                               einfo)

    def on_success(self, retval, task_id, args, kwargs):
        logger.info('tasks.py | SubmissionTask | on_success | task_id={0} | '
                    'name={1} | retval={2}'.format(task_id, self.name, retval))
        TaskProgressReport.objects.update_report_on_success(
            retval, task_id, args, kwargs)
        super(SubmissionTask, self).on_success(retval, task_id, args, kwargs)

    def after_return(self, status, retval, task_id, args, kwargs, einfo):
        logger.info('tasks.py | SubmissionTask | after_return | task_id={0} | '
                    'name={1} | args={2} | kwargs={3} | einfo={4} | '
                    'retval={5}'.format(task_id, self.name, args, kwargs, einfo,
                                        retval))
        TaskProgressReport.objects.update_report_after_return(status, task_id)
        super(SubmissionTask, self).after_return(
            status, retval, task_id, args, kwargs, einfo)


# common tasks -----------------------------------------------------------------

# TODO: re-consider if needed when workflow is clear
@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.check_for_molecular_content_in_submission_task',
)
def check_for_molecular_content_in_submission_task(self, submission_id=None):
    logger.info(
        msg='check_for_molecular_content_in_submission_task. get submission'
            ' with pk={}.'.format(submission_id))

    # TODO: needs only submission, not both.
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    logger.info(
        msg='check_for_molecular_content_in_submission_task. '
            'process submission={}.'.format(submission.broker_submission_id))

    molecular_data_available, messages, check_performed = check_for_molecular_content(
        submission)
    logger.info(
        msg='check_for_molecular_content_in_submission_task. '
            'valid molecular data available={0}'
            ''.format(molecular_data_available)
    )

    return {
        'molecular_data_available': molecular_data_available,
        'messages': messages,
        'molecular_data_check_performed': check_performed,
    }


@celery.task(base=SubmissionTask, bind=True,
             name='tasks.trigger_submission_transfer', )
def trigger_submission_transfer(self, previous_task_result=None,
                                submission_id=None):
    molecular_data_available = False
    check_performed = False

    if isinstance(previous_task_result, dict):
        molecular_data_available = previous_task_result.get(
            'molecular_data_available', False)
        check_performed = previous_task_result.get(
            'molecular_data_check_performed', False)

    logger.info(
        msg='trigger_submission_transfer. get submission with pk={}.'.format(
            submission_id)
    )
    # TODO: needs only submission, not both.
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    transfer_handler = SubmissionTransferHandler(
        submission_id=submission.pk,
        target_archive=submission.target,
        molecular_data_found=molecular_data_available,
        molecular_data_check_performed=check_performed
    )
    transfer_handler.initiate_submission_process(
        release=submission.release,
    )


@celery.task(base=SubmissionTask, bind=True,
             name='tasks.trigger_submission_transfer_for_updates', )
def trigger_submission_transfer_for_updates(self, previous_task_result=None,
                                            broker_submission_id=None):
    molecular_data_available = False
    check_performed = False
    if isinstance(previous_task_result, dict):
        molecular_data_available = previous_task_result.get(
            'molecular_data_available', False)
        check_performed = previous_task_result.get(
            'molecular_data_check_performed', False)

    logger.info(
        msg='trigger_submission_transfer_for_updates. get submission_id with broker_submission_id={}.'.format(
            broker_submission_id)
    )
    submission_id = Submission.objects.get_open_submission_id_for_bsi(
        broker_submission_id=broker_submission_id)

    # TODO: needs only submission, not both.
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    transfer_handler = SubmissionTransferHandler(
        submission_id=submission.pk,
        target_archive=submission.target,
        molecular_data_found=molecular_data_available,
        molecular_data_check_performed=check_performed
    )
    transfer_handler.initiate_submission_process(
        release=submission.release,
        update=True,
    )


# TODO: on_hold check is in this form obsolete, if target is ENA etc
#   submission to ena is triggered without prior creation of BOs and XML
@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.check_on_hold_status_task',
)
def check_on_hold_status_task(self, previous_task_result=None,
                              submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    if site_configuration.release_submissions:
        logger.info(
            msg='check_on_hold_status_task. submission pk={0}. '
                'site_config pk={1}. site_configuration.release_submissions'
                '={2}. execute submission.'
                ''.format(submission_id, site_configuration.pk,
                          site_configuration.release_submissions))
        transfer_handler = SubmissionTransferHandler(
            submission_id=submission.pk,
            target_archive=submission.target
        )
        transfer_handler.execute()
    else:
        # email admins, then do smth. to trigger chain once ok
        logger.info(
            msg='check_on_hold_status_task. submission pk={0}. '
                'site_config pk={1}. site_configuration.release_submissions'
                '={2}. send mail to admins.'
                ''.format(submission_id, site_configuration.pk,
                          site_configuration.release_submissions))
        # TODO: refactor to method in task_utils, and use templates/constants
        mail_admins(
            subject=APPROVAL_EMAIL_SUBJECT_TEMPLATE.format(
                HOST_URL_ROOT,
                # site_configuration.site.username if site_configuration.site else site_configuration.title,
                submission.user.username if submission.user else site_configuration.title,
                submission.broker_submission_id
            ),
            message=APPROVAL_EMAIL_MESSAGE_TEMPLATE.format(
                submission.broker_submission_id,
                '{0}{1}brokerage/submission/{2}/change/'.format(
                    HOST_URL_ROOT,
                    ADMIN_URL,
                    submission.pk)
            )
        )


# NEW PREP WORKFLOW BO CREATION AND SOID CREATION ------------------------------

@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.create_broker_objects_from_submission_data_task',
)
def create_broker_objects_from_submission_data_task(
        self,
        previous_task_result=None,
        submission_id=None,
        use_submitted_submissions=False):
    if previous_task_result == TaskProgressReport.CANCELLED:
        logger.warning(
            'tasks.py | create_broker_objects_from_submission_data_task | '
            'previous task reported={0} | '
            'submission_id={1}'.format(TaskProgressReport.CANCELLED,
                                       submission_id))
        return TaskProgressReport.CANCELLED

    submission, site_configuration = \
        get_submitted_submission_and_site_configuration(
            submission_id=submission_id,
            task=self) if use_submitted_submissions else get_submission_and_site_configuration(
            submission_id=submission_id,
            task=self,
            include_closed=True
        )
    logger.info('tasks.py | create_broker_objects_from_submission_data_task | '
                'submission={0} | site_configuration={1}'.format(submission,
                                                                 site_configuration))
    if submission == TaskProgressReport.CANCELLED:
        logger.warning(
            'tasks.py | create_broker_objects_from_submission_data_task | '
            ' do nothing because submission={0}'.format(
                TaskProgressReport.CANCELLED))
        return TaskProgressReport.CANCELLED

    try:
        logger.info(
            'tasks.py | create_broker_objects_from_submission_data_task '
            '| try delete broker objects and create new ones '
            'from submission data')
        with transaction.atomic():
            submission.brokerobject_set.all().delete()
            BrokerObject.objects.add_submission_data(submission)
            return True
    except IntegrityError as e:
        logger.error(
            'create_broker_objects_from_submission_data_task IntegrityError in "create_broker_objects_from'
            '_submission_data_task": {}'.format(e))


# ENA submission transfer tasks ------------------------------------------------

@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.delete_related_auditable_textdata_task',
)
def delete_related_auditable_textdata_task(self, prev_task_result=None,
                                           submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    with transaction.atomic():
        submission.auditabletextdata_set.all().delete()


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.prepare_ena_submission_data_task',
)
def prepare_ena_submission_data_task(self, prev_task_result=None,
                                     submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    if len(submission.brokerobject_set.all()) > 0:
        with transaction.atomic():
            submission.auditabletextdata_set.all().delete()
        ena_submission_data = prepare_ena_data(submission=submission)
        store_ena_data_as_auditable_text_data(submission=submission,
                                              data=ena_submission_data)
        # TODO: this will become obsolete once, data is taken from AuditableTextData ....
        return ena_submission_data
    else:
        logger.info(
            msg='prepare_ena_submission_data_task. no brokerobjects. '
                'return={0} '
                'submission_id={1}'.format(TaskProgressReport.CANCELLED,
                                           submission_id)
        )
        return TaskProgressReport.CANCELLED


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.update_ena_submission_data_task',
)
def update_ena_submission_data_task(self, previous_task_result=None,
                                    submission_upload_id=None):
    # TODO: here it would be possible to get the related submission for the TaskReport
    TaskProgressReport.objects.create_initial_report(
        submission=None,
        task=self)
    submission_upload = SubmissionUpload.objects.get_linked_molecular_submission_upload(
        submission_upload_id)

    if previous_task_result == TaskProgressReport.CANCELLED:
        logger.warning(
            'tasks.py | update_ena_submission_data_task | '
            'previous task reported={0} | '
            'submission_upload_id={1}'.format(TaskProgressReport.CANCELLED,
                                              submission_upload_id))
        return TaskProgressReport.CANCELLED

    if submission_upload is None:
        logger.error(
            'tasks.py | update_ena_submission_data_task | '
            'no valid SubmissionUpload available | '
            'submission_upload_id={0}'.format(submission_upload_id))
        return TaskProgressReport.CANCELLED

    ena_submission_data = prepare_ena_data(
        submission=submission_upload.submission)

    logger.info(
        'tasks.py | update_ena_submission_data_task | '
        'update AuditableTextData related to submission={0} '
        ''.format(submission_upload.submission.broker_submission_id))
    with transaction.atomic():
        for d in ena_submission_data:
            filename, filecontent = ena_submission_data[d]
            obj, created = submission_upload.submission.auditabletextdata_set.update_or_create(
                name=filename,
                defaults={'text_data': filecontent}
            )
        return True


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.clean_submission_for_update_task',
)
def clean_submission_for_update_task(self, previous_task_result=None,
                                     submission_upload_id=None):
    # TODO: here it would be possible to get the related submission for the TaskReport
    TaskProgressReport.objects.create_initial_report(
        submission=None,
        task=self)
    submission_upload = SubmissionUpload.objects.get_linked_molecular_submission_upload(
        submission_upload_id)

    if previous_task_result == TaskProgressReport.CANCELLED:
        logger.warning(
            'tasks.py | clean_submission_for_update_task | '
            'previous task reported={0} | '
            'submission_upload_id={1}'.format(TaskProgressReport.CANCELLED,
                                              submission_upload_id))
        return TaskProgressReport.CANCELLED

    if submission_upload is None:
        logger.error(
            'tasks.py | clean_submission_for_update_task | '
            'no valid SubmissionUpload available | '
            'submission_upload_id={0}'.format(submission_upload_id))
        return TaskProgressReport.CANCELLED

    data = submission_upload.submission.data
    molecular_requirements_keys = ['samples', 'experiments']  # 'study_type',

    if 'validation' in data.keys():
        data.pop('validation')
    for k in molecular_requirements_keys:
        if k in data.get('requirements', {}).keys():
            data.get('requirements', {}).pop(k)

    with transaction.atomic():
        submission_upload.submission.save()
    return True


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.parse_csv_to_update_clean_submission_task',
)
def parse_csv_to_update_clean_submission_task(self, previous_task_result=None,
                                              submission_upload_id=None):
    # TODO: here it would be possible to get the related submission for the TaskReport
    TaskProgressReport.objects.create_initial_report(
        submission=None,
        task=self)
    submission_upload = SubmissionUpload.objects.get_linked_molecular_submission_upload(
        submission_upload_id)

    if previous_task_result == TaskProgressReport.CANCELLED:
        logger.warning(
            'tasks.py | parse_csv_to_update_clean_submission_task | '
            'previous task reported={0} | '
            'submission_upload_id={1}'.format(TaskProgressReport.CANCELLED,
                                              submission_upload_id))
        return TaskProgressReport.CANCELLED

    if submission_upload is None:
        logger.error(
            'tasks.py | parse_csv_to_update_clean_submission_task | '
            'no valid SubmissionUpload available | '
            'submission_upload_id={0}'.format(submission_upload_id))
        return TaskProgressReport.CANCELLED

    with open(submission_upload.file.path, 'r') as file:
        molecular_requirements = parse_molecular_csv(
            file,
        )

    path = os.path.join(
        os.getcwd(),
        'gfbio_submissions/brokerage/schemas/ena_requirements.json')

    with transaction.atomic():
        submission_upload.submission.data['requirements'].update(
            molecular_requirements)

        valid, full_errors = validate_data_full(
            data=submission_upload.submission.data,
            target=ENA_PANGAEA,
            schema_location=path,
        )

        if not valid:
            messages = [e.message for e in full_errors]
            submission_upload.submission.data.update(
                {'validation': messages})

        submission_upload.submission.save()
        if not valid:
            return TaskProgressReport.CANCELLED
        else:
            return True


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.transfer_data_to_ena_task',
    time_limit=600,
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def transfer_data_to_ena_task(self, prepare_result=None, submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    ena_submission_data = AuditableTextData.objects.assemble_ena_submission_data(
        submission=submission)
    if ena_submission_data == {}:
        return TaskProgressReport.CANCELLED
    try:
        response, request_id = send_submission_to_ena(submission,
                                                      site_configuration.ena_server,
                                                      ena_submission_data,
                                                      )
        res = raise_transfer_server_exceptions(
            response=response,
            task=self,
            broker_submission_id=submission.broker_submission_id,
            max_retries=SUBMISSION_MAX_RETRIES)
    except ConnectionError as e:
        logger.error(
            msg='connection_error {}.url={} title={}'.format(
                e,
                site_configuration.ena_server.url,
                site_configuration.ena_server.title)
        )
        response = Response()
    return str(request_id), response.status_code, smart_text(
        response.content)


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.process_ena_response_task',
)
def process_ena_response_task(self, transfer_result=None, submission_id=None,
                              close_submission_on_success=True):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if transfer_result == TaskProgressReport.CANCELLED or submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    request_id, response_status_code, response_content = transfer_result

    parsed = parse_ena_submission_response(response_content)
    success = True if parsed.get('success', False) == 'true' else False
    if success:
        BrokerObject.objects.append_pids_from_ena_response(parsed)
        if close_submission_on_success:
            submission.status = Submission.CLOSED
        submission.save()
        return True
    else:
        submission.status = Submission.ERROR
        outgoing_request = RequestLog.objects.get(request_id=request_id)
        outgoing_request.request_details['parsed_ena_response'] = parsed
        outgoing_request.save()
        submission.save()
        logger.info(
            msg='process_ena_response_task. ena reported error(s) '
                'for submisison={}. refer to RequestLog={}'.format(
                submission.broker_submission_id,
                outgoing_request.request_id)
        )
        return False


# Pangea submission transfer tasks ---------------------------------------------

@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.create_pangaea_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def create_pangaea_issue_task(self, prev=None, submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    jira_client = JiraClient(
        resource=site_configuration.pangaea_jira_server,
        token_resource=site_configuration.pangaea_token_server)
    jira_client.create_pangaea_issue(site_config=site_configuration,
                                     submission=submission)
    jira_error_auto_retry(jira_client=jira_client, task=self,
                          broker_submission_id=submission.broker_submission_id)
    if jira_client.issue:
        submission.additionalreference_set.create(
            type=AdditionalReference.PANGAEA_JIRA_TICKET,
            reference_key=jira_client.issue.key,
            primary=True
        )
        return {
            'issue_key': jira_client.issue.key,
        }


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.add_accession_to_pangaea_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def add_accession_to_pangaea_issue_task(self, kwargs=None, submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    if 'issue_key' in kwargs.keys():

        # TODO: manager method to get panagea issue without needing pre-chain result
        ticket_key = kwargs.get('issue_key', 'None')
        study_pid = submission.brokerobject_set.filter(
            type='study').first().persistentidentifier_set.filter(
            pid_type='PRJ').first()
        if study_pid:
            jira_client = JiraClient(
                resource=site_configuration.pangaea_jira_server,
                token_resource=site_configuration.pangaea_token_server)
            jira_client.add_comment(
                key_or_issue=ticket_key,
                text='ENA Accession No. of study {}. broker_submission_id: '
                     '{0}. {1}'.format(study_pid.pid,
                                       submission.broker_submission_id))

            return jira_error_auto_retry(jira_client=jira_client, task=self,
                                         broker_submission_id=submission.broker_submission_id)
    else:
        return TaskProgressReport.CANCELLED


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.attach_to_pangaea_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def attach_to_pangaea_issue_task(self, kwargs={}, submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    if 'issue_key' in kwargs.keys():

        issue_key = kwargs.get('issue_key', 'None')
        jira_client = JiraClient(
            resource=site_configuration.pangaea_jira_server,
            token_resource=site_configuration.pangaea_token_server
        )
        jira_client.attach_to_pangaea_issue(key=issue_key,
                                            submission=submission)
        jira_error_auto_retry(jira_client=jira_client, task=self,
                              broker_submission_id=submission.broker_submission_id)
        return {'issue_key': issue_key}

    else:
        return TaskProgressReport.CANCELLED


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.check_for_pangaea_doi_task',
)
def check_for_pangaea_doi_task(self, resource_credential_id=None):
    TaskProgressReport.objects.create_initial_report(
        submission=None,
        task=self)
    # TODO: move this to top and check there are submissiont to fetch doi for, if not no request for login token is needed
    submissions = \
        Submission.objects.get_submitted_submissions_containing_reference(
            reference_type=AdditionalReference.PANGAEA_JIRA_TICKET
        )
    logger.info(
        msg='check_for_pangaea_doi_task. pulling pangaea dois for {} '
            'submissions'.format(len(submissions)))
    # TODO: in general suboptimal to fetch sc for every submission in set, but neeeded, reconsider to refactor
    #   schedule in database etc.
    for sub in submissions:
        # site_config = SiteConfiguration.objects.get_site_configuration(
        #     site=sub.site
        # )
        site_config = SiteConfiguration.objects.get_hosting_site_configuration()
        jira_client = JiraClient(resource=site_config.pangaea_jira_server,
                                 token_resource=site_config.pangaea_token_server)
        pull_pangaea_dois(sub, jira_client)


# HELPDESK TASKS --------------------------------------------------------------


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.get_gfbio_helpdesk_username_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def get_gfbio_helpdesk_username_task(self, prev_task_result=None,
                                     submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        logger.info(
            'tasks.py | get_gfbio_helpdesk_username_task | return TaskProgressReport.CANCELLED')
        return TaskProgressReport.CANCELLED

    user_name = JIRA_FALLBACK_USERNAME
    user_email = JIRA_FALLBACK_EMAIL
    user_full_name = ''
    result = {
        'jira_user_name': user_name,
        'email': user_email,
        'full_name': user_full_name
    }
    # if len(submission.submitting_user) == 0:
    #     logger.info(
    #         'tasks.py | get_gfbio_helpdesk_username_task | '
    #         'len(submission.submitting_user) == 0 | return {0}'.format(result))
    #     return result

    # if submission.site.username == HOSTING_SITE:
    #     try:
    #         logger.info(
    #             'tasks.py | get_gfbio_helpdesk_username_task | try getting a local user | submission={1} | submitting_user={1}'.format(
    #                 submission.broker_submission_id, submission.submitting_user)
    #         )
    #         user = User.objects.get(pk=int(submission.submitting_user))
    #         user_name = user.external_user_id if user.external_user_id else user.username
    #         user_email = user.email
    #         result['email'] = user_email
    #         user_full_name = user.name
    #         result['full_name'] = user_full_name
    #         logger.info(
    #             'tasks.py | get_gfbio_helpdesk_username_task | try get user | username={0} | goe_id={1}'.format(
    #                 user.username, user.external_user_id))
    #     except ValueError as ve:
    #         logger.warning(
    #             'tasks.py | get_gfbio_helpdesk_username_task | '
    #             'submission_id={0} | ValueError with '
    #             'submission.submiting_user={1} | '
    #             '{2}'.format(submission_id, submission.submitting_user, ve))
    #     except User.DoesNotExist as e:
    #         logger.warning(
    #             'tasks.py | get_gfbio_helpdesk_username_task | '
    #             'submission_id={0} | No user with '
    #             'submission.submiting_user={1} | '
    #             '{2}'.format(submission_id, submission.submitting_user, e))
    #         logger.warning(
    #             'tasks.py | get_gfbio_helpdesk_username_task | '
    #             'submission_id={0} | Try getting user_email from previous task | user_name='
    #             '{1}'.format(submission_id, user_name))
    # else:
    # TODO: add 'get_user_email method' specific to a site as a parameter to this task, otherwise no email resolution is possible
    # user_name = submission.user.username
    # user_email = submission.user.email if len(submission.user.email) else JIRA_FALLBACK_EMAIL
    # result['email'] = user_email  # if len(user_email) else JIRA_FALLBACK_EMAIL
    user_name = submission.user.external_user_id \
        if submission.user.external_user_id \
        else submission.user.username
    user_email = submission.user.email
    user_full_name = submission.user.name
    result['email'] = user_email if len(user_email) else JIRA_FALLBACK_EMAIL
    result['full_name'] = user_full_name

    response = get_gfbio_helpdesk_username(user_name=user_name,
                                           email=user_email,
                                           fullname=user_full_name)
    logger.info(
        'tasks.py | get_gfbio_helpdesk_username_task | response status={0} | content={1}'.format(
            response.status_code, response.content))

    raise_transfer_server_exceptions(
        response=response,
        task=self,
        broker_submission_id=submission.broker_submission_id,
        max_retries=SUBMISSION_MAX_RETRIES
    )

    if response.status_code == 200:
        result['jira_user_name'] = smart_text(response.content)

    logger.info(
        'tasks.py | get_gfbio_helpdesk_username_task |return={0}'.format(
            result))
    return result


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.create_submission_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def create_submission_issue_task(self, prev_task_result=None,
                                 submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    # TODO: test task without check for null, what happens when errors occur here, not caused inside a
    #  method called here

    # TODO: only needed for comment on ticket, thus remove
    # TODO: althouht filter for primary should deliver only on ticket, a dedicated manager method
    #   would be cleaner (no .first() on query set)
    # existing_tickets = submission.additionalreference_set.filter(
    #     Q(type=AdditionalReference.GFBIO_HELPDESK_TICKET) & Q(primary=True))

    print('\ncreate_submission_issue_task\n')
    print(site_configuration)
    print(site_configuration.__dict__)
    pprint(submission)

    jira_client = JiraClient(resource=site_configuration.helpdesk_server)
    jira_client.create_submission_issue(reporter=prev_task_result,
                                        site_config=site_configuration,
                                        submission=submission)

    jira_error_auto_retry(jira_client=jira_client, task=self,
                          broker_submission_id=submission.broker_submission_id)
    if jira_client.issue:
        submission.additionalreference_set.create(
            type=AdditionalReference.GFBIO_HELPDESK_TICKET,
            reference_key=jira_client.issue.key,
            primary=True
        )


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.update_submission_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def update_submission_issue_task(self, prev_task_result=None,
                                 submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    reference = submission.get_primary_helpdesk_reference()
    if reference:
        jira_client = JiraClient(resource=site_configuration.helpdesk_server)
        jira_client.update_submission_issue(
            reporter=prev_task_result,
            key=reference.reference_key,
            site_config=site_configuration,
            submission=submission,
        )

        return jira_error_auto_retry(jira_client=jira_client, task=self,
                                     broker_submission_id=submission.broker_submission_id)
    else:
        return TaskProgressReport.CANCELLED


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.add_accession_to_submission_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def add_accession_to_submission_issue_task(self, prev_task_result=None,
                                           submission_id=None,
                                           target_archive=None):
    # No submission will be returned if submission.status is error
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    # TODO: althouht filter for primary should deliver only on ticket, a dedicated manager method
    #   would be cleaner (no .first() on query set)
    # TODO: result is a list of GFbio helpdesk tickets wich are primary,
    #   tecnically len can only be 1, due to model.save ...
    # existing_tickets = submission.additionalreference_set.filter(
    #     Q(type=AdditionalReference.GFBIO_HELPDESK_TICKET) & Q(primary=True))
    reference = submission.get_primary_helpdesk_reference()

    submitter_name = 'Submitter'
    try:
        user = User.objects.get(pk=int(submission.submitting_user))
        if len(user.name):
            submitter_name = user.name
    except User.DoesNotExist as e:
        logger.warning(
            'tasks.py | add_accession_to_submission_issue_task | '
            'submission_id={0} | No user with '
            'submission.submiting_user={1} | '
            '{2}'.format(submission_id, submission.submitting_user, e))
    except ValueError as ve:
        logger.warning(
            'tasks.py | add_accession_to_submission_issue_task | '
            'submission_id={0} | ValueError with '
            'submission.submiting_user={1} | '
            '{2}'.format(submission_id, submission.submitting_user, ve))

    # TODO: previous task is process_ena_response_task, if ena responded successfully
    #  and delievered accesstions, theses are appended as persistentidentifiers
    #  if all worked Pids shoul be in DB and process returns true
    # TODO: makes sense only for ENA or ENA_PANGAEA targets
    if reference and prev_task_result is True:
        if target_archive == ENA or target_archive == ENA_PANGAEA:
            study_pid = submission.brokerobject_set.filter(
                type='study'
            ).first().persistentidentifier_set.filter(
                pid_type='PRJ'
            ).first()

            jira_client = JiraClient(
                resource=site_configuration.helpdesk_server)
            jira_client.add_comment(
                key_or_issue=reference.reference_key,
                text=JIRA_ACCESSION_COMMENT_TEMPLATE.format(
                    submitter_name=submitter_name,
                    primary_accession=study_pid.pid
                )
            )
            return jira_error_auto_retry(jira_client=jira_client, task=self,
                                         broker_submission_id=submission.broker_submission_id)


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.add_accession_link_submission_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def add_accession_link_to_submission_issue_task(self, prev_task_result=None,
                                                submission_id=None,
                                                target_archive=None):
    # No submission will be returned if submission.status is error
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    reference = submission.get_primary_helpdesk_reference()

    if reference and prev_task_result is True:
        if target_archive == ENA or target_archive == ENA_PANGAEA:
            study_pid = submission.brokerobject_set.filter(
                type='study'
            ).first().persistentidentifier_set.filter(
                pid_type='PRJ'
            ).first()

            jira_client = JiraClient(
                resource=site_configuration.helpdesk_server)
            jira_client.add_ena_study_link_to_issue(reference.reference_key,
                                                    study_pid.pid)
            return jira_error_auto_retry(jira_client=jira_client, task=self,
                                         broker_submission_id=submission.broker_submission_id)


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.add_posted_comment_to_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def add_posted_comment_to_issue_task(self, prev_task_result=None,
                                     submission_id=None, comment='',
                                     user_values={}):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    reference = submission.get_primary_helpdesk_reference()

    if reference:
        comment_text = comment
        if 'username' in user_values.keys() and 'email' in user_values.keys():
            comment_text = SUBMISSION_COMMENT_TEMPLATE.format(
                user_values.get('username', ''),
                user_values.get('email', ''),
                comment)
        jira_client = JiraClient(resource=site_configuration.helpdesk_server)
        jira_client.add_comment(
            key_or_issue=reference.reference_key,
            text=comment_text)
        return jira_error_auto_retry(jira_client=jira_client, task=self,
                                     broker_submission_id=submission.broker_submission_id)
    else:
        logger.info(
            msg='add_posted_comment_to_issue_task no tickets found. '
                'submission_id={0} '.format(submission_id)
        )

        return retry_no_ticket_available_exception(
            task=self,
            broker_submission_id=submission.broker_submission_id,
            number_of_tickets=1 if reference else 0
        )


# FIXME: here problems while using new jirclient to attach, especiall while put submissionupload
@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.attach_to_submission_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def attach_to_submission_issue_task(self, kwargs=None, submission_id=None,
                                    submission_upload_id=None, ):
    logger.info(
        msg='attach_to_submission_issue_task. submission_id={0} | submission_upload_id={1}'
            ''.format(submission_id, submission_upload_id))

    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        logger.info(
            msg='attach_to_submission_issue_task no Submission'
                ' found. return {2}. | submission_id={0} | submission_upload_id={1}'
                ''.format(submission_id, submission_upload_id,
                          TaskProgressReport.CANCELLED))
        return TaskProgressReport.CANCELLED

    reference = submission.get_primary_helpdesk_reference()

    logger.info(
        msg='attach_to_submission_issue_task | reference={0}'.format(reference))

    # TODO: if no ticket available, the reason may that this task is started independened of
    #  submission transfer chain that creates the ticket, so a proper retry has to be
    #  implemented
    if reference:
        submission_upload = submission.submissionupload_set.filter(
            attach_to_ticket=True).filter(pk=submission_upload_id).first()
        logger.info(
            msg='attach_to_submission_issue_task | submission_upload={0}'.format(
                submission_upload))
        if submission_upload:

            do_attach = False
            if submission_upload.attachment_id is None:
                do_attach = True
            if submission_upload.modified_recently:
                do_attach = True

            if not do_attach:
                logger.info(
                    msg='attach_to_submission_issue_task | do_attach={0} | return {1}'.format(
                        do_attach, TaskProgressReport.CANCELLED))
                return TaskProgressReport.CANCELLED

            # TODO: access media nginx https://stackoverflow.com/questions/8370658/how-to-serve-django-media-files-via-nginx
            jira_client = JiraClient(
                resource=site_configuration.helpdesk_server,
            )
            attachment = jira_client.add_attachment(
                key=reference.reference_key,
                file=submission_upload.file,
            )

            jira_error_auto_retry(jira_client=jira_client, task=self,
                                  broker_submission_id=submission.broker_submission_id)

            submission_upload.attachment_id = attachment.id
            submission_upload.modified_recently = False
            submission_upload.save(ignore_attach_to_ticket=True)

            logger.info(
                msg='attach_to_submission_issue_task | do_attach={0} | return {1}'.format(
                    do_attach, True))

            return True
        else:
            logger.info(
                msg='attach_to_submission_issue_task no SubmissionUpload'
                    ' found. submission_id={0} | submission_upload_id={1}'
                    ''.format(submission_id, submission_upload_id))
            return False
    else:
        logger.info(
            msg='attach_to_submission_issue_task no tickets found. '
                'submission_id={0} | submission_upload_id={1}'
                ''.format(submission_id, submission_upload_id))

        return retry_no_ticket_available_exception(
            task=self,
            broker_submission_id=submission.broker_submission_id,
            number_of_tickets=1 if reference else 0
        )


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.delete_submission_issue_attachment_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def delete_submission_issue_attachment_task(self, kwargs=None,
                                            submission_id=None,
                                            attachment_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED
    # TODO: temporary solution until workflow is fix,
    #   also needs manager method to prevent exceptions here
    # TODO: maybe attachment id is better than submission upload id, which may be delete
    #   when task executes
    # submission_upload = SubmissionUpload.objects.filter(
    #     pk=submission_upload_id).first()

    jira_client = JiraClient(
        resource=site_configuration.helpdesk_server,
    )
    jira_client.delete_attachment(attachment_id)
    return jira_error_auto_retry(jira_client=jira_client, task=self,
                                 broker_submission_id=submission.broker_submission_id)


# TODO: add tests ...
@celery.task(
    base=SubmissionTask, bind=True, name='tasks.add_pangaea_doi_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def add_pangaea_doi_task(self, prev_task_result=None,
                         pangaea_doi=None, submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    reference = submission.get_primary_helpdesk_reference()
    if reference:
        jira_client = JiraClient(
            resource=site_configuration.helpdesk_server,
        )
        jira_client.add_comment(
            key_or_issue=reference.reference_key,
            text='Pangaea DOI: {0}. broker_submission_id: {1}'.format(
                pangaea_doi, submission.broker_submission_id)
        )
        return jira_error_auto_retry(jira_client=jira_client, task=self,
                                     broker_submission_id=submission.broker_submission_id)


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.add_pangaealink_to_submission_issue_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def add_pangaealink_to_submission_issue_task(
        self,
        prev=None,
        submission_id=None):
    submission, site_configuration = get_submission_and_site_configuration(
        submission_id=submission_id,
        task=self,
        include_closed=True
    )
    if submission == TaskProgressReport.CANCELLED:
        return TaskProgressReport.CANCELLED

    helpdesk_reference = submission.get_primary_helpdesk_reference()
    pangaea_reference = submission.get_primary_pangaea_reference()

    if helpdesk_reference and pangaea_reference:
        jira_client = JiraClient(
            resource=site_configuration.helpdesk_server)

        jira_client.add_comment(
            key_or_issue=helpdesk_reference.reference_key,
            text='[Pangaea Ticket {1}|{0}{1}]'.format(
                PANGAEA_ISSUE_VIEW_URL,
                pangaea_reference.reference_key)
        )
        return jira_error_auto_retry(jira_client=jira_client, task=self,
                                     broker_submission_id=submission.broker_submission_id)


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.fetch_ena_reports_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def fetch_ena_reports_task(self):
    TaskProgressReport.objects.create_initial_report(
        submission=None,
        task=self)
    # user = User.objects.get(username=HOSTING_SITE, is_site=True)
    # site_configuration = SiteConfiguration.objects.get_site_configuration(
    #     site=user
    # )
    # site_configuration = user.site_configuration
    site_configuration = SiteConfiguration.objects.get_hosting_site_configuration()
    if site_configuration is None or site_configuration.ena_report_server is None:
        return TaskProgressReport.CANCELLED

    for report_type in EnaReport.REPORT_TYPES:
        type_key, type_name = report_type
        try:
            response, request_id = fetch_ena_report(site_configuration,
                                                    type_name)
            if response.ok:
                obj, updated = EnaReport.objects.update_or_create(
                    report_type=type_key,
                    defaults={
                        'report_type': type_key,
                        'report_data': json.loads(response.content)
                    }
                )
            else:
                res = raise_transfer_server_exceptions(
                    response=response,
                    task=self,
                    max_retries=SUBMISSION_MAX_RETRIES)
        except ConnectionError as e:
            logger.error(
                msg='tasks.py | fetch_ena_reports_task | url={1} title={2} '
                    '| connection_error {0}'.format(
                    e,
                    site_configuration.ena_report_server.url,
                    site_configuration.ena_report_server.title)
            )
            return TaskProgressReport.CANCELLED
    return True


@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.update_persistent_identifier_report_status_task',
)
def update_persistent_identifier_report_status_task(self):
    TaskProgressReport.objects.create_initial_report(
        submission=None,
        task=self)
    logger.info(
        msg='tasks.py | update_persistent_identifier_report_status_task '
            '| start update')
    success = update_persistent_identifier_report_status()
    logger.info(
        msg='tasks.py | update_persistent_identifier_report_status_task '
            '| success={0}'.format(success))

    return True

@celery.task(
    base=SubmissionTask,
    bind=True,
    name='tasks.notify_user_embargo_expiry_task',
    autoretry_for=(TransferServerError,
                   TransferClientError
                   ),
    retry_kwargs={'max_retries': SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True
)
def notify_user_embargo_expiry_task(self):

    TaskProgressReport.objects.create_initial_report(
        submission=None,
        task=self)

    site_configuration = SiteConfiguration.objects.get_hosting_site_configuration()
    if site_configuration is None or site_configuration.helpdesk_server is None:
        return TaskProgressReport.CANCELLED

    all_submissions = Submission.objects.all()
    for submission in all_submissions:
        # get study object
        study = submission.brokerobject_set.filter(type='study').first()
        if study:
            # get persistent identifier
            study_pid = study.persistentidentifier_set.filter(pid_type='PRJ').first()
            if study_pid:
                # check if hold_date is withing 2 weeks
                two_weeks_from_now = datetime.date.today() + datetime.timedelta(days=14)
                should_notify = True
                # check if user was already notified
                if study_pid.user_notified and study_pid.user_notified <= two_weeks_from_now:
                    should_notify = False
                if submission.embargo <= two_weeks_from_now and should_notify:
                    # send embargo notification comment to JIRA
                    comment = """
                    Dear submitter,

                    the embargo of your data will expire on {}.
                    After that date, we will release all data associated with this submission.
                    You can change the embargo date directly in our submission system.

                    Best regards,
                    GFBio Data Submission Team""".format(submission.embargo.isoformat())

                    submission, site_configuration = get_submission_and_site_configuration(
                        submission_id=submission.id,
                        task=self,
                        include_closed=True
                    )
                    reference = submission.get_primary_helpdesk_reference()

                    jira_client = JiraClient(resource=site_configuration.helpdesk_server)
                    jira_client.add_comment(
                        key_or_issue=reference.reference_key,
                        text=comment,
                    )

                    jira_error_auto_retry(jira_client=jira_client, task=self,
                                          broker_submission_id=submission.broker_submission_id)
                    if jira_client.comment:
                        study_pid.user_notified = datetime.date.today()
                        study_pid.save()

                        return {
                            'submission': submission.id,
                            'issue_key': reference.reference_key,
                            'embargo': submission.embargo.isoformat(),
                            'user_notified_on': datetime.date.today().isoformat(),
                        }
    return True
