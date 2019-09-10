# -*- coding: utf-8 -*-
from django.core.mail import mail_admins

from gfbio_submissions.brokerage.configuration.settings import \
    TASK_FAIL_SUBJECT_TEMPLATE, TASK_FAIL_TEXT_TEMPLATE, SUBMISSION_MAX_RETRIES
from gfbio_submissions.brokerage.exceptions import TransferInternalError, \
    raise_response_exceptions, TransferClientError
from gfbio_submissions.brokerage.models import TaskProgressReport, Submission, \
    SiteConfiguration


def _safe_get_submission(submission_id, include_closed):
    submission = None
    try:
        submission = Submission.objects.get_non_error_submission(
            submission_id) if include_closed else Submission.objects.get_open_submission(
            submission_id)
    except Submission.DoesNotExist as e:
        print('NO submission ', e)
        # TODO: logging this error
        # raise TransferInternalError(
        #     'SubmissionTransferHandler | get_submission_and_site_configuration | '
        #     'no Submission available for submission pk={0}. include_closed={1}'.format(
        #         submission_id,
        #         include_closed,
        #     )
        # )

    return submission


def _safe_get_site_config(submission):
    site_config = None
    if submission:
        try:
            site_config = SiteConfiguration.objects.get_site_configuration(
                submission.site)
        except SiteConfiguration.DoesNotExist as e:
            print('No SiteConfig ', e)
            # TODO: logging this error
            # raise TransferInternalError(
            #     'SubmissionTransferHandler | get_submission_and_site_configuration | '
            #     'no SiteConfiguration available for site={0}.'.format(
            #         submission.site,
            #     )
            # )

    return site_config


def _get_submission_and_site_configuration(submission_id, task,
                                           include_closed):
    try:
        submission = _safe_get_submission(submission_id, include_closed)
        if submission is None:
            # task.update_state(
            #     state=states.FAILURE,
            #     meta='SubmissionTransferHandler | get_submission_and_'
            #          'site_configuration | no Submission available for '
            #          'submission pk={0}. include_closed={1}'
            #          ''.format(submission_id, include_closed, )
            # )
            # raise Ignore()
            # TODO: logging this error
            raise TransferInternalError(
                'SubmissionTransferHandler | get_submission_and_site_configuration | '
                'no Submission available for submission pk={0}. include_closed={1}'.format(
                    submission_id,
                    include_closed,
                )
            )
        site_config = _safe_get_site_config(submission)
        if site_config is None:
            # TODO: logging this error
            raise TransferInternalError(
                'SubmissionTransferHandler | get_submission_and_site_configuration | '
                'no SiteConfiguration available for site={0}.'.format(
                    submission.site,
                )
            )
        if task:
            TaskProgressReport.objects.create_initial_report(
                submission=submission,
                task=task)
        return submission, site_config
    except TransferInternalError as e:
        # TODO: logging this error, with ref to task/self
        return TaskProgressReport.CANCELLED, None


def send_task_fail_mail(broker_submission_id, task):
    mail_admins(
        subject=TASK_FAIL_SUBJECT_TEMPLATE.format(
            task.name,
            broker_submission_id
        ),
        message=TASK_FAIL_TEXT_TEMPLATE.format(
            task.name,
            task.request.retries,
            broker_submission_id,
        ),
    )
    return TaskProgressReport.CANCELLED


def get_submission_and_site_configuration(submission_id, task,
                                          include_closed):
    try:
        return _get_submission_and_site_configuration(submission_id, task,
                                                      include_closed)
    except TransferInternalError as ce:
        return send_task_fail_mail('*', task), None


def raise_transfer_server_exceptions(response, task, broker_submission_id,
                                     max_retries):
    print('RAISE_TRANSFER_SERVER_EXCEPTION ', response.status_code, ' ',
          response.content, ' ', task, ' ', broker_submission_id,
          task.request.retries)
    print('BREAK AND SEND ', task.request.retries >= max_retries)
    if task.request.retries >= max_retries:
        print('SEND, THEN RETURN')
        return send_task_fail_mail(broker_submission_id, task)
    else:
        try:
            raise_response_exceptions(response)
        except TransferClientError as ce:
            print('SEND, THEN RETURN ', ce)
            return send_task_fail_mail(broker_submission_id, task)


def jira_error_auto_retry(jira_client, task, broker_submission_id,
                          max_retries=SUBMISSION_MAX_RETRIES):
    if jira_client and jira_client.error:
        return raise_transfer_server_exceptions(
            response=jira_client.error.response,
            task=task,
            broker_submission_id=broker_submission_id,
            max_retries=max_retries,
        )
    return True


def request_error_auto_retry(response, task, broker_submission_id,
                             max_retries=SUBMISSION_MAX_RETRIES):
    if response.status_code and response.status_code >= 400:
        return raise_transfer_server_exceptions(
            response, task, broker_submission_id, max_retries
        )
    return True
