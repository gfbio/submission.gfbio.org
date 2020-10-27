# -*- coding: utf-8 -*-
import logging

from django.http import Http404
from django.shortcuts import redirect
from rest_framework import mixins, generics, permissions
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response
from rest_framework.status import HTTP_403_FORBIDDEN

from gfbio_submissions.brokerage.configuration.settings import \
    ENA_STUDY_URL_PREFIX
from gfbio_submissions.brokerage.models import PersistentIdentifier
from gfbio_submissions.resolve.serializer import \
    PersistentIdentifierResolveSerializer

logger = logging.getLogger(__name__)


class PersistentIdentifierResolveView(mixins.RetrieveModelMixin,
                                      generics.GenericAPIView):
    queryset = PersistentIdentifier.objects.all()
    serializer_class = PersistentIdentifierResolveSerializer
    lookup_field = 'pid'
    permission_classes = (permissions.AllowAny,)

    def retrieve(self, request, *args, **kwargs):
        instance = None
        try:
            instance = self.get_object()
        except Http404 as e:
            logger.warning(
                'PersistentIdentifierResolveView | retrieve pid: '
                '{} | {}'.format(kwargs.get('pid', ''), e))
        if instance is None:
            return redirect(
                '{}{}'.format(ENA_STUDY_URL_PREFIX, kwargs.get('pid', '')))
        elif instance.status == 'PUBLIC':
            return redirect('{}{}'.format(ENA_STUDY_URL_PREFIX, instance.pid))
        else:
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=HTTP_403_FORBIDDEN)

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)


class PersistentIdentifierRedirectView(PersistentIdentifierResolveView,
                                       generics.RetrieveAPIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'resolve/resolve_redirect.html'

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)