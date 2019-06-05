# -*- coding: utf-8 -*-
import json
from pprint import pprint
from urllib.parse import urlparse
from uuid import uuid4

import responses
from django.contrib.auth.models import Permission
from django.core.urlresolvers import reverse
from django.test import TestCase
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from config.settings.base import MEDIA_URL
from gfbio_submissions.brokerage.configuration.settings import \
    HELPDESK_API_SUB_URL, HELPDESK_ATTACHMENT_SUB_URL
from gfbio_submissions.brokerage.models import Submission, \
    SiteConfiguration, ResourceCredential, PrimaryDataFile, AdditionalReference, \
    TaskProgressReport, SubmissionUpload
from gfbio_submissions.brokerage.tests.test_models import SubmissionTest
from gfbio_submissions.brokerage.tests.utils import _get_jira_attach_response
from gfbio_submissions.users.models import User


# TODO: remove
# class TestSubmissionFileUpload(TestCase):
#
#     @classmethod
#     def setUpTestData(cls):
#         user = User.objects.create_user(
#             username='horst', email='horst@horst.de', password='password')
#         permissions = Permission.objects.filter(
#             content_type__app_label='brokerage',
#             codename__endswith='submission')
#         user.user_permissions.add(*permissions)
#         permissions = Permission.objects.filter(
#             content_type__app_label='brokerage', codename__endswith='upload')
#         user.user_permissions.add(*permissions)
#         token = Token.objects.create(user=user)
#         SubmissionTest._create_submission_via_serializer()
#         client = APIClient()
#         client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
#         cls.api_client = client
#
#     def _create_test_data(self, path):
#         self._delete_test_data()
#         f = open(path, 'w')
#         f.write('test123\n')
#         f.close()
#         f = open(path, 'rb')
#         return {
#             'file': f,
#         }
#
#     @staticmethod
#     def _delete_test_data():
#         SubmissionFileUpload.objects.all().delete()
#
#     def test_valid_file_upload(self):
#         submission = Submission.objects.all().first()
#         url = reverse(
#             'brokerage:submissions_upload',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id
#             })
#         data = self._create_test_data('/tmp/test_upload')
#         response = self.api_client.post(url, data, format='multipart')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertIn(b'broker_submission_id', response.content)
#         self.assertIn(b'site', response.content)
#         self.assertEqual(User.objects.first().username, response.data['site'])
#         self.assertIn(b'file', response.content)
#         self.assertTrue(
#             urlparse(response.data['file']).path.startswith(MEDIA_URL))
#
#     def test_no_submission_upload(self):
#         url = reverse(
#             'brokerage:submissions_upload',
#             kwargs={
#                 'broker_submission_id': uuid4()
#             })
#         data = self._create_test_data('/tmp/test_upload')
#         response = self.api_client.post(url, data, format='multipart')
#         self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
#         self.assertIn(b'No submission', response.content)
#
#     def test_empty_upload(self):
#         submission = Submission.objects.all().first()
#         url = reverse(
#             'brokerage:submissions_upload',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id
#             })
#         response = self.api_client.post(url, {}, format='multipart')
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
#         self.assertIn(b'No file was submitted.', response.content)
#
#
# # TODO: remove
# class TestPrimaryDataFile(TestCase):
#
#     @classmethod
#     def setUpTestData(cls):
#         user = User.objects.create_user(
#             username='horst', email='horst@horst.de', password='password')
#         permissions = Permission.objects.filter(
#             content_type__app_label='brokerage',
#             codename__endswith='primarydatafile')
#         user.user_permissions.add(*permissions)
#         token = Token.objects.create(user=user)
#         client = APIClient()
#         client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
#         cls.api_client = client
#         user = User.objects.create_user(
#             username='kevin', email='kevin@kevin.de', password='secret',
#             is_staff=True)
#         token = Token.objects.create(user=user)
#         client = APIClient()
#         client.credentials(HTTP_AUTHORIZATION='Token ' + token.key)
#         cls.other_api_client = client
#         resource_cred = ResourceCredential.objects.create(
#             title='Resource Title',
#             url='https://www.example.com',
#             authentication_string='letMeIn'
#         )
#         cls.site_config = SiteConfiguration.objects.create(
#             title='default',
#             release_submissions=False,
#             use_gfbio_services=False,
#             ena_server=resource_cred,
#             pangaea_server=resource_cred,
#             gfbio_server=resource_cred,
#             helpdesk_server=resource_cred,
#             comment='Default configuration',
#         )
#         submission = SubmissionTest._create_submission_via_serializer()
#         submission.additionalreference_set.create(
#             type=AdditionalReference.GFBIO_HELPDESK_TICKET,
#             reference_key='FAKE_KEY',
#             primary=True
#         )
#         submission = SubmissionTest._create_submission_via_serializer()
#
#     @classmethod
#     def _create_test_data(cls, path, delete=True):
#         if delete:
#             cls._delete_test_data()
#         f = open(path, 'w')
#         f.write('test123\n')
#         f.close()
#         f = open(path, 'rb')
#         return {
#             'data_file': f,
#         }
#
#     @staticmethod
#     def _delete_test_data():
#         PrimaryDataFile.objects.all().delete()
#
#     def test_empty_relation(self):
#         submission = Submission.objects.first()
#         pd = submission.primarydatafile_set.first()
#         self.assertIsNone(pd)
#
#     @responses.activate
#     def test_valid_file_upload(self):
#         submission = Submission.objects.all().first()
#         site_config = SiteConfiguration.objects.first()
#         url = reverse('brokerage:submissions_primary_data', kwargs={
#             'broker_submission_id': submission.broker_submission_id})
#         responses.add(responses.POST, url, json={}, status=200)
#         responses.add(responses.POST,
#                       '{0}{1}/{2}/{3}'.format(
#                           site_config.helpdesk_server.url,
#                           HELPDESK_API_SUB_URL,
#                           'FAKE_KEY',
#                           HELPDESK_ATTACHMENT_SUB_URL,
#                       ),
#                       json=_get_jira_attach_response(),
#                       status=200)
#         data = self._create_test_data('/tmp/test_primary_data_file')
#         reports_len = len(TaskProgressReport.objects.all())
#         response = self.api_client.post(url, data, format='multipart')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         self.assertIn(b'broker_submission_id', response.content)
#         self.assertIn(b'"id"', response.content)
#         self.assertIn(b'site', response.content)
#         self.assertEqual(User.objects.first().username, response.data['site'])
#         self.assertIn(b'data_file', response.content)
#         self.assertTrue(
#             urlparse(response.data['data_file']).path.startswith(MEDIA_URL))
#         self.assertGreater(len(TaskProgressReport.objects.all()), reports_len)
#
#     def test_no_permission_file_upload(self):
#         submission = Submission.objects.all().first()
#         url = reverse(
#             'brokerage:submissions_primary_data',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id
#             })
#         data = self._create_test_data('/tmp/test_primary_data_file')
#         response = self.other_api_client.post(url, data, format='multipart')
#
#         self.assertEqual(403, response.status_code)
#
#     @responses.activate
#     def test_not_owner_file_upload(self):
#         submission = Submission.objects.first()
#         submission.site = User.objects.last()
#         submission.save()
#         site_config = SiteConfiguration.objects.first()
#         url = reverse('brokerage:submissions_primary_data', kwargs={
#             'broker_submission_id': submission.broker_submission_id})
#         responses.add(responses.POST, url, json={}, status=200)
#         responses.add(responses.POST,
#                       '{0}{1}/{2}/{3}'.format(
#                           site_config.helpdesk_server.url,
#                           HELPDESK_API_SUB_URL,
#                           'FAKE_KEY',
#                           HELPDESK_ATTACHMENT_SUB_URL,
#                       ),
#                       json=_get_jira_attach_response(),
#                       status=200)
#         data = self._create_test_data('/tmp/test_primary_data_file')
#         response = self.api_client.post(url, data, format='multipart')
#         # FIXME: until changed, everyone with permissions can add file, even if not owner of respective submission
#         self.assertEqual(201, response.status_code)
#
#     def test_get_list(self):
#         submission = Submission.objects.first()
#         url = reverse(
#             'brokerage:submissions_primary_data',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id
#             })
#         response = self.api_client.get(url)
#         self.assertEqual(405, response.status_code)
#
#     def test_get_detail(self):
#         submission = Submission.objects.all().first()
#         url = reverse(
#             'brokerage:submissions_primary_data_detail',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id,
#                 'pk': 1
#             })
#
#         response = self.api_client.get(url)
#         self.assertEqual(405, response.status_code)
#
#     @responses.activate
#     def test_wrong_submission_put(self):
#         submission = Submission.objects.first()
#         site_config = SiteConfiguration.objects.first()
#         url = reverse(
#             'brokerage:submissions_primary_data',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id
#             })
#         responses.add(responses.POST, url, json={}, status=200)
#         responses.add(responses.POST,
#                       '{0}{1}/{2}/{3}'.format(
#                           site_config.helpdesk_server.url,
#                           HELPDESK_API_SUB_URL,
#                           'FAKE_KEY',
#                           HELPDESK_ATTACHMENT_SUB_URL,
#                       ),
#                       json=_get_jira_attach_response(),
#                       status=200)
#         data = self._create_test_data('/tmp/test_primary_data_file_1111')
#         response = self.api_client.post(url, data, format='multipart')
#         self.assertEqual(201, response.status_code)
#         self.assertEqual(1, len(PrimaryDataFile.objects.all()))
#         fname = PrimaryDataFile.objects.all().first().data_file.name
#         self.assertIn('test_primary_data_file_1111', fname)
#         content = json.loads(response.content.decode('utf-8'))
#         submission = Submission.objects.last()
#         submission.additionalreference_set.create(
#             type=AdditionalReference.GFBIO_HELPDESK_TICKET,
#             reference_key='FAKE_KEY_2',
#             primary=True
#         )
#         url = reverse(
#             'brokerage:submissions_primary_data_detail',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id,
#                 'pk': content.get('id')
#             })
#         data = self._create_test_data('/tmp/test_primary_data_file_2222', False)
#         response = self.api_client.put(url, data, format='multipart')
#         self.assertEqual(400, response.status_code)
#
#     @responses.activate
#     def test_valid_file_put(self):
#         submission = Submission.objects.first()
#         site_config = SiteConfiguration.objects.first()
#         url = reverse(
#             'brokerage:submissions_primary_data',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id
#             })
#         responses.add(responses.POST, url, json={}, status=200)
#         responses.add(responses.POST,
#                       '{0}{1}/{2}/{3}'.format(
#                           site_config.helpdesk_server.url,
#                           HELPDESK_API_SUB_URL,
#                           'FAKE_KEY',
#                           HELPDESK_ATTACHMENT_SUB_URL,
#                       ),
#                       json=_get_jira_attach_response(),
#                       status=200)
#         data = self._create_test_data('/tmp/test_primary_data_file_1111')
#         response = self.api_client.post(url, data, format='multipart')
#         self.assertEqual(201, response.status_code)
#         self.assertEqual(1, len(PrimaryDataFile.objects.all()))
#         fname = PrimaryDataFile.objects.all().first().data_file.name
#         self.assertIn('test_primary_data_file_1111', fname)
#         content = json.loads(response.content.decode('utf-8'))
#         url = reverse(
#             'brokerage:submissions_primary_data_detail',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id,
#                 'pk': content.get('id')
#             })
#         data = self._create_test_data('/tmp/test_primary_data_file_2222', False)
#         response = self.api_client.put(url, data, format='multipart')
#         self.assertEqual(200, response.status_code)
#         self.assertEqual(1, len(PrimaryDataFile.objects.all()))
#         fname = PrimaryDataFile.objects.all().first().data_file.name
#         self.assertIn('test_primary_data_file_2222', fname)
#
#     def test_no_submission_upload(self):
#         url = reverse(
#             'brokerage:submissions_primary_data',
#             kwargs={
#                 'broker_submission_id': uuid4()
#             })
#         data = self._create_test_data('/tmp/test_primary_data_file')
#         response = self.api_client.post(url, data, format='multipart')
#         self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
#         self.assertIn(b'No submission', response.content)
#
#     def test_empty_upload(self):
#         submission = Submission.objects.first()
#         url = reverse(
#             'brokerage:submissions_primary_data',
#             kwargs={
#                 'broker_submission_id': submission.broker_submission_id
#             })
#         response = self.api_client.post(url, {}, format='multipart')
#         self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
#         self.assertIn(b'No file was submitted.', response.content)


class TestSubmissionUploadView(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create_user(
            username='horst', email='horst@horst.de', password='password')
        permissions = Permission.objects.filter(
            content_type__app_label='brokerage',
            codename__endswith='submissionupload'
        )
        user.user_permissions.add(*permissions)
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
        resource_cred = ResourceCredential.objects.create(
            title='Resource Title',
            url='https://www.example.com',
            authentication_string='letMeIn'
        )

        cls.site_config = SiteConfiguration.objects.create(
            title='default',
            release_submissions=False,
            use_gfbio_services=False,
            ena_server=resource_cred,
            pangaea_server=resource_cred,
            gfbio_server=resource_cred,
            helpdesk_server=resource_cred,
            comment='Default configuration',
        )
        submission = SubmissionTest._create_submission_via_serializer()
        submission.additionalreference_set.create(
            type=AdditionalReference.GFBIO_HELPDESK_TICKET,
            reference_key='FAKE_KEY',
            primary=True
        )
        SubmissionTest._create_submission_via_serializer()

    @classmethod
    def _create_test_data(cls, path, delete=True):
        if delete:
            cls._delete_test_data()
        f = open(path, 'w')
        f.write('test123\n')
        f.close()
        f = open(path, 'rb')
        return {
            'file': f,
        }

    @staticmethod
    def _delete_test_data():
        PrimaryDataFile.objects.all().delete()

    def test_empty_relation(self):
        submission = Submission.objects.first()
        pd = submission.submissionupload_set.first()
        self.assertIsNone(pd)

    @responses.activate
    def test_valid_upload_no_task(self):
        submission = Submission.objects.all().first()
        site_config = SiteConfiguration.objects.first()
        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_test_data('/tmp/test_primary_data_file')

        reports_len = len(TaskProgressReport.objects.all())
        uploads_len = len(SubmissionUpload.objects.all())
        response = self.api_client.post(url, data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'site', response.content)
        self.assertEqual(User.objects.first().username, response.data['site'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))
        # TODO: no task is triggered yet
        self.assertEqual(len(TaskProgressReport.objects.all()), reports_len)
        self.assertGreater(len(SubmissionUpload.objects.all()), uploads_len)

    def test_upload_of_multiple_files(self):
        submission = Submission.objects.all().first()
        site_config = SiteConfiguration.objects.first()
        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)

    @responses.activate
    def test_valid_upload_with_task(self):
        submission = Submission.objects.all().first()
        site_config = SiteConfiguration.objects.first()
        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)
        responses.add(responses.POST,
                      '{0}{1}/{2}/{3}'.format(
                          site_config.helpdesk_server.url,
                          HELPDESK_API_SUB_URL,
                          'FAKE_KEY',
                          HELPDESK_ATTACHMENT_SUB_URL,
                      ),
                      json=_get_jira_attach_response(),
                      status=200)
        data = self._create_test_data('/tmp/test_primary_data_file')
        data['attach_to_ticket'] = True

        reports_len = len(TaskProgressReport.objects.all())
        uploads_len = len(SubmissionUpload.objects.all())
        response = self.api_client.post(url, data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertIn(b'broker_submission_id', response.content)
        self.assertIn(b'"id"', response.content)
        self.assertIn(b'site', response.content)
        self.assertEqual(User.objects.first().username, response.data['site'])
        self.assertIn(b'file', response.content)
        self.assertTrue(
            urlparse(response.data['file']).path.startswith(MEDIA_URL))
        self.assertGreater(len(TaskProgressReport.objects.all()), reports_len)
        self.assertGreater(len(SubmissionUpload.objects.all()), uploads_len)

    def test_no_permission_file_upload(self):
        submission = Submission.objects.all().first()
        url = reverse(
            'brokerage:submissions_upload',
            kwargs={
                'broker_submission_id': submission.broker_submission_id
            })
        data = self._create_test_data('/tmp/test_primary_data_file')
        response = self.other_api_client.post(url, data, format='multipart')

        self.assertEqual(403, response.status_code)

    @responses.activate
    def test_not_owner_file_upload(self):
        submission = Submission.objects.first()
        submission.site = User.objects.last()
        submission.save()
        site_config = SiteConfiguration.objects.first()
        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)
        responses.add(responses.POST,
                      '{0}{1}/{2}/{3}'.format(
                          site_config.helpdesk_server.url,
                          HELPDESK_API_SUB_URL,
                          'FAKE_KEY',
                          HELPDESK_ATTACHMENT_SUB_URL,
                      ),
                      json=_get_jira_attach_response(),
                      status=200)
        data = self._create_test_data('/tmp/test_primary_data_file')
        response = self.api_client.post(url, data, format='multipart')
        # FIXME: until changed, everyone with permissions can add file, even if not owner of respective submission
        self.assertEqual(201, response.status_code)

    @responses.activate
    def test_get_list_per_submission(self):
        submission = Submission.objects.first()
        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_test_data('/tmp/test_primary_data_file')
        self.api_client.post(url, data, format='multipart')
        data_2 = self._create_test_data('/tmp/test_primary_data_file_2')
        self.api_client.post(url, data_2, format='multipart')

        url = reverse('brokerage:submissions_uploads', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        print('\nurl: ', url)

        response = self.api_client.get(url)
        # self.assertEqual(200, response.status_code)
        content = json.loads(response.content.decode('utf-8'))
        print('status ', response.status_code)
        pprint(content)
        self.assertTrue(isinstance(content, list))
        self.assertEqual(2, len(content))

    @responses.activate
    def test_get_list_per_submission_content(self):
        submission = Submission.objects.first()
        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_test_data('/tmp/test_primary_data_file')
        self.api_client.post(url, data, format='multipart')
        data_2 = self._create_test_data('/tmp/test_primary_data_file_2')
        self.api_client.post(url, data_2, format='multipart')

        url = reverse('brokerage:submissions_uploads', kwargs={
            'broker_submission_id': submission.broker_submission_id})

        response = self.api_client.get(url)
        content = json.loads(response.content.decode('utf-8'))
        pprint(content)
        self.assertTrue('file' in content[0].keys())
        self.assertTrue('file_name' in content[0].keys())
        self.assertTrue('file_size' in content[0].keys())
        self.assertTrue('meta_data' in content[0].keys())

    def test_get_list_no_submission(self):
        url = reverse('brokerage:submissions_uploads', kwargs={
            'broker_submission_id': uuid4()})
        response = self.api_client.get(url)
        self.assertEqual(200, response.status_code)
        content = json.loads(response.content.decode('utf-8'))
        self.assertTrue(isinstance(content, list))
        self.assertEqual(0, len(content))

    def test_get_detail(self):
        submission = Submission.objects.all().first()
        url = reverse(
            'brokerage:submissions_upload_detail',
            kwargs={
                'broker_submission_id': submission.broker_submission_id,
                'pk': 1
            })

        response = self.api_client.get(url)
        self.assertEqual(405, response.status_code)

    @responses.activate
    def test_delete(self):
        submission = Submission.objects.first()
        url = reverse('brokerage:submissions_upload', kwargs={
            'broker_submission_id': submission.broker_submission_id})
        responses.add(responses.POST, url, json={}, status=200)
        data = self._create_test_data('/tmp/test_primary_data_file')
        self.api_client.post(url, data, format='multipart')
        self.assertEqual(1, len(submission.submissionupload_set.filter()))

        url = reverse(
            'brokerage:submissions_upload_detail',
            kwargs={
                'broker_submission_id': submission.broker_submission_id,
                'pk': submission.submissionupload_set.filter().first().pk
            })
        print(url)
        response = self.api_client.delete(url)
        self.assertEqual(204, response.status_code)
        self.assertEqual(b'', response.content)
        self.assertEqual(0, len(SubmissionUpload.objects.filter(pk=1)))

    @responses.activate
    def test_wrong_submission_put(self):
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
                          HELPDESK_API_SUB_URL,
                          'FAKE_KEY',
                          HELPDESK_ATTACHMENT_SUB_URL,
                      ),
                      json=_get_jira_attach_response(),
                      status=200)
        data = self._create_test_data('/tmp/test_primary_data_file_11112222')
        response = self.api_client.post(url, data, format='multipart')
        self.assertEqual(201, response.status_code)
        self.assertEqual(1, len(SubmissionUpload.objects.all()))
        fname = SubmissionUpload.objects.all().first().file.name
        self.assertIn('test_primary_data_file_11112222', fname)
        content = json.loads(response.content.decode('utf-8'))
        submission = Submission.objects.last()
        submission.additionalreference_set.create(
            type=AdditionalReference.GFBIO_HELPDESK_TICKET,
            reference_key='FAKE_KEY_2',
            primary=True
        )
        url = reverse(
            'brokerage:submissions_upload_detail',
            kwargs={
                'broker_submission_id': submission.broker_submission_id,
                'pk': content.get('id')
            })
        data = self._create_test_data('/tmp/test_primary_data_file_2222', False)
        response = self.api_client.put(url, data, format='multipart')
        self.assertEqual(400, response.status_code)

    @responses.activate
    def test_valid_file_put_no_task(self):
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
                          HELPDESK_API_SUB_URL,
                          'FAKE_KEY',
                          HELPDESK_ATTACHMENT_SUB_URL,
                      ),
                      json=_get_jira_attach_response(),
                      status=200)
        data = self._create_test_data('/tmp/test_primary_data_file_1111')
        reports_len = len(TaskProgressReport.objects.all())
        response = self.api_client.post(url, data, format='multipart')
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
        data = self._create_test_data('/tmp/test_primary_data_file_2222', False)
        response = self.api_client.put(url, data, format='multipart')
        self.assertEqual(200, response.status_code)
        self.assertEqual(1, len(SubmissionUpload.objects.all()))
        fname = SubmissionUpload.objects.all().first().file.name
        self.assertIn('test_primary_data_file_2222', fname)
        self.assertEqual(len(TaskProgressReport.objects.all()), reports_len)

    @responses.activate
    def test_valid_file_put_with_task(self):
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
                          HELPDESK_API_SUB_URL,
                          'FAKE_KEY',
                          HELPDESK_ATTACHMENT_SUB_URL,
                      ),
                      json=_get_jira_attach_response(),
                      status=200)
        data = self._create_test_data('/tmp/test_primary_data_file_1111')
        reports_len = len(TaskProgressReport.objects.all())
        response = self.api_client.post(url, data, format='multipart')
        self.assertEqual(201, response.status_code)
        self.assertEqual(1, len(SubmissionUpload.objects.all()))
        fname = SubmissionUpload.objects.all().first().file.name
        self.assertIn('test_primary_data_file_1111', fname)
        content = json.loads(response.content.decode('utf-8'))
        self.assertEqual(len(TaskProgressReport.objects.all()), reports_len)

        url = reverse(
            'brokerage:submissions_upload_detail',
            kwargs={
                'broker_submission_id': submission.broker_submission_id,
                'pk': content.get('id')
            })
        data = self._create_test_data('/tmp/test_primary_data_file_2222', False)
        data['attach_to_ticket'] = True
        response = self.api_client.put(url, data, format='multipart')
        self.assertEqual(200, response.status_code)
        self.assertEqual(1, len(SubmissionUpload.objects.all()))
        fname = SubmissionUpload.objects.all().first().file.name
        self.assertIn('test_primary_data_file_2222', fname)
        self.assertGreater(len(TaskProgressReport.objects.all()), reports_len)

    def test_no_submission_upload(self):
        url = reverse(
            'brokerage:submissions_upload',
            kwargs={
                'broker_submission_id': uuid4()
            })
        data = self._create_test_data('/tmp/test_primary_data_file')
        response = self.api_client.post(url, data, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertIn(b'No submission', response.content)

    def test_empty_upload(self):
        submission = Submission.objects.first()
        url = reverse(
            'brokerage:submissions_upload',
            kwargs={
                'broker_submission_id': submission.broker_submission_id
            })
        response = self.api_client.post(url, {}, format='multipart')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn(b'No file was submitted.', response.content)
