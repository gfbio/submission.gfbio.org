# -*- coding: utf-8 -*-

from django.test import TestCase

from gfbio_submissions.brokerage.models import Submission, AdditionalReference
from gfbio_submissions.users.models import User


class AdditionalReferenceTest(TestCase):

    @classmethod
    def setUpTestData(cls):
        user = User.objects.create(
            username='user1'
        )
        submission_1 = Submission.objects.create(user=user)
        submission_2 = Submission.objects.create(user=user)
        AdditionalReference.objects.create(
            submission=submission_1,
            type=AdditionalReference.PANGAEA_JIRA_TICKET,
            reference_key='PDI-0815',
            primary=True
        )
        AdditionalReference.objects.create(
            submission=submission_1,
            type=AdditionalReference.PANGAEA_JIRA_TICKET,
            reference_key='PDI-0817',
        )
        AdditionalReference.objects.create(
            submission=submission_1,
            type=AdditionalReference.GFBIO_HELPDESK_TICKET,
            reference_key='SND-0815',
        )
        AdditionalReference.objects.create(
            submission=submission_2,
            type=AdditionalReference.PANGAEA_JIRA_TICKET,
            reference_key='PDI-0816',
        )

    def test_instance(self):
        reference = AdditionalReference(
            type=AdditionalReference.PANGAEA_JIRA_TICKET,
            submission=Submission.objects.first()
        )
        reference.save()
        self.assertFalse(reference.primary)
        self.assertTrue(isinstance(reference, AdditionalReference))

    def test_save_primary(self):
        submission = Submission.objects.first()
        submission_references = submission.additionalreference_set.all()
        self.assertEqual(3, len(submission_references))
        for ref in submission_references:
            if ref.pk == 1:
                self.assertTrue(ref.primary)
            else:
                self.assertFalse(ref.primary)

        pangeae_references = submission.additionalreference_set.filter(
            type=AdditionalReference.PANGAEA_JIRA_TICKET)
        self.assertEqual(2, len(pangeae_references))
        ref = pangeae_references.first()
        ref.primary = True
        ref.save()
        reference_changed = ref.reference_key

        pangeae_references = submission.additionalreference_set.filter(
            type=AdditionalReference.PANGAEA_JIRA_TICKET)
        primary_references = pangeae_references.filter(primary=True)
        self.assertEqual(1, len(primary_references))
        self.assertEqual(reference_changed,
                         primary_references.first().reference_key)
        non_primary = pangeae_references.filter(primary=False)
        self.assertEqual(1, len(non_primary))
        self.assertNotEqual(reference_changed,
                            non_primary.first().reference_key)

        ref = non_primary.first()
        reference_changed = ref.reference_key
        ref.primary = True
        ref.save()

        pangeae_references = submission.additionalreference_set.filter(
            type=AdditionalReference.PANGAEA_JIRA_TICKET)
        primary_references = pangeae_references.filter(primary=True)
        self.assertEqual(1, len(primary_references))
        self.assertEqual(reference_changed,
                         primary_references.first().reference_key)
        non_primary = pangeae_references.filter(primary=False)
        self.assertEqual(1, len(non_primary))
        self.assertNotEqual(reference_changed,
                            non_primary.first().reference_key)