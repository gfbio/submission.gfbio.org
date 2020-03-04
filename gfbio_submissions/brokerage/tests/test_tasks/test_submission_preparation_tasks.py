# -*- coding: utf-8 -*-
from unittest.mock import patch

from gfbio_submissions.brokerage.models import Submission, BrokerObject, \
    SiteConfiguration, \
    TaskProgressReport
from gfbio_submissions.brokerage.tasks import \
    create_broker_objects_from_submission_data_task, \
    check_on_hold_status_task
from .test_tasks_base import TestTasks


class TestSubmissionPreparationTasks(TestTasks):

    def test_create_broker_objects_from_submission_data_task(self):
        submission = Submission.objects.first()
        submission.release = True
        submission.status = Submission.SUBMITTED
        submission.save()
        BrokerObject.objects.filter(submissions=submission).delete()
        broker_objects = BrokerObject.objects.filter(submissions=submission)
        self.assertEqual(0, len(broker_objects))
        result = create_broker_objects_from_submission_data_task.apply_async(
            kwargs={
                'submission_id': submission.id
            },
        )
        self.assertTrue(result.successful())
        broker_objects = BrokerObject.objects.filter(submissions=submission)
        self.assertEqual(5, len(broker_objects))

    def test_check_on_hold_status_task(self):
        result = check_on_hold_status_task.apply_async(
            kwargs={
                'submission_id': Submission.objects.first().id
            }
        )
        self.assertTrue(result.successful())

    @patch('gfbio_submissions.brokerage.tasks.logger')
    def test_check_on_hold_proceed_without_email(self, mock_logger):
        submission = Submission.objects.first()
        conf = SiteConfiguration.objects.first()
        conf.release_submissions = True
        conf.save()
        check_on_hold_status_task.apply_async(
            kwargs={
                'submission_id': submission.id
            }
        )
        self.assertTrue(mock_logger.info.called)
        reports = TaskProgressReport.objects.all()
        task_names = [r.task_name for r in reports]
        self.assertTrue('tasks.check_on_hold_status_task' in task_names)
