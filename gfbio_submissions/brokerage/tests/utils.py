# -*- coding: utf-8 -*-
import json
import os
import textwrap


def _get_test_data_dir_path():
    return '{0}{1}gfbio_submissions{1}brokerage{1}tests{1}test_data'.format(
        os.getcwd(), os.sep, )


def _get_ena_data(simple=False):
    if simple:
        with open(os.path.join(
                _get_test_data_dir_path(), 'ena_data.json'), 'r') as data_file:
            return json.load(data_file)

    with open(os.path.join(
            _get_test_data_dir_path(),
            'ena_data_runs.json'), 'r') as data_file:
        return json.load(data_file)


def _get_ena_data_without_runs():
    with open(os.path.join(
            _get_test_data_dir_path(),
            'ena_data_no_runs.json'), 'r') as data_file:
        return json.load(data_file)


def _get_parsed_ena_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'ena_response.json'), 'r') as data_file:
        return json.load(data_file)


def _get_ena_xml_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'ena_response.xml'), 'r') as data_file:
        return textwrap.dedent(data_file.read())


def _get_ena_release_xml_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'ena_release_response.xml'),
            'r') as data_file:
        return textwrap.dedent(data_file.read())


def _get_ena_error_xml_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'ena_error_response.xml'),
            'r') as data_file:
        return textwrap.dedent(data_file.read())


def _get_pangaea_soap_body():
    with open(os.path.join(
            _get_test_data_dir_path(),
            'pangaea_soap_body.xml'), 'r') as data_file:
        return textwrap.dedent(data_file.read())


def _get_pangaea_soap_response():
    with open(os.path.join(
            _get_test_data_dir_path(),
            'pangaea_soap_response.xml'), 'r') as data_file:
        return textwrap.dedent(data_file.read().replace('\n', ''))


def _get_submission_request_data():
    with open(os.path.join(
            _get_test_data_dir_path(),
            'submission_request_data.json'), 'r') as data_file:
        return json.load(data_file)


def _get_submission_post_response():
    with open(os.path.join(
            _get_test_data_dir_path(),
            'submission_post_response.json'), 'r') as data_file:
        return json.load(data_file)


def _get_jira_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'jira_response.json'), 'r') as data_file:
        return json.load(data_file)


def _get_jira_issue_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'jira_issue_response.json'),
            'r') as data_file:
        return json.load(data_file)


def _get_jira_attach_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'jira_attach_response.json'),
            'r') as data_file:
        return json.load(data_file)


def _get_pangaea_attach_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'pangaea_attach_response.json'),
            'r') as data_file:
        return json.load(data_file)


def _get_pangaea_comment_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'pangaea_comment_response.json'),
            'r') as data_file:
        return json.load(data_file)


def _get_request_comment_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'get_comment_response.json'),
            'r') as data_file:
        return json.load(data_file)


def _get_pangaea_ticket_response():
    with open(os.path.join(
            _get_test_data_dir_path(), 'pangaea_ticket_response.json'),
            'r') as data_file:
        return json.load(data_file)
