import json
import os
import shutil
from urllib.parse import urlparse
from uuid import uuid4
from unittest import skip

import responses
from django.contrib.auth.models import Permission
from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import TestCase
from django.urls import reverse
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from config.settings.base import MEDIA_URL, MEDIA_ROOT
from gfbio_submissions.brokerage.configuration.settings import \
    JIRA_ISSUE_URL, JIRA_ATTACHMENT_SUB_URL, JIRA_ATTACHMENT_URL
from gfbio_submissions.brokerage.models import Submission, \
    AdditionalReference, \
    TaskProgressReport, SubmissionUpload, BrokerObject
from gfbio_submissions.brokerage.serializers import SubmissionSerializer
from gfbio_submissions.brokerage.tests.utils import _get_jira_attach_response, \
    _get_jira_issue_response, _get_taxonomic_min_data, _get_test_data_dir_path
from gfbio_submissions.generic.models import SiteConfiguration, \
    ResourceCredential
from gfbio_submissions.users.models import User


class TestSubmissionAtaxUploadView(TestCase):

    # TODO: move to utils or similar ...
    @classmethod
    def _create_submission_via_serializer(cls):
        serializer = SubmissionSerializer(data={
            'target': 'ATAX',
            'release': True,
            'data':  _get_taxonomic_min_data()
        })
        serializer.is_valid()
        submission = serializer.save(user=User.objects.first())
        BrokerObject.objects.add_submission_data(submission)
        return submission

    @classmethod
    def setUpTestData(cls):
        resource_cred = ResourceCredential.objects.create(
            title='Resource Title',
            url='https://www.example.com',
            authentication_string='letMeIn'
        )

        cls.site_config = SiteConfiguration.objects.create(
            title='default',
            release_submissions=False,
            ena_server=resource_cred,
            pangaea_token_server=resource_cred,
            pangaea_jira_server=resource_cred,
            helpdesk_server=resource_cred,
            comment='Default configuration',
        )
        user = User.objects.create_user(
            username='horst', email='hans@hans.de', password='password321')
        permissions = Permission.objects.filter(
            content_type__app_label='brokerage',
            codename__endswith='submissionupload'
        )
        user.user_permissions.add(*permissions)
        user.site_configuration = cls.site_config
        user.save()
        token = Token.objects.create(user=user)
        client = APIClient()
        client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        cls.api_client = client

        user = User.objects.create_user(
            username='kevin', email='kevin@kevin.de', password='secret',
            is_staff=True)
        token = Token.objects.create(user=user)
        client = APIClient()
        client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
        cls.other_api_client = client

        submission = cls._create_submission_via_serializer()
        submission.additionalreference_set.create(
            type=AdditionalReference.GFBIO_HELPDESK_TICKET,
            reference_key='FAKE_KEY',
            primary=True
        )
        cls._create_submission_via_serializer()

    @classmethod
    def tearDownClass(cls):
        super(TestSubmissionAtaxUploadView, cls).tearDownClass()
        [shutil.rmtree(path='{0}{1}{2}'.format(MEDIA_ROOT, os.sep, o),
                       ignore_errors=False) for o in os.listdir(MEDIA_ROOT)]

    @classmethod
    def _create_test_data(cls, path, content='test123\n', delete=True,
                          attach=False):
        if delete:
            cls._delete_test_data()
        f = open(path, 'w')
        f.write(content)
        f.close()
        f = open(path, 'rb')
        return {
            'file': f,
            'attach_to_ticket': attach,
        }

    @classmethod
    def _open_atax_test_file(cls, path, delete=True,
                          attach=False):
        if delete:
            cls._delete_test_data()
        f = open(path, 'rb')
        return {
            'file': f,
            'attach_to_ticket': attach,
        }

    @classmethod
    def _create_atax_csv_test_data(cls, delete=True, invalid=False, update=False, attach=False, meta_data=False):
        file_name = 'csv_files/specimen_table_Platypelis_with_error.csv' if invalid else 'csv_files/specimen_table_Platypelis.csv'
        if update:
            file_name = 'csv_files/specimen_table_Platypelis.csv'

        if delete:
            cls._delete_test_data()
        csv_file = open(
            os.path.join(_get_test_data_dir_path(), file_name),
            'rb'
        )
        return {
            'file': csv_file,
            'meta_data': meta_data,
            'attach_to_ticket': attach,
        }

    @classmethod
    def _create_atax_csv_measurement_data(cls, delete=True, invalid=False, update=False, attach=False, meta_data=False):
        file_name = 'csv_files/measurement_table_Platypelis_with_error.csv' if invalid else 'csv_files/measurement_table_Platypelis.csv'
        if update:
            file_name = 'csv_files/measurement_table_Platypelis.csv'

        if delete:
            cls._delete_test_data()
        csv_file = open(
            os.path.join(_get_test_data_dir_path(), file_name),
            'rb'
        )
        return {
            'file': csv_file,
            'meta_data': meta_data,
            'attach_to_ticket': attach,
        }

    @staticmethod
    def _delete_test_data():
        SubmissionUpload.objects.all().delete()

    @classmethod
    def _do_post_with_mocked_responses(cls,
                                       file_name='test_primary_data_file_1111',
                                       attach=False):
        site_config = SiteConfiguration.objects.first()
        submission = Submission.objects.first()
        responses.add(responses.GET,
                      '{0}/rest/api/2/field'.format(
                          site_config.helpdesk_server.url),
                      status=200)
        issue_json = _get_jira_issue_response()
        responses.add(
            responses.GET,
            '{0}/rest/api/2/issue/FAKE_KEY'.format(
                site_config.helpdesk_server.url),
            json=issue_json
        )
        url = reverse(
            'brokerage:submissions_upload',
            kwargs={
                'broker_submission_id': submission.broker_submission_id
            })
        responses.add(responses.POST, url, json={}, status=200)

        responses.add(responses.POST,
                      '{0}{1}/{2}/{3}'.format(
                          site_config.helpdesk_server.url,
                          JIRA_ISSUE_URL,
                          'SAND-1661',
                          JIRA_ATTACHMENT_SUB_URL,
                      ),
                      json=_get_jira_attach_response(),
                      status=200)

        data = cls._create_test_data('/tmp/{0}'.format(file_name),
                                     attach=attach)

        return cls.api_client.post(url, data, format='multipart')

    #start with unit tests:
    @responses.activate
    def test_valid_atax_upload_post_with_taxonomic_specimen_data(self):
        submission = Submission.objects.first()

        self.assertEqual('ATAX', submission.target)

        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})

        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_atax_csv_test_data(meta_data=True)
        # validation
        response = self.api_client.post(url, data, format='multipart')

        self.assertEqual(201, response.status_code)
        self.assertEqual(1, len(submission.submissionupload_set.all()))
        self.assertTrue(submission.submissionupload_set.first().meta_data)

        self.assertEqual(submission.target, response.data['target'])
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'user', response.content)
        self.assertEqual(User.objects.first().username, response.data['user'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))

    @responses.activate
    def test_valid_atax_upload_post_with_taxonomic_measurement_data(self):
        submission = Submission.objects.first()

        self.assertEqual('ATAX', submission.target)

        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})

        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_atax_csv_measurement_data(meta_data=False)
        # validation
        response = self.api_client.post(url, data, format='multipart')

        self.assertEqual(201, response.status_code)
        self.assertEqual(1, len(submission.submissionupload_set.all()))
        self.assertFalse(submission.submissionupload_set.first().meta_data)

        self.assertEqual(submission.target, response.data['target'])
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'user', response.content)
        self.assertEqual(User.objects.first().username, response.data['user'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))

    @responses.activate
    def test_valid_atax_upload_post_with_combined_specimen_measurement_data(self):
        submission = Submission.objects.first()

        self.assertEqual('ATAX', submission.target)

        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})

        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_atax_csv_test_data(meta_data=True)
        # validation
        response = self.api_client.post(url, data, format='multipart')

        self.assertEqual(201, response.status_code)
        self.assertEqual(1, len(submission.submissionupload_set.all()))
        self.assertTrue(submission.submissionupload_set.first().meta_data)

        self.assertEqual(submission.target, response.data['target'])
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'user', response.content)
        self.assertEqual(User.objects.first().username, response.data['user'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))

        # start measurement:
        # responses.add(responses.POST, url, json={}, status=200)
        submission = Submission.objects.first()

        self.assertEqual('ATAX', submission.target)

        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})

        data = self._create_atax_csv_measurement_data(delete=False, meta_data=False)
        # validation
        response = self.api_client.post(url, data, format='multipart')

        self.assertEqual(201, response.status_code)


        specimen_upload = submission.submissionupload_set.get(
            file='{0}/specimen_table_Platypelis.csv'.format(
                submission.broker_submission_id
            )
        )
        measurement_upload = submission.submissionupload_set.get(
            file='{0}/measurement_table_Platypelis.csv'.format(
                submission.broker_submission_id
            )
        )

        self.assertEqual(3, len(submission.auditabletextdata_set.all()))

        self.assertEqual(2, len(submission.submissionupload_set.all()))
        # the specimen:
        self.assertTrue(submission.submissionupload_set.first().meta_data)

        self.assertEqual(submission.target, response.data['target'])
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'user', response.content)
        self.assertEqual(User.objects.first().username, response.data['user'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))

    @responses.activate
    def test_valid_atax_upload_post_with_invalid_taxonomic_specimen_data(self):
        submission = Submission.objects.first()

        self.assertEqual('ATAX', submission.target)

        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})

        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_atax_csv_test_data(meta_data=True, invalid=True)
        # validation
        response = self.api_client.post(url, data, format='multipart')

        self.assertEqual(201, response.status_code)
        self.assertEqual(1, len(submission.submissionupload_set.all()))
        self.assertTrue(submission.submissionupload_set.first().meta_data)
        self.assertTrue(submission.status,Submission.ERROR)

        self.assertEqual(submission.target, response.data['target'])
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'user', response.content)
        self.assertEqual(User.objects.first().username, response.data['user'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))


    def test_random_submission_no_upload(self):
        url = reverse(
            'brokerage:submissions_upload',
            kwargs={
                'broker_submission_id': uuid4()
            })
        data = self._create_atax_csv_test_data()
        response = self.api_client.post(url, data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertIn(b'No submission', response.content)

    @responses.activate
    def test_valid_atax_upload_two_tasks(self):
        submission = Submission.objects.all().first()
        self.assertEqual('ATAX', submission.target)

        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_atax_csv_test_data()

        reports_len = len(TaskProgressReport.objects.all())
        uploads_len = len(SubmissionUpload.objects.all())
        response = self.api_client.post(url, data, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertEqual(submission.target, response.data['target'])
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'user', response.content)
        self.assertEqual(User.objects.first().username, response.data['user'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))
        # TODO: no task is triggered yet
        self.assertEqual(len(TaskProgressReport.objects.all()), reports_len+2)
        self.assertGreater(len(SubmissionUpload.objects.all()), uploads_len)

    @responses.activate
    def test_valid_atax_file_put_no_task(self):
        submission = Submission.objects.first()
        reports_len = len(TaskProgressReport.objects.all())
        response = self._do_post_with_mocked_responses(
            file_name='test_primary_data_file_1111')
        self.assertEqual(201, response.status_code)
        self.assertEqual(1, len(SubmissionUpload.objects.all()))
        fname = SubmissionUpload.objects.all().first().file.name
        self.assertIn('test_primary_data_file_1111', fname)
        content = json.loads(response.content.decode('utf-8'))
        url = reverse(
            'brokerage:submissions_upload_detail',
            kwargs={
                'broker_submission_id': submission.broker_submission_id,
                'pk': content.get('id')
            })
        data = self._create_atax_csv_test_data(delete=False)
        response = self.api_client.put(url, data, format='multipart')
        self.assertEqual(200, response.status_code)
        self.assertEqual(1, len(SubmissionUpload.objects.all()))
        fname = SubmissionUpload.objects.all().first().file.name
        self.assertIn('specimen_table_Platypelis', fname)
        self.assertEqual(len(TaskProgressReport.objects.all()), reports_len+4)

    @responses.activate
    def test_atax_file_put_modified_content_with_task(self):
        submission = Submission.objects.first()
        response = self._do_post_with_mocked_responses(
            file_name='specimen_table_Platypelis', attach=True)

        self.assertEqual(1, len(submission.submissionupload_set.all()))
        submission_upload = submission.submissionupload_set.first()
        checksum = submission_upload.md5_checksum

        content = json.loads(response.content.decode('utf-8'))
        url = reverse(
            'brokerage:submissions_upload_detail',
            kwargs={
                'broker_submission_id': submission.broker_submission_id,
                'pk': content.get('id')
            })
        # update with other taxonomic test csv file with more gaps:
        data = self._create_atax_csv_test_data(delete=False,invalid=True,attach=True)
        self.api_client.put(url, data, format='multipart')

        self.assertEqual(1, len(submission.submissionupload_set.all()))
        submission_upload = submission.submissionupload_set.first()
        self.assertNotEqual(checksum, submission_upload.md5_checksum)
        self.assertFalse(submission_upload.modified_recently)

        task_reports = TaskProgressReport.objects.all().order_by('created')
        self.assertEqual(10, len(task_reports))
        self.assertTrue(task_reports.first().task_return_value)
        self.assertTrue(task_reports.last().task_return_value)

    def test_empty_atax_upload(self):
        submission = Submission.objects.first()
        url = reverse(
            'brokerage:submissions_upload',
            kwargs={
                'broker_submission_id': submission.broker_submission_id
            })
        response = self.api_client.post(url, {}, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn(b'No file was submitted.', response.content)

    @responses.activate
    def test_valid_atax_file_patch_no_task(self):
        submission = Submission.objects.first()
        site_config = SiteConfiguration.objects.first()
        url = reverse(
            'brokerage:submissions_upload',
            kwargs={
                'broker_submission_id': submission.broker_submission_id
            })
        responses.add(responses.POST, url, json={}, status=200)
        responses.add(responses.POST,
                      '{0}{1}/{2}/{3}'.format(
                          site_config.helpdesk_server.url,
                          JIRA_ISSUE_URL,
                          'FAKE_KEY',
                          JIRA_ATTACHMENT_SUB_URL,
                      ),
                      json=_get_jira_attach_response(),
                      status=200)

        data = self._create_atax_csv_test_data(delete=True, invalid=True, attach=False)
        response = self.api_client.post(url, data, format='multipart')
        content = json.loads(response.content.decode('utf-8'))
        self.assertFalse(SubmissionUpload.objects.first().meta_data)

        url = reverse(
            'brokerage:submissions_upload_patch',
            kwargs={
                'broker_submission_id': submission.broker_submission_id,
                'pk': content.get('id')
            })
        response = self.api_client.patch(url, {'meta_data': True})
        self.assertEqual(200, response.status_code)
        self.assertTrue(SubmissionUpload.objects.first().meta_data)
