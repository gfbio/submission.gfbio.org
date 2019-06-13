import { DATA_CATEGORY_PREFIX, LEGAL_REQUIREMENTS_PREFIX } from './constants';
import { fromJS } from 'immutable';

export const prepareCategories = (requirements) => {
  let prepared_categories = {};
  if (requirements.categories !== undefined) {
    for (let c of requirements.categories) {
      prepared_categories[DATA_CATEGORY_PREFIX + c] = true;
    }
  }
  return prepared_categories;
};

export const prepareLegalRequirements = (requirements) => {
  let prepared_requirements = {};
  if (requirements.legal_requirements !== undefined) {
    for (let l of requirements.legal_requirements) {
      prepared_requirements[LEGAL_REQUIREMENTS_PREFIX + l] = true;
    }
  }
  return prepared_requirements;
};

export const prepareForMatchingKeys = (requirements, matchingKeys) => {
  let prepared = {};
  for (let m of matchingKeys) {
    // console.log(m);
    if (requirements[m] !== undefined) {
      prepared[m] = requirements[m];
    }
  }
  return prepared;
};

export const prepareInitialValues = (submissionData) => {
  // console.log('prepareInitialValues submissionData');
  // console.log(submissionData);
  let initialValues = {};
  const directMatchingKeys = ['title', 'description', 'download_url', 'comment', 'data_center'];
  if (submissionData.data !== undefined && submissionData.data.requirements != undefined) {
    const requirements = submissionData.data.requirements;

    Object.assign(initialValues, prepareCategories(requirements));
    Object.assign(initialValues, prepareLegalRequirements(requirements));

    Object.assign(initialValues, prepareForMatchingKeys(requirements, directMatchingKeys));

  }
  return initialValues;
};

// TODO: .set('metaDataIndex', '')
export const setStateFormValues = (state, action) => {
  return state
    .set('brokerSubmissionId', action.response.data.broker_submission_id)
    .set('initialValues', prepareInitialValues(action.response.data))
    .set('relatedPublications', fromJS(action.response.data.data.requirements.related_publications))
    .set('dataset_labels', fromJS(action.response.data.data.requirements.dataset_labels))
    .set('contributors', fromJS(action.response.data.data.requirements.contributors))
    .set('embargoDate', new Date(action.response.data.embargo))
    .set('license', action.response.data.data.requirements.license)
    .set('metaDataSchema', action.response.data.data.requirements.metadata_schema)
    .set('metaDataFileName', action.response.data.data.requirements.metadata_file_name)
    // TODO: need whole submission ?
    .set('submission', action.response.data);
};

export const resetStateFormValues = (state, initialContributors = []) => {
  return state
    .set('showSubmitSuccess', false)
    .set('metaDataIndex', '')
    .set('metaDataFileName', '')
    .set('brokerSubmissionId', '')
    .set('initialValues', {})
    .set('relatedPublications', fromJS([]))
    .set('dataset_labels', fromJS([]))
    .set('contributors', initialContributors)
    .set('embargoDate', new Date().setFullYear(new Date().getFullYear() + 1))
    .set('license', 'CC BY 4.0')
    .set('metaDataSchema', 'None')
    .set('fileUploads', fromJS([]))
    .set('fileUploadsFromServer', fromJS({}))
    // TODO: need whole submission ?
    .set('submission', {});
};

function removeMetaDataFlag(state, listName = '') {
  let i = 0;
  for (let f of state.get(listName)) {
    if (f.meta_data !== undefined) {
      f.meta_data = false;
    }
    if (f.metaData !== undefined) {
      f.metaData = false;
    }
    state.update(listName, (uploads) => uploads.splice(i, 1, f));
    i++;
  }
}

export const markMetaDataInScheduledUploads = (state, action) => {
  const metaDataIndex = parseInt(action.metaDataIndex);
  // mark in scheduled
  let i = 0;
  for (let f of state.get('fileUploads')) {
    if (i === metaDataIndex && f.metaData === false) {
      f.metaData = true;
    } else {
      f.metaData = false;
    }
    state.update('fileUploads', (fileUploads) => fileUploads.splice(i, 1, f));
    i++;
  }
  let newMetaDataIndex = action.metaDataIndex;
  if (state.getIn(['fileUploads', metaDataIndex]).metaData === false) {
    newMetaDataIndex = '';
  }
  removeMetaDataFlag(state, 'fileUploadsFromServer');
  return newMetaDataIndex;
};

export const markMetaDataInUploadsFromServer = (state, action) => {
  const metaDataIndex = parseInt(action.metaDataIndex.replace('uploaded_', ''));
  console.log('metaDataInex ' + metaDataIndex + ' action index ' + action.metaDataIndex);
  // mark in all uploadsFromServer
  let i = 0;
  for (let f of state.get('fileUploadsFromServer')) {
    console.log('serverupload ' + metaDataIndex);
    console.log(f);
    if (i === metaDataIndex && f.meta_data === false) {
      f.meta_data = true;
    } else {
      f.meta_data = false;
    }
    state.update('fileUploadsFromServer', (fileUploadsFromServer) => fileUploadsFromServer.splice(i, 1, f));
    i++;
  }
  let newMetaDataIndex = action.metaDataIndex;
  if (state.get('fileUploadsFromServer')[metaDataIndex].meta_data === false) {
    newMetaDataIndex = '';
  }
  removeMetaDataFlag(state, 'fileUploads');
  return newMetaDataIndex;
};
