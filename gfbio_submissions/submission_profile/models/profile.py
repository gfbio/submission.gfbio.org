from django.db import models
from model_utils.models import TimeStampedModel

from config.settings.base import AUTH_USER_MODEL
from ..models.field import Field
from ...brokerage.configuration.settings import GENERIC
from ...brokerage.models.submission import Submission


class Profile(TimeStampedModel):
    name = models.SlugField(max_length=128, unique=True)
    target = models.CharField(max_length=16, choices=Submission.TARGETS, default=GENERIC)

    system_wide_profile = models.BooleanField(default=False)

    user = models.ForeignKey(
        AUTH_USER_MODEL,
        null=True,
        blank=True,
        related_name="user_profiles",
        on_delete=models.CASCADE,
    )

    fields = models.ManyToManyField(Field, blank=True)
    inherit_fields_from = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL)

    # TODO: workflow field, sub models like preferences, chain of tasks etc.
    # TODO: owner ?
    # TODO: language ? or in preferences
    # TODO: general structure like, grid, menues, footer, general texts or descriptions
    # TODO: global actions, buttons or similar
    # TODO: global design ?

    # TODO Brainstorming DASS-1942:
    #   - at start of feature, nobody can create or mod profile, except via admin

    # TODO: validator for unique-in-profile field_name (or mapping_to)
    #   https://docs.djangoproject.com/en/4.2/ref/validators/

    def save(self, *args, **kwargs):
        super(Profile, self).save(*args, **kwargs)
        for s in Field.objects.filter(system_wide_mandatory=True):
            self.fields.add(s)

    def __str__(self):
        return self.name

    def all_fields(self):
        if self.inherit_fields_from is None:
            return self.fields.all()
        return self.fields.all() | self.inherit_fields_from.fields.all()

    def form_fields(self):
        if self.inherit_fields_from is None:
            return self.all_fields()
        return self.all_fields() | self.inherit_fields_from.all_fields()
