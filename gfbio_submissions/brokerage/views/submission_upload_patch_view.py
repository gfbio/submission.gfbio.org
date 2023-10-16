# -*- coding: utf-8 -*-
from uuid import uuid4, UUID

from django.db import transaction
from rest_framework import mixins, generics, parsers, permissions, status
from rest_framework.authentication import TokenAuthentication, BasicAuthentication
from rest_framework.response import Response

from gfbio_submissions.generic.models.request_log import RequestLog
from ..models.submission import Submission
from ..models.submission_upload import SubmissionUpload
from ..permissions.is_owner_or_readonly import IsOwnerOrReadOnly
from ..serializers.submission_upload_serializer import SubmissionUploadSerializer


class SubmissionUploadPatchView(mixins.UpdateModelMixin, generics.GenericAPIView):
    queryset = SubmissionUpload.objects.all()
    serializer_class = SubmissionUploadSerializer
    parser_classes = (
        parsers.MultiPartParser,
        parsers.FormParser,
    )
    authentication_classes = (TokenAuthentication, BasicAuthentication)
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)

    def patch(self, request, *args, **kwargs):
        broker_submission_id = kwargs.get("broker_submission_id", uuid4())
        instance = self.get_object()
        if instance.submission.broker_submission_id != UUID(broker_submission_id):
            response = Response(
                {
                    "submission": "No link to this "
                    "broker_submission_id "
                    "{0}".format(broker_submission_id)
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
            with transaction.atomic():
                RequestLog.objects.create(
                    type=RequestLog.INCOMING,
                    url="brokerage:submissions_upload_patch",
                    method=RequestLog.PATCH,
                    user=instance.user,
                    submission_id=instance.submission.broker_submission_id,
                    response_content=response.data,
                    response_status=response.status_code,
                )
            return response
        try:
            Submission.objects.get(broker_submission_id=broker_submission_id)
        except Submission.DoesNotExist as e:
            response = Response(
                {
                    "submission": "No submission for this "
                    "broker_submission_id "
                    "{0}".format(broker_submission_id)
                },
                status=status.HTTP_404_NOT_FOUND,
            )
            with transaction.atomic():
                RequestLog.objects.create(
                    type=RequestLog.INCOMING,
                    url="brokerage:submissions_upload_patch",
                    method=RequestLog.PATCH,
                    user=instance.user,
                    submission_id=instance.submission.broker_submission_id,
                    response_content=response.data,
                    response_status=response.status_code,
                )
            return response
        response = self.partial_update(request, *args, **kwargs)
        with transaction.atomic():
            RequestLog.objects.create(
                type=RequestLog.INCOMING,
                url="brokerage:submissions_upload_patch",
                method=RequestLog.PATCH,
                user=instance.user,
                submission_id=instance.submission.broker_submission_id,
                response_content=response.data,
                response_status=response.status_code,
            )
        return response
