import json
import os
import xml.etree.ElementTree as ET
from collections import OrderedDict
from pprint import pprint

from django.test import TestCase

from gfbio_submissions.brokerage.tests.utils import _get_test_data_dir_path


class TestSubmissionAdmin(TestCase):

    def test_parse_xsd_for_platform(self):

        platform_definition_json = OrderedDict([
            ('platform', OrderedDict([('oneOf', [])]))
        ])
        platform_instruments_json = OrderedDict()
        platform_mappings = {}

        tree = ET.parse(
            os.path.join(
                _get_test_data_dir_path(),
                'SRA.common.xsd'
            ))
        root = tree.getroot()

        # all platform choices
        platforms = root.find(
            "*[@name='PlatformType']/{http://www.w3.org/2001/XMLSchema}choice")

        for r in platforms:
            platform_name = r.attrib.get('name', '').lower()
            platform_definition_json['platform']['oneOf'].append(
                {
                    '$ref': '#/{0}'.format(platform_name)
                }
            )

            instrument_model = r.find(
                "{http://www.w3.org/2001/XMLSchema}complexType"
                "/*/*[@name='INSTRUMENT_MODEL']").attrib.get('type', '').strip(
                'com:')

            platform_instruments_json[
                '{0}'.format(platform_name)] = OrderedDict([
                ('type', 'string'), ('enum', [])
            ])

            instrument_variations = root.findall(
                "*[@name='{0}']/*/*".format(instrument_model))

            for i in instrument_variations:
                instr = i.attrib.get('value', '')
                platform_mappings[instr.lower()] = instr
                platform_instruments_json['{0}'.format(platform_name)][
                    'enum'].append(instr)

        print(json.dumps(platform_definition_json))
        print('\n-----------------------------------\n')
        print(json.dumps(platform_instruments_json))
        print('\n-----------------------------------\n')
        pprint(platform_mappings)
