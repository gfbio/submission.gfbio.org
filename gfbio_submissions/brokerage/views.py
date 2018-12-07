# -*- coding: utf-8 -*-

from uuid import uuid4, UUID

from django.db import transaction
from rest_framework import generics, mixins, permissions, parsers
from rest_framework import status
from rest_framework.authentication import TokenAuthentication, \
    BasicAuthentication
from rest_framework.response import Response

from .configuration.settings import SUBMISSION_DELAY
from .models import SubmissionFileUpload, \
    Submission, PrimaryDataFile, RequestLog
from .permissions import IsOwnerOrReadOnly
from .serializers import \
    SubmissionDetailSerializer, SubmissionFileUploadSerializer, \
    PrimaryDataFileSerializer


# http://www.django-rest-framework.org/tutorial/3-class-based-views/
# class SubmissionsViewSet(viewsets.ModelViewSet):
class SubmissionsView(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      generics.GenericAPIView):
    queryset = Submission.objects.all()
    # serializer_class = SubmissionSerializer
    serializer_class = SubmissionDetailSerializer
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated,
                          permissions.DjangoModelPermissions,
                          IsOwnerOrReadOnly)

    def perform_create(self, serializer):
        # submission = Submission()
        # if 'submitting_user' in serializer.validated_data.keys():
        #     submission.submitting_user = serializer.validated_data.get(
        #         'submitting_user', '')
        # submission.site = User.objects.get(username=self.request.user)
        # submission.submission_target = serializer.validated_data.get('target',
        #                                                              '')
        # submission.download_url = serializer.validated_data.get(
        #     'data', {}).get('requirements', {}).get('download_url', '')
        # submission.submission_data = serializer.save(
        #     site=self.request.user,
        #     broker_submission_id=submission.broker_submission_id
        # )
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
            trigger_submission_transfer
        print("ADD VIEW before trigger ")
        trigger_submission_transfer.apply_async(
            kwargs={
                'submission_id': submission.pk,
            },
            countdown=SUBMISSION_DELAY
        )

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
        instance = self.get_object()
        if instance.status == Submission.OPEN:
            response = self.update(request, *args, **kwargs)

            # FIXME: updates to submission download url are not covered here

            # affected_submissions = instance.submission_set.filter(broker_submission_id=instance.broker_submission_id)
            # print request.content
            # # for sub in affected_submissions:
            # #     sub.download_url =
            # print instance.broker_submission_id

            from gfbio_submissions.brokerage.tasks import \
                trigger_submission_transfer_for_updates
            trigger_submission_transfer_for_updates.apply_async(
                kwargs={
                    'broker_submission_id': '{0}'.format(
                        instance.broker_submission_id),
                },
                countdown=SUBMISSION_DELAY
            )
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
        # instance.submission_set.all().update(status=Submission.CANCELLED)
        return Response(status=status.HTTP_204_NO_CONTENT)


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
            sub = Submission.objects.get(
                broker_submission_id=broker_submission_id
            )
        except Submission.DoesNotExist as e:
            return Response({'submission': 'No submission for this '
                                           'broker_submission_id '
                                           '{0}'.format(broker_submission_id)},
                            status=status.HTTP_404_NOT_FOUND)
        response = self.update(request, *args, **kwargs)
        return response
