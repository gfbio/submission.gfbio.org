/*
 *
 * SubmissionForm actions
 *
 */

import {
  CHANGE_LICENSE,
  CHANGE_META_DATA_SCHEMA,
  DEFAULT_ACTION,
  SUBMIT_FORM,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function changeLicense(license) {
  return {
    type: CHANGE_LICENSE,
    license,
  };
}

export function changeMetaDataSchema(metaDataSchema) {
  return {
    type: CHANGE_META_DATA_SCHEMA,
    metaDataSchema,
  };
}

export function submitForm(form) {
  return {
    type: SUBMIT_FORM,
    form,
  };
}
