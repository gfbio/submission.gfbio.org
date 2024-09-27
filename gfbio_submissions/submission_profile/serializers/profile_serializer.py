# -*- coding: utf-8 -*-
from rest_framework import serializers

from .field_serializer import FieldSerializer
from .profile_field_serializer import ProfileFieldSerializer
# from .profile_field_extension_serializer import ProfileFieldExtensionSerializer
from ..configuration.settings import SYSTEM_WIDE_PROFILE_NAME_PREFIX
from ..models.profile import Profile


class ProfileSerializer(serializers.ModelSerializer):
    # FIXME: DASS-2101 adapt fields serialization to refactored models
    form_fields = ProfileFieldSerializer(many=True, read_only=True)
    # form_fields = FieldSerializer(many=True, read_only=True)
    # form_fields = ProfileFieldExtensionSerializer(many=True, read_only=True)
    def validate_name(self, value):
        if value.lower().startswith(SYSTEM_WIDE_PROFILE_NAME_PREFIX):
            raise serializers.ValidationError(
                "Profile names are not allowed to beging with {}".format(SYSTEM_WIDE_PROFILE_NAME_PREFIX))
        return value

    class Meta:
        model = Profile
        fields = (
            "name",
            "form_fields",
            "target",
        )
