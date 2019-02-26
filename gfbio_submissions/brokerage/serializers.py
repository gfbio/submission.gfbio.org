# -*- coding: utf-8 -*-
from rest_framework import serializers

from gfbio_submissions.users.models import User
from .models import Submission, \
    SubmissionFileUpload, PrimaryDataFile, SubmissionUpload
from .utils.schema_validation import \
    validate_data_full, validate_data_min


class UserSerializer(serializers.ModelSerializer):
    submission = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Submission.objects.all()
    )

    class Meta:
        model = User
        fields = ('id', 'username', 'submission')


class SubmissionSerializer(serializers.ModelSerializer):
    site = serializers.ReadOnlyField(source='site.username')
    broker_submission_id = serializers.UUIDField(required=False)
    download_url = serializers.URLField(required=False)
    data = serializers.JSONField()
    status = serializers.CharField(read_only=True)

    def validate(self, data):
        if data.get('release', False):
            target = data.get('target', 'NO_TARGET_PROVIDED')
            valid, errors = validate_data_full(data=data.get('data', {}),
                                               target=target)
            if not valid:
                raise serializers.ValidationError(
                    {'data': [e.message for e in errors]})
            else:
                data['status'] = Submission.SUBMITTED
        else:
            valid, errors = validate_data_min(data.get('data', {}))
            if not valid:
                raise serializers.ValidationError(
                    {'data': [e.message for e in errors]})
        return data

    class Meta:
        model = Submission
        fields = (
            'broker_submission_id', 'site', 'submitting_user',
            'site_project_id',
            'target', 'status', 'release', 'data', 'embargo', 'download_url'
        )


class SubmissionDetailSerializer(SubmissionSerializer):
    def validate(self, data):
        if data.get('release', False):
            target = data.get('target', 'NO_TARGET_PROVIDED')
            valid, errors = validate_data_full(data=data.get('data', {}),
                                               target=target)
            if not valid:
                raise serializers.ValidationError(
                    {'data': [e.message for e in errors]})
            else:
                data['status'] = Submission.SUBMITTED
        else:
            valid, errors = validate_data_min(data.get('data', {}))
            target = data.get('target', 'NO_TARGET_PROVIDED')
            full_valid, full_errors = validate_data_full(
                data=data.get('data', {}),
                target=target)
            if not valid:
                error_messages = [e.message for e in errors]
                optional_validation_messages = list(
                    set([e.message for e in full_errors]) - set(error_messages))
                raise serializers.ValidationError(
                    {
                        'data': error_messages,
                        'optional_validation': optional_validation_messages
                    }
                )
            if not full_valid:
                data['data'].update(
                    {'optional_validation': [e.message for e in full_errors]})
        return data


# TODO: remove
class SubmissionFileUploadSerializer(serializers.ModelSerializer):
    site = serializers.ReadOnlyField(source='site.username')
    submission = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = SubmissionFileUpload
        fields = ('site', 'file', 'submission')


# TODO: remove
class PrimaryDataFileSerializer(serializers.ModelSerializer):
    site = serializers.ReadOnlyField(source='site.username')
    submission = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = PrimaryDataFile
        fields = ('site', 'data_file', 'submission')


class SubmissionUploadSerializer(serializers.ModelSerializer):
    site = serializers.ReadOnlyField(source='site.username')
    submission = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = SubmissionUpload
        fields = ('site', 'file', 'submission')
