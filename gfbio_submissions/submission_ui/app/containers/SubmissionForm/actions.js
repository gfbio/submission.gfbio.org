/*
 *
 * SubmissionForm actions
 *
 */

import {
  ADD_DATASET_LABEL,
  ADD_RELATED_PUBLICATION, CHANGE_CURRENT_DATASET_LABEL,
  CHANGE_CURRENT_RELATED_PUBLICATION,
  CHANGE_LICENSE,
  CHANGE_META_DATA_SCHEMA,
  DEFAULT_ACTION, REMOVE_DATASET_LABEL,
  REMOVE_RELATED_PUBLICATION,
  SAVE_FORM,
  SAVE_FORM_ERROR,
  SAVE_FORM_SUCCESS,
  SET_EMBARGO_DATE,
  SUBMIT_FORM,
  SUBMIT_FORM_ACTIVE,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
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

export function saveForm() {
  return {
    type: SAVE_FORM,
  };
}

export function saveFormSuccess(response) {
  return {
    type: SAVE_FORM_SUCCESS,
    response,
  };
}

export function saveFormError() {
  return {
    type: SAVE_FORM_ERROR,
  };
}

export function submitForm(form) {
  return {
    type: SUBMIT_FORM,
    form,
  };
}

export function submitFormStart() {
  return {
    type: SUBMIT_FORM_START,
  };
}

export function submitFormActive() {
  return {
    type: SUBMIT_FORM_ACTIVE,
  };
}

export function submitFormSuccess(response) {
  return {
    type: SUBMIT_FORM_SUCCESS,
    response,
  };
}

export function submitFormError(errorResponse) {
  return {
    type: SUBMIT_FORM_ERROR,
    errorResponse,
  };
}

export function setEmbargoDate(date) {
  return {
    type: SET_EMBARGO_DATE,
    date,
  };
}

export function addRelatedPublication(value) {
  return {
    type: ADD_RELATED_PUBLICATION,
    value,
  };
}

export function removeRelatedPublication(index) {
  return {
    type: REMOVE_RELATED_PUBLICATION,
    index,
  };
}

export function changeCurrentRelatedPublication(value) {
  return {
    type: CHANGE_CURRENT_RELATED_PUBLICATION,
    value,
  };
}

export function addDatasetLabel(value) {
  return {
    type: ADD_DATASET_LABEL,
    value,
  };
}

export function removeDatsetLabel(index) {
  return {
    type: REMOVE_DATASET_LABEL,
    index,
  };
}

export function changeCurrentLabel(value) {
  return {
    type: CHANGE_CURRENT_DATASET_LABEL,
    value,
  };
}