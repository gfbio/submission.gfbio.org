# -*- coding: utf-8 -*-

from uuid import uuid4, UUID

from django.db import transaction
from rest_framework import generics, mixins, permissions, parsers
from rest_framework import status
from rest_framework.authentication import TokenAuthentication, \
    BasicAuthentication
from rest_framework.response import Response

from gfbio_submissions.brokerage.serializers import \
    SubmissionUploadListSerializer
from .configuration.settings import SUBMISSION_DELAY
from .models import SubmissionFileUpload, \
    Submission, PrimaryDataFile, RequestLog, SubmissionUpload
from .permissions import IsOwnerOrReadOnly
from .serializers import \
    SubmissionDetailSerializer, SubmissionFileUploadSerializer, \
    PrimaryDataFileSerializer, SubmissionUploadSerializer


class SubmissionsView(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      generics.GenericAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionDetailSerializer
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def perform_create(self, serializer):
        # TODO:
        #  - only if reqular submit -> release=True
        #  - if target ENA ect proceed as usual ...
        #  - if target ENA but data.requirements.data_center available and not contain ENA:
        #       - change target to GENERIC (... change back/correct ...)
        #  - if target GENERIC and data.requirements.data_center contains ENA:
        #       - change target to ENA
        #       - check for single pr.datafile, if multiple cancel ..
        #       - try to parse as csv, cancle on error
        #       - add json to submission (store validation errors ?)
        submission = serializer.save(site=self.request.user, )
        with transaction.atomic():
            RequestLog.objects.create(
                type=RequestLog.INCOMING,
                site_user=submission.submitting_user if submission.submitting_user is not None else '',
                submission_id=submission.broker_submission_id,
                response_content=submission.data,
                response_status=201,
                triggered_by=None,
            )

        from gfbio_submissions.brokerage.tasks import \
            check_for_molecular_content_in_submission_task, \
            trigger_submission_transfer
        chain = check_for_molecular_content_in_submission_task.s(
            submission_id=submission.pk
        ).set(countdown=SUBMISSION_DELAY) | trigger_submission_transfer.s(
            submission_id=submission.pk
        ).set(countdown=SUBMISSION_DELAY)
        chain()
        # trigger_submission_transfer.apply_async(
        #     kwargs={
        #         'submission_id': submission.pk,
        #     },
        #     countdown=SUBMISSION_DELAY
        # )

    def get_queryset(self):
        site = self.request.user
        return Submission.objects.filter(site=site)

    # http://www.django-rest-framework.org/api-guide/filtering/
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class SubmissionDetailView(mixins.RetrieveModelMixin,
                           mixins.UpdateModelMixin,
                           mixins.DestroyModelMixin,
                           generics.GenericAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionDetailSerializer
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    lookup_field = 'broker_submission_id'

    def perform_create(self, serializer):
        serializer.save(site=self.request.user)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        instance = self.get_object()  #
        # TODO: 06.06.2019 allow edit of submissions with status SUBMITTED ...
        if instance.status == Submission.OPEN or instance.status == Submission.SUBMITTED:
            response = self.update(request, *args, **kwargs)

            # FIXME: updates to submission download url are not covered here
            # affected_submissions = instance.submission_set.filter(broker_submission_id=instance.broker_submission_id)

            from gfbio_submissions.brokerage.tasks import \
                check_for_molecular_content_in_submission_task, \
                trigger_submission_transfer_for_updates
            chain = check_for_molecular_content_in_submission_task.s(
                submission_id=instance.pk
            ).set(countdown=SUBMISSION_DELAY) | \
                trigger_submission_transfer_for_updates.s(
                    broker_submission_id='{0}'.format(
                        instance.broker_submission_id
                    )
                ).set(countdown=SUBMISSION_DELAY)
            chain()
            # trigger_submission_transfer_for_updates.apply_async(
            #     kwargs={
            #         'broker_submission_id': '{0}'.format(
            #             instance.broker_submission_id),
            #     },
            #     countdown=SUBMISSION_DELAY
            # )
            return response
        else:
            return Response(
                data={
                    'broker_submission_id': instance.broker_submission_id,
                    'status': instance.status,
                    'embargo': instance.embargo,
                    'error': 'no modifications allowed with current status'
                }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, *args, **kwargs):
        instance = self.get_object()
        instance.status = Submission.CANCELLED
        instance.save()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserSubmissionDetailView(generics.ListAPIView):
    serializer_class = SubmissionDetailSerializer
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def get_queryset(self):
        submitting_user = self.kwargs['submitting_user']
        return Submission.objects.filter(submitting_user=submitting_user)


# TODO: remove
class SubmissionFileUploadView(mixins.CreateModelMixin,
                               generics.GenericAPIView):
    queryset = SubmissionFileUpload.objects.all()
    serializer_class = SubmissionFileUploadSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser,)
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def perform_create(self, serializer, submission):
        serializer.save(site=self.request.user, submission=submission)

    def create(self, request, *args, **kwargs):
        broker_submission_id = kwargs.get('broker_submission_id', uuid4())
        try:
            sub = Submission.objects.get(
                broker_submission_id=broker_submission_id
            )
        except Submission.DoesNotExist as e:
            return Response({'submission': 'No submission for this '
                                           'broker_submission_id: '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_404_NOT_FOUND)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer, sub)

        headers = self.get_success_headers(serializer.data)
        data_content = dict(serializer.data)
        data_content.pop('submission', 0)
        data_content['broker_submission_id'] = sub.broker_submission_id

        return Response(data_content, status=status.HTTP_201_CREATED,
                        headers=headers)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


# TODO: remove
class PrimaryDataFileView(mixins.CreateModelMixin,
                          mixins.ListModelMixin,
                          generics.GenericAPIView):
    queryset = PrimaryDataFile.objects.all()
    serializer_class = PrimaryDataFileSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser,)
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def perform_create(self, serializer, submission):
        return serializer.save(site=self.request.user, submission=submission)

    def create(self, request, *args, **kwargs):
        broker_submission_id = kwargs.get('broker_submission_id', uuid4())
        try:
            sub = Submission.objects.get(
                broker_submission_id=broker_submission_id
            )
        except Submission.DoesNotExist as e:
            return Response({'submission': 'No submission for this '
                                           'broker_submission_id:'
                                           ' {0}'.format(broker_submission_id)},
                            status=status.HTTP_404_NOT_FOUND)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        obj = self.perform_create(serializer, sub)

        headers = self.get_success_headers(serializer.data)
        data_content = dict(serializer.data)
        data_content.pop('submission', 0)
        data_content['id'] = obj.pk
        data_content['broker_submission_id'] = sub.broker_submission_id

        return Response(data_content, status=status.HTTP_201_CREATED,
                        headers=headers)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


# TODO: remove
class PrimaryDataFileDetailView(mixins.RetrieveModelMixin,
                                mixins.UpdateModelMixin,
                                mixins.DestroyModelMixin,
                                generics.GenericAPIView):
    queryset = PrimaryDataFile.objects.all()
    serializer_class = PrimaryDataFileSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser,)
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def put(self, request, *args, **kwargs):
        broker_submission_id = kwargs.get('broker_submission_id', uuid4())
        instance = self.get_object()
        if instance.submission.broker_submission_id != UUID(
                broker_submission_id):
            return Response({'submission': 'No link to this '
                                           'broker_submission_id '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            Submission.objects.get(
                broker_submission_id=broker_submission_id
            )
        except Submission.DoesNotExist as e:
            return Response({'submission': 'No submission for this '
                                           'broker_submission_id '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_404_NOT_FOUND)
        response = self.update(request, *args, **kwargs)
        return response


class SubmissionUploadView(mixins.CreateModelMixin,
                           generics.GenericAPIView):
    queryset = SubmissionUpload.objects.all()
    serializer_class = SubmissionUploadSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser,)
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def perform_create(self, serializer, submission):
        return serializer.save(site=self.request.user, submission=submission)

    def create(self, request, *args, **kwargs):
        broker_submission_id = kwargs.get('broker_submission_id', uuid4())
        try:
            sub = Submission.objects.get(
                broker_submission_id=broker_submission_id
            )
        except Submission.DoesNotExist as e:
            return Response({'submission': 'No submission for this '
                                           'broker_submission_id:'
                                           ' {0}'.format(broker_submission_id)},
                            status=status.HTTP_404_NOT_FOUND)

        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        obj = self.perform_create(serializer, sub)

        headers = self.get_success_headers(serializer.data)
        data_content = dict(serializer.data)
        data_content.pop('submission', 0)
        data_content['id'] = obj.pk
        data_content['broker_submission_id'] = sub.broker_submission_id

        return Response(data_content, status=status.HTTP_201_CREATED,
                        headers=headers)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    # # TODO: per user filter ?
    # def get_queryset(self):
    #     broker_submission_id = self.kwargs.get('broker_submission_id', uuid4())
    #     return SubmissionUpload.objects.filter(
    #         submission__broker_submission_id=broker_submission_id)
    #
    # def get(self, request, *args, **kwargs):
    #     return self.list(request, *args, **kwargs)


class SubmissionUploadListView(generics.ListAPIView):
    queryset = SubmissionUpload.objects.all()
    serializer_class = SubmissionUploadListSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser,)
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def get_queryset(self):
        broker_submission_id = self.kwargs.get('broker_submission_id', uuid4())
        return SubmissionUpload.objects.filter(
            submission__broker_submission_id=broker_submission_id)


class SubmissionUploadDetailView(mixins.RetrieveModelMixin,
                                 mixins.UpdateModelMixin,
                                 # generics.DestroyAPIView,
                                 mixins.DestroyModelMixin,
                                 generics.GenericAPIView):
    queryset = SubmissionUpload.objects.all()
    serializer_class = SubmissionUploadSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser,)
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def put(self, request, *args, **kwargs):
        broker_submission_id = kwargs.get('broker_submission_id', uuid4())
        instance = self.get_object()
        if instance.submission.broker_submission_id != UUID(
                broker_submission_id):
            return Response({'submission': 'No link to this '
                                           'broker_submission_id '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            Submission.objects.get(
                broker_submission_id=broker_submission_id
            )
        except Submission.DoesNotExist as e:
            return Response({'submission': 'No submission for this '
                                           'broker_submission_id '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_404_NOT_FOUND)
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        obj = self.get_object()
        from gfbio_submissions.brokerage.tasks import \
            delete_submission_issue_attachment_task
        delete_submission_issue_attachment_task.apply_async(
            kwargs={
                'submission_id': obj.submission.pk,
                'attachment_id': obj.attachment_id,
            },
            countdown=SUBMISSION_DELAY
        )
        return self.destroy(request, *args, **kwargs)


class SubmissionUploadPatchView(mixins.UpdateModelMixin,
                                generics.GenericAPIView):
    queryset = SubmissionUpload.objects.all()
    serializer_class = SubmissionUploadSerializer
    parser_classes = (parsers.MultiPartParser, parsers.FormParser,)
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def patch(self, request, *args, **kwargs):
        broker_submission_id = kwargs.get('broker_submission_id', uuid4())
        instance = self.get_object()
        if instance.submission.broker_submission_id != UUID(
                broker_submission_id):
            return Response({'submission': 'No link to this '
                                           'broker_submission_id '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            Submission.objects.get(
                broker_submission_id=broker_submission_id
            )
        except Submission.DoesNotExist as e:
            return Response({'submission': 'No submission for this '
                                           'broker_submission_id '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_404_NOT_FOUND)
        return self.partial_update(request, *args, **kwargs)
