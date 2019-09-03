# -*- coding: utf-8 -*-

import csv
import io
import json
import logging
import textwrap
import uuid
import xml.etree.ElementTree as ET

import requests
from django.db import transaction

from gfbio_submissions.brokerage.configuration.settings import SUBMISSION_DELAY, \
    CSV_WRITER_QUOTING, SEPARATOR
from gfbio_submissions.brokerage.forms import Gcdj2CsvForm
from gfbio_submissions.brokerage.models import TicketLabel, Submission
from gfbio_submissions.brokerage.utils.gcdj_utils import flatten_dictionary

logger = logging.getLogger(__name__)


# requests to pangaea infrastructure ------------------------------------------

def request_pangaea_login_token(resource_credential):
    headers = {
        'Accept': 'text/xml',
        'SOAPAction': 'login'
    }
    body = textwrap.dedent("""<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:urn="urn:java:de.pangaea.login.PanLogin">
  <soapenv:Header/>
  <soapenv:Body>
    <urn:login>
      <urn:username>{0}</urn:username>
      <urn:password>{1}</urn:password>
    </urn:login>
  </soapenv:Body>
</soapenv:Envelope>""".format(resource_credential.username,
                              resource_credential.password))
    # requestlog: ok
    response = requests.post(url=resource_credential.url, data=body,
                             headers=headers)
    with transaction.atomic():
        # prevent cyclic dependencies
        from gfbio_submissions.brokerage.models import RequestLog
        req_log = RequestLog(
            request_id=uuid.uuid4(),
            type=RequestLog.OUTGOING,
            url=resource_credential.url,
            data=body,
            site_user='',
            submission_id=None,
            response_status=response.status_code,
            response_content=response.content,
            triggered_by=None,
            request_details={
                'request_headers': str(headers)
            }
        )
        req_log.save()

    return response


def parse_pangaea_login_token_response(soap_response):
    try:
        root = ET.fromstring(soap_response.content)
        loginReturn_element = root.findall('.//loginReturn').pop()
        return loginReturn_element.text
    except ET.ParseError as e:
        logger.error(
            'ParseError. parse_pangaea_login_token_response. '
            'Error: {}'.format(e)
        )
        return ''


def get_pangaea_login_token(archive_access):
    return parse_pangaea_login_token_response(
        request_pangaea_login_token(resource_credential=archive_access))


# TODO: is checklist/package mandatory in schema now ???
def get_csv_from_sample(sample_data={}):
    if 'gcdjson' in sample_data.keys():
        # TODO: validation needed ? should have taken place along with submission_data serialization
        # checklist = sample_data.get('gcdjson').get('checklist', '')
        # package = sample_data.get('gcdjson').get('package', '')
        # schema, created = GcdjSchema.get_or_create_schema_for_checklist_names(
        #     checklist, package
        # )
        csv_form = Gcdj2CsvForm(
            {'gcdjson': json.dumps(sample_data.get('gcdjson'))})
        csv_form.is_valid()
        flat_json_dict = flatten_dictionary(
            dictionary=csv_form.cleaned_data,
            separator=SEPARATOR
        )
        return True, flat_json_dict
    else:
        return False, {}


def get_csv_from_samples(submission):
    samples = submission.brokerobject_set.filter(type='sample')
    output = io.StringIO()
    writer = csv.writer(output, delimiter=str(','), quotechar=str('"'),
                        quoting=CSV_WRITER_QUOTING)
    for s in samples:
        contains_csv, csv_data = get_csv_from_sample(s.data)
        if contains_csv:
            writer.writerow(csv_data.keys())
            writer.writerow(csv_data.values())

    csv_from_samples = output.getvalue().replace('True', 'true').replace(
        'False', 'false')
    output.close()
    return csv_from_samples


def prepare_pangaea_issue_content(site_configuration, submission):
    data = {
        # 'fields': {
        'project': {
            'key': 'PDI',
            # 'id': 'PDI'
        },
        'customfield_10002':
            submission.submitting_user_common_information
            if submission.submitting_user_common_information != ''
            else site_configuration.contact,
        'customfield_10004': submission.data.get('requirements', {}).get(
            'title', ''),
        # 'project': 'PDI',
        'issuetype': {
            # name needed to identidy correct type
            "name": "Data Submission",
        },
        'description': submission.data.get('requirements', {}).get(
            'description', ''),
        'summary': 'Automated request by GFBio BrokerAgent',
        'labels': site_configuration.get_ticket_labels(
            label_type=TicketLabel.PANGAEA_JIRA)
        # }
    }
    return data


def pull_pangaea_dois(submission, jira_client):
    references = submission.get_primary_pangaea_references()
    for p in references:
        # TODO: add RequestLog ?
        # doi = check_for_pangaea_doi(
        #     ticket_key=p.reference_key,
        #     login_token=login_token,
        #     submission=submission,
        # )
        # site_config = SiteConfiguration.objects.get_site_configuration_for_task(
        #     site=submission.site
        # )
        # jira_client = JiraClient(resource=site_config.helpdesk_server,
        #                          token_resource=site_config.pangaea_token_server)
        doi = jira_client.get_doi_from_pangaea_issue(p.reference_key)
        if doi:
            study_broker_object = submission.brokerobject_set.filter(
                type='study').first()
            with transaction.atomic():
                persistent_identifier = study_broker_object.append_pid_for_pangea_doi(
                    doi=doi)
                submission.status = Submission.CLOSED
                submission.save()
                logger.info(
                    msg='pull_pangaea_dois adding PersistentIdentifier {} to '
                        'BrokerObject {} of Submission {}. Closing Submission'.format(
                        persistent_identifier.pid, study_broker_object,
                        submission.broker_submission_id))

            logger.info(
                msg='pull_pangaea_dois. add comment with pangea doi '
                    'to helpdeskticket. submission_id={}'.format(submission.pk))
            from gfbio_submissions.brokerage.tasks import \
                add_pangaea_doi_task

            add_pangaea_doi_task.apply_async(
                kwargs={
                    'submission_id': submission.pk,
                    'pangaea_doi': persistent_identifier.pid,
                },
                countdown=SUBMISSION_DELAY
            )
