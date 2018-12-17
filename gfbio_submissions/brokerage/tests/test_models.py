# -*- coding: utf-8 -*-

from django.test import TestCase

from gfbio_submissions.brokerage.models import ResourceCredential, \
    SiteConfiguration, TicketLabel, BrokerObject, CenterName, Submission
from gfbio_submissions.brokerage.serializers import SubmissionSerializer
from gfbio_submissions.brokerage.tests.utils import _get_ena_data_without_runs
from gfbio_submissions.users.models import User


class ResourceCredentialTest(TestCase):

    def setUp(self):
        ResourceCredential.objects.get_or_create(
            title='Resource Title',
            url='https://www.example.com',
            authentication_string='letMeIn'
        )

    def test_db(self):
        resource_credentials = ResourceCredential.objects.all()
        self.assertEqual(1, len(resource_credentials))

    def test_str(self):
        resource_credentials = ResourceCredential.objects.all()
        self.assertEqual(
            'Resource Title',
            resource_credentials.first().__str__()
        )


class SiteConfigurationTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(
            username="user1"
        )
        resource_cred = ResourceCredential.objects.create(
            title='Resource Title',
            url='https://www.example.com',
            authentication_string='letMeIn'
        )
        site_conf = SiteConfiguration.objects.create(
            title='Title',
            site=user,
            ena_server=resource_cred,
            pangaea_server=resource_cred,
            gfbio_server=resource_cred,
            helpdesk_server=resource_cred,
            comment='Comment',
        )
        SiteConfiguration.objects.create(
            title='Default',
            site=None,
            ena_server=resource_cred,
            pangaea_server=resource_cred,
            gfbio_server=resource_cred,
            helpdesk_server=resource_cred,
            comment='Default configuration',
        )
        TicketLabel.objects.create(
            site_configuration=site_conf,
            label_type='P',
            label='label_1'
        )
        TicketLabel.objects.create(
            site_configuration=site_conf,
            label_type='G',
            label='label_2'
        )
        TicketLabel.objects.create(
            site_configuration=site_conf,
            label_type='P',
            label='label_3'
        )

    def test_db(self):
        site_configurations = SiteConfiguration.objects.all()
        self.assertEqual(2, len(site_configurations))

    def test_instance(self):
        site_config = SiteConfiguration.objects.all().first()
        self.assertIsInstance(site_config, SiteConfiguration)
        self.assertIsInstance(site_config.site, User)
        self.assertIsInstance(site_config.ena_server, ResourceCredential)
        self.assertIsInstance(site_config.pangaea_server, ResourceCredential)
        self.assertIsInstance(site_config.gfbio_server, ResourceCredential)
        self.assertIsInstance(site_config.helpdesk_server, ResourceCredential)
        self.assertFalse(site_config.release_submissions)

    def test_str(self):
        site_config = SiteConfiguration.objects.all().first()
        self.assertEqual('Title', site_config.__str__())

    def test_get_site_configuration_for_task(self):
        site_config = SiteConfiguration.objects.get_site_configuration_for_task(
            site=User.objects.all().first()
        )
        self.assertEqual('Title', site_config.title)
        self.assertFalse(site_config.release_submissions)

    def test_get_site_configuration_without_site(self):
        site_config = SiteConfiguration.objects.get_site_configuration_for_task(
            site=None
        )
        self.assertEqual('Default', site_config.title)
        self.assertFalse(site_config.release_submissions)
        self.assertIsNone(site_config.site)

    def test_get_site_configuration_without_site_or_default(self):
        site_config = SiteConfiguration.objects.filter(title='Default').first()
        site_config.delete()
        with self.assertRaises(SiteConfiguration.DoesNotExist) as exc:
            site_config = SiteConfiguration.objects.get_site_configuration_for_task(
                site=None
            )

    def test_get_ticket_labels(self):
        site_config = SiteConfiguration.objects.all().first()
        labels = site_config.get_ticket_labels(
            label_type=TicketLabel.PANGAEA_JIRA)
        self.assertEqual(2, len(labels))
        self.assertTrue(isinstance(labels, list))
        for l in labels:
            self.assertTrue(isinstance(l, str))


class TicketLabelTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(
            username="user1"
        )
        resource_cred = ResourceCredential.objects.create(
            title='Resource Title',
            url='https://www.example.com',
            authentication_string='letMeIn'
        )
        SiteConfiguration.objects.create(
            title='Title',
            site=user,
            ena_server=resource_cred,
            pangaea_server=resource_cred,
            gfbio_server=resource_cred,
            helpdesk_server=resource_cred,
            comment='Comment',
        )
        SiteConfiguration.objects.create(
            title='Default',
            site=None,
            ena_server=resource_cred,
            pangaea_server=resource_cred,
            gfbio_server=resource_cred,
            helpdesk_server=resource_cred,
            comment='Default configuration',
        )

    def test_instance(self):
        labels = TicketLabel.objects.all()
        self.assertEqual(0, len(labels))
        TicketLabel.objects.create(
            site_configuration=SiteConfiguration.objects.first(),
            label_type='P',
            label='label this!'
        )
        labels = TicketLabel.objects.all()
        self.assertEqual(1, len(labels))

    def test_site_configuration_labels(self):
        site_config = SiteConfiguration.objects.first()
        TicketLabel.objects.create(
            site_configuration=SiteConfiguration.objects.first(),
            label_type='P',
            label='label this!'
        )
        self.assertEqual(1, len(site_config.ticketlabel_set.all()))
        other_site_config = SiteConfiguration.objects.last()
        self.assertEqual(0, len(other_site_config.ticketlabel_set.all()))


class BrokerObjectTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(
            username="user1"
        )
        BrokerObject.objects.create(
            type='study',
            site=user,
            site_project_id='prj001xxx',
            site_object_id='obj001',
            data={
                'center_name': 'GFBIO',
                'study_type': 'Metagenomics',
                'study_abstract': 'abstract',
                'study_title': 'title',
                'study_alias': 'alias',
                'site_object_id': 'from_data_01'
            }
        )

    def test_instance(self):
        se = BrokerObject()
        self.assertTrue(isinstance(se, BrokerObject))

    def test_str(self):
        broker_object = BrokerObject.objects.first()
        self.assertEqual('obj001_study', broker_object.__str__())


class CenterNameTest(TestCase):

    def test_instance(self):
        cn = CenterName()
        cn.center_name = 'A Center'
        cn.save()
        self.assertEqual('A Center', cn.center_name)
        self.assertEqual(1, len(CenterName.objects.all()))

    def test_default_name(self):
        cn = CenterName()
        self.assertEqual('GFBIO', cn.center_name)

    def test_str(self):
        cn, created = CenterName.objects.get_or_create(center_name='ABC')
        self.assertEqual('ABC', cn.__str__())


class SubmissionTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(
            username="user1"
        )
        submission = Submission.objects.create(site=user)
        # resource_cred = ResourceCredential.objects.create(
        #     title='Resource Title',
        #     url='https://www.example.com',
        #     authentication_string='letMeIn'
        # )
        # SiteConfiguration.objects.create(
        #     title='Title',
        #     site=user,
        #     ena_server=resource_cred,
        #     pangaea_server=resource_cred,
        #     gfbio_server=resource_cred,
        #     helpdesk_server=resource_cred,
        #     comment='Comment',
        # )
        # SiteConfiguration.objects.create(
        #     title='Default',
        #     site=None,
        #     ena_server=resource_cred,
        #     pangaea_server=resource_cred,
        #     gfbio_server=resource_cred,
        #     helpdesk_server=resource_cred,
        #     comment='Default configuration',
        # )

    @classmethod
    def _create_submission_via_serializer(cls):
        serializer = SubmissionSerializer(data={
            'target': 'ENA',
            'release': True,
            'data': _get_ena_data_without_runs()
        })
        serializer.is_valid()
        submission = serializer.save(site=User.objects.first())
        BrokerObject.objects.add_submission_data(submission)
        return submission

    def test_create_empty_submission(self):
        submission = Submission()
        submission.site = User.objects.first()
        submission.save()
        submissions = Submission.objects.all()
        self.assertEqual(2, len(submissions))

    def test_center_name_is_none(self):
        submission = Submission.objects.first()
        self.assertIsNone(submission.center_name)

    def test_center_name(self):
        center_name, created = CenterName.objects.get_or_create(
            center_name='ABCD')
        sub = Submission.objects.first()
        sub.center_name = center_name
        sub.save()
        self.assertEqual(center_name, sub.center_name)
        self.assertEqual('ABCD', sub.center_name.center_name)

    def test_ids_on_empty_submission(self):
        submissions = Submission.objects.all()
        submission_count = len(submissions)
        submission = Submission()
        pre_save_bsi = submission.broker_submission_id
        submission.save()
        self.assertEqual(pre_save_bsi, submission.broker_submission_id)
        self.assertEqual(submission.pk, submission.id)
        submissions = Submission.objects.all()
        post_save_count = len(submissions)
        self.assertEqual(post_save_count, submission_count + 1)

    def test_get_study_json(self):
        json_data = _get_ena_data_without_runs()
        submission = self._create_submission_via_serializer()
        ena_study = {
            'study_title': json_data.get('requirements')[
                'title'],
            'study_abstract': json_data.get('requirements')[
                'description'],
            'study_type': json_data.get('requirements')[
                'study_type']
        }
        self.assertDictEqual(ena_study, submission.get_study_json())
