# -*- coding: utf-8 -*-
from django.conf.urls import url

from . import views, api

app_name = "brokerage"
urlpatterns = [
    url(
        regex=r'submissions/$',
        view=views.SubmissionsView.as_view(),
        name='submissions'
    ),
    url(
        regex=r'submissions/(?P<broker_submission_id>[0-9a-z-]+)/$',
        view=views.SubmissionDetailView.as_view(),
        name='submissions_detail'
    ),
    url(
        # regex=r'jira/update/$',
        regex=r'jira_update/$',
        view=api.JiraIssueUpdate.as_view(),
        name='get_jira_updates'
    ),
    url(
        regex=r'submissions/(?P<broker_submission_id>[0-9a-z-]+)/upload/$',
        view=views.SubmissionUploadView.as_view(),
        name='submissions_upload'
    ),
    url(
        regex=r'submissions/(?P<broker_submission_id>[0-9a-z-]+)/uploads/$',
        view=views.SubmissionUploadListView.as_view(),
        name='submissions_uploads'
    ),
    url(
        regex=r'submissions/(?P<broker_submission_id>[0-9a-z-]+)/upload/(?P<pk>[0-9]+)/$',
        view=views.SubmissionUploadDetailView.as_view(),
        name='submissions_upload_detail'
    ),
    url(
        regex=r'submissions/(?P<broker_submission_id>[0-9a-z-]+)/upload/patch/(?P<pk>[0-9]+)/$',
        view=views.SubmissionUploadPatchView.as_view(),
        name='submissions_upload_patch'
    ),

    url(
        regex=r'submissions/(?P<broker_submission_id>[0-9a-z-]+)/comment/$',
        view=views.SubmissionCommentView.as_view(),
        name='submission_comment'
    ),

    # http://0.0.0.0:8000/api/docs/?format=openapi
    # url(r'^docs/$', schema_view, name='rest_api_documentation'),
]
