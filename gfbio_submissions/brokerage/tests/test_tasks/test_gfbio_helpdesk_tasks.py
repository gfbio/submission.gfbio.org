# -*- coding: utf-8 -*-

import responses
from django.test import override_settings

from gfbio_submissions.brokerage.configuration.settings import \
    JIRA_ISSUE_URL, JIRA_COMMENT_SUB_URL, ENA_PANGAEA
from gfbio_submissions.brokerage.models import Submission, \
    TaskProgressReport
from gfbio_submissions.brokerage.tasks import create_submission_issue_task, \
    add_accession_to_submission_issue_task, \
    add_pangaealink_to_submission_issue_task, \
    add_posted_comment_to_issue_task, \
    update_submission_issue_task, add_accession_link_to_submission_issue_task
from gfbio_submissions.generic.models import SiteConfiguration
from gfbio_submissions.users.models import User
from .test_helpdesk_tasks_base import TestHelpDeskTasksBase


class TestGFBioHelpDeskTasks(TestHelpDeskTasksBase):

    # TODO: may these have to be moved to other test class (Taskprogressreport ...)
    #   or removed ... Now for testing behaviour on GFBIO-2589
    @responses.activate
    def test_tpr_task_success(self):
        self._add_success_responses()
        submission = Submission.objects.last()
        self.assertEqual(0, len(TaskProgressReport.objects.all()))
        result = create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        self.assertTrue(result.successful())
        self.assertEqual(1, len(TaskProgressReport.objects.all()))

    @responses.activate
    def test_tpr_task_client_fail(self):
        self._add_client_fail_responses()
        submission = Submission.objects.last()
        self.assertEqual(0, len(TaskProgressReport.objects.all()))
        result = create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        self.assertEqual(1, len(TaskProgressReport.objects.all()))
        self.assertTrue(result.successful())

    @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
                       CELERY_TASK_EAGER_PROPAGATES=False)
    @responses.activate
    def test_tpr_task_server_fail(self):
        self._add_server_fail_responses()
        submission = Submission.objects.last()
        self.assertEqual(0, len(TaskProgressReport.objects.all()))
        result = create_submission_issue_task.apply(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        self.assertEqual(1, len(TaskProgressReport.objects.all()))
        self.assertFalse(result.successful())

    @responses.activate
    @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
                       CELERY_TASK_EAGER_PROPAGATES=False)
    def test_tpr_add_pangaea_link_server_error(self):
        submission = Submission.objects.first()
        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(
                self.default_site_config.helpdesk_server.url),
            status=200,
        )
        url = '{0}{1}/{2}/{3}'.format(
            self.default_site_config.helpdesk_server.url,
            JIRA_ISSUE_URL,
            'FAKE_KEY',
            JIRA_COMMENT_SUB_URL,
        )
        responses.add(responses.POST, url, status=500,
                      json={'bla': 'blubb'})
        result = add_pangaealink_to_submission_issue_task.apply(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        self.assertEqual(1, len(TaskProgressReport.objects.all()))
        tpr = TaskProgressReport.objects.first()
        self.assertEqual('RETRY', tpr.status)
        self.assertEqual('tasks.add_pangaealink_to_submission_issue_task',
                         tpr.task_name)
        self.assertEqual(TaskProgressReport.CANCELLED, tpr.task_return_value)

    @responses.activate
    def test_tpr_add_pangaea_link_client_error(self):
        submission = Submission.objects.first()
        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(
                self.default_site_config.helpdesk_server.url),
            status=200,
        )
        url = '{0}{1}/{2}/{3}'.format(
            self.default_site_config.helpdesk_server.url,
            JIRA_ISSUE_URL,
            'FAKE_KEY',
            JIRA_COMMENT_SUB_URL,
        )
        responses.add(responses.POST, url, status=400, json={'bla': 'blubb'})
        result = add_pangaealink_to_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        tpr = TaskProgressReport.objects.first()
        self.assertEqual('tasks.add_pangaealink_to_submission_issue_task',
                         tpr.task_name)
        self.assertEqual(TaskProgressReport.CANCELLED, tpr.task_return_value)
        self.assertTrue(result.successful())

    @responses.activate
    # @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
    #                    CELERY_TASK_EAGER_PROPAGATES=False)
    def test_tpr_task_success_failing_kwargs(self):
        self._add_success_responses()
        submission = Submission.objects.last()
        self.assertEqual(0, len(TaskProgressReport.objects.all()))

        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(
                self.default_site_config.helpdesk_server.url),
            status=200,
        )
        url = '{0}{1}/{2}/{3}'.format(
            self.default_site_config.helpdesk_server.url,
            JIRA_ISSUE_URL,
            'FAKE_KEY',
            JIRA_COMMENT_SUB_URL,
        )
        responses.add(responses.POST, url, status=400, json={'bla': 'blubb'})
        result = add_pangaealink_to_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.pk + 22,
            }
        )
        # self.assertTrue(result.successful())
        self.assertEqual(1, len(TaskProgressReport.objects.all()))

    # TODO: compare todo above ------------------------------------------------

    @responses.activate
    def test_create_submission_issue_task_success(self):
        submission = Submission.objects.last()
        # TODO: replace bay self.default_site_config
        site_config = SiteConfiguration.objects.first()
        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(site_config.helpdesk_server.url),
            status=200,
        )
        responses.add(
            responses.POST,
            '{0}{1}'.format(site_config.helpdesk_server.url,
                            JIRA_ISSUE_URL),
            json=self.issue_json,
            status=200)
        responses.add(
            responses.GET,
            '{0}/rest/api/2/issue/SAND-1661'.format(
                site_config.helpdesk_server.url),
            json=self.issue_json
        )

        self.assertEqual(0, len(submission.additionalreference_set.all()))
        result = create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        self.assertTrue(result.successful())
        self.assertEqual(1, len(submission.additionalreference_set.all()))

    @responses.activate
    def test_create_submission_issue_task_for_unknown_reporter(self):
        submission = Submission.objects.last()
        site_config = SiteConfiguration.objects.first()
        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(site_config.helpdesk_server.url),
            status=200,
        )
        responses.add(
            responses.POST,
            '{0}{1}'.format(site_config.helpdesk_server.url,
                            JIRA_ISSUE_URL),
            body='{"errorMessages":[],"errors":{"reporter":"The reporter specified is not a user."}}',
            status=400)
        responses.add(
            responses.POST,
            '{0}{1}'.format(site_config.helpdesk_server.url,
                            JIRA_ISSUE_URL),
            json=self.issue_json,
            status=200)
        responses.add(
            responses.GET,
            '{0}/rest/api/2/issue/SAND-1661'.format(
                site_config.helpdesk_server.url),
            json=self.issue_json
        )
        result = create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        self.assertTrue(result.successful())
        tprs = TaskProgressReport.objects.exclude(
            task_name='tasks.update_helpdesk_ticket_task')
        self.assertEqual(1, len(tprs))
        self.assertEqual(1, len(submission.additionalreference_set.all()))

    @responses.activate
    def test_create_submission_issue_task_unicode_text(self):
        submission = Submission.objects.last()
        site_config = SiteConfiguration.objects.first()
        self.assertEqual(0, len(submission.additionalreference_set.all()))
        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(site_config.helpdesk_server.url),
            status=200,
        )
        responses.add(
            responses.POST,
            '{0}{1}'.format(site_config.helpdesk_server.url,
                            JIRA_ISSUE_URL
                            ),
            json=self.issue_json,
            status=200)
        responses.add(
            responses.GET,
            '{0}/rest/api/2/issue/SAND-1661'.format(
                site_config.helpdesk_server.url),
            json=self.issue_json
        )
        result = create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,

            }
        )
        self.assertTrue(result.successful())
        self.assertEqual(1, len(submission.additionalreference_set.all()))

    @responses.activate
    def test_add_accession_to_submission_issue_task_success(self):
        site_config = SiteConfiguration.objects.first()
        self._add_success_responses()
        url = '{0}{1}/{2}/{3}'.format(
            site_config.helpdesk_server.url,
            JIRA_ISSUE_URL,
            'FAKE_KEY',
            JIRA_COMMENT_SUB_URL,
        )
        responses.add(responses.POST, url, json={'bla': 'blubb'}, status=200)
        submission = Submission.objects.first()
        submission.brokerobject_set.create(
            type='study',
            user=User.objects.first(),
        )
        submission.brokerobject_set.filter(
            type='study'
        ).first().persistentidentifier_set.create(
            archive='ENA',
            pid_type='PRJ',
            pid='PRJE0815'
        )
        result = add_accession_to_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
                'prev_task_result': True,  # mimik successful previous task
                'target_archive': ENA_PANGAEA
            }
        )
        self.assertTrue(result.successful())
        self.assertTrue(result.get())

    @responses.activate
    def test_add_accession_link_to_submission_issue_task_success(self):
        site_config = SiteConfiguration.objects.first()
        # TODO: do this & other stuff also in test above (comment task)
        self._add_success_responses()
        responses.add(
            responses.GET,
            '{0}/rest/applinks/latest/listApplicationlinks'.format(
                site_config.helpdesk_server.url),
            status=200
        )
        responses.add(
            responses.POST,
            '{0}/rest/api/2/issue/FAKE_KEY/remotelink'.format(
                site_config.helpdesk_server.url),
            json={
                'id': 10000,
                'self': '{0}/rest/api/2/issue/SAND-1661/remotelink/10000'.format(
                    site_config.helpdesk_server.url)
            },
            status=200,
        )
        submission = Submission.objects.first()
        submission.brokerobject_set.create(
            type='study',
            user=User.objects.first(),
        )
        submission.brokerobject_set.filter(
            type='study'
        ).first().persistentidentifier_set.create(
            archive='ENA',
            pid_type='PRJ',
            pid='PRJE0815'
        )
        result = add_accession_link_to_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
                'prev_task_result': True,  # mimik successful previous task
                'target_archive': ENA_PANGAEA
            }
        )
        self.assertTrue(result.successful())
        self.assertTrue(result.get())

    @responses.activate
    def test_add_pangaealink_to_submission_issue_task_success(self):
        submission = Submission.objects.first()
        url = self._add_comment_reponses()
        responses.add(responses.POST, url,
                      json={'bla': 'blubb'},
                      status=200)

        result = add_pangaealink_to_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        self.assertTrue(result.successful())

    @responses.activate
    def test_add_pangaealink_to_helpdesk_ticket_task_client_error(self):
        submission = Submission.objects.first()
        url = self._add_comment_reponses()
        responses.add(responses.POST, url, status=400, json={'bla': 'blubb'})
        result = add_pangaealink_to_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        self.assertTrue(result.successful())

    # FIXME: what about retries ? are they executed ?
    @responses.activate
    @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
                       CELERY_TASK_EAGER_PROPAGATES=False)
    def test_add_pangaealink_to_helpdesk_ticket_task_server_error(self):
        submission = Submission.objects.first()
        url = self._add_comment_reponses()
        responses.add(responses.POST, url, status=500, json={'bla': 'blubb'})
        result = add_pangaealink_to_submission_issue_task.apply(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        self.assertFalse(result.successful())

    @responses.activate
    def test_add_posted_comment_to_issue_task_success(self):
        submission = Submission.objects.first()
        url = self._add_comment_reponses()
        responses.add(responses.POST, url,
                      json={'bla': 'blubb'},
                      status=200)
        result = add_posted_comment_to_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
                'comment': 'a comment'
            }
        )
        self.assertTrue(result.successful())
        self.assertTrue(result.get())

    @responses.activate
    def test_add_posted_comment_to_issue_task_client_error(self):
        submission = Submission.objects.first()
        url = self._add_comment_reponses()
        responses.add(responses.POST, url, status=400, json={'bla': 'blubb'})
        result = add_posted_comment_to_issue_task.apply_async(
            kwargs={
                'submission_id': submission.pk,
                'comment': 'a comment'
            }
        )
        self.assertTrue(result.successful())
        self.assertEqual(TaskProgressReport.CANCELLED, result.get())

    # FIXME: what about retries ? are they executed ?
    @responses.activate
    @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
                       CELERY_TASK_EAGER_PROPAGATES=False)
    def add_posted_comment_to_issue_task_server_error(self):
        submission = Submission.objects.first()
        url = self._add_comment_reponses()
        responses.add(responses.POST, url, status=500, json={'bla': 'blubb'})
        result = add_posted_comment_to_issue_task.apply(
            kwargs={
                'submission_id': submission.pk,
                'comment': 'a comment'
            }
        )
        self.assertFalse(result.successful())
        # self.assertEqual(TaskProgressReport.CANCELLED, result.get())

    @responses.activate
    def test_create_submission_issue_task_client_error(self):
        submission = Submission.objects.last()
        site_config = SiteConfiguration.objects.first()
        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(site_config.helpdesk_server.url),
            status=200,
        )
        responses.add(
            responses.POST,
            '{0}{1}'.format(site_config.helpdesk_server.url,
                            JIRA_ISSUE_URL),
            json={},
            status=400)
        result = create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        self.assertTrue(result.successful())

    @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
                       CELERY_TASK_EAGER_PROPAGATES=False)
    @responses.activate
    def test_create_submission_issue_task_server_error(self):
        submission = Submission.objects.last()
        site_config = SiteConfiguration.objects.first()
        responses.add(
            responses.GET,
            '{0}/rest/api/2/field'.format(site_config.helpdesk_server.url),
            status=200,
        )
        responses.add(
            responses.POST,
            '{0}{1}'.format(site_config.helpdesk_server.url,
                            JIRA_ISSUE_URL),
            json={},
            status=500)
        result = create_submission_issue_task.apply(
            kwargs={
                'submission_id': submission.pk,
            }
        )
        self.assertFalse(result.successful())

    # FIXME: what about retries ? are they executed ?
    @responses.activate
    @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
                       CELERY_TASK_EAGER_PROPAGATES=False)
    def add_posted_comment_to_issue_task_server_error(self):
        submission = Submission.objects.first()
        url = self._add_comment_reponses()
        responses.add(responses.POST, url, status=500,
                      json={'bla': 'blubb'})
        result = add_posted_comment_to_issue_task.apply(
            kwargs={
                'submission_id': submission.pk,
                'comment': 'a comment'
            }
        )
        self.assertFalse(result.successful())

    @responses.activate
    def test_update_submission_issue_task_success(self):
        submission = Submission.objects.last()
        self._add_success_responses()
        self._add_put_issue_responses()
        create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        result = update_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        self.assertTrue(result.get())
        self.assertEqual(1, len(submission.taskprogressreport_set.filter(
            task_name='tasks.update_submission_issue_task')))

    @responses.activate
    def test_update_submission_issue_task_client_error(self):
        submission = Submission.objects.last()
        self._add_success_responses()
        self._add_put_issue_responses(put_status_code=405)
        create_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        result = update_submission_issue_task.apply_async(
            kwargs={
                'submission_id': submission.id,
            }
        )
        self.assertEqual(TaskProgressReport.CANCELLED, result.get())
        tpr = submission.taskprogressreport_set.filter(
            task_name='tasks.update_submission_issue_task')
        self.assertEqual(1, len(tpr))
        self.assertEqual(TaskProgressReport.CANCELLED,
                         tpr.first().task_return_value)

    @responses.activate
    @override_settings(CELERY_TASK_ALWAYS_EAGER=False,
                       CELERY_TASK_EAGER_PROPAGATES=False)
    def test_update_submission_issue_task_server_error(self):
        submission = Submission.objects.last()
        self._add_success_responses()
        self._add_put_issue_responses(put_status_code=502)
        create_submission_issue_task.apply(
            kwargs={
                'submission_id': submission.id,
            }
        )
        result = update_submission_issue_task.apply(
            kwargs={
                'submission_id': submission.id,
            }
        )
        tpr = submission.taskprogressreport_set.filter(
            task_name='tasks.update_submission_issue_task')
        self.assertEqual(1, len(tpr))
        self.assertEqual(TaskProgressReport.CANCELLED,
                         tpr.first().task_return_value)
        self.assertEqual('502', tpr.first().task_exception)