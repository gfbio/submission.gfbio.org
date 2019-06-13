/*
 *
 * SubmissionForm reducer
 *
 */
import { fromJS, List } from 'immutable';
import {
  ADD_CONTRIBUTOR,
  ADD_DATASET_LABEL,
  ADD_FILE_UPLOAD,
  ADD_RELATED_PUBLICATION,
  CHANGE_CURRENT_DATASET_LABEL,
  CHANGE_CURRENT_RELATED_PUBLICATION,
  CHANGE_LICENSE,
  CHANGE_META_DATA_SCHEMA,
  CLOSE_EMBARGO_DIALOG,
  CLOSE_SAVE_SUCCESS,
  CLOSE_SUBMIT_SUCCESS,
  DELETE_FILE,
  DELETE_FILE_ERROR,
  DELETE_FILE_SUCCESS,
  DISMISS_SHOW_UPLOAD_LIMIT,
  FETCH_FILE_UPLOADS_ERROR,
  FETCH_FILE_UPLOADS_SUCCESS,
  FETCH_SUBMISSION,
  FETCH_SUBMISSION_ERROR,
  FETCH_SUBMISSION_SUCCESS,
  REMOVE_CONTRIBUTOR,
  REMOVE_DATASET_LABEL,
  REMOVE_FILE_UPLOAD,
  REMOVE_RELATED_PUBLICATION,
  RESET_FORM,
  SAVE_FORM,
  SAVE_FORM_ERROR,
  SAVE_FORM_SUCCESS,
  SET_CONTRIBUTORS,
  SET_EMBARGO_DATE,
  SET_METADATA_INDEX,
  SHOW_EMBARGO_DIALOG,
  SHOW_UPLOAD_LIMIT,
  SUBMIT_FORM,
  SUBMIT_FORM_ACTIVE,
  SUBMIT_FORM_ERROR,
  SUBMIT_FORM_START,
  SUBMIT_FORM_SUCCESS,
  UPDATE_CONTRIBUTOR,
  UPDATE_SUBMISSION,
  UPDATE_SUBMISSION_ERROR,
  UPDATE_SUBMISSION_SUCCESS,
  UPDATE_SUBMISSION_SUCCESS_SUBMIT,
  UPLOAD_FILE_ERROR,
  UPLOAD_FILE_PROGRESS,
  UPLOAD_FILE_SUCCESS,
  UPLOAD_FILES,
  UPLOAD_FILES_ERROR,
  UPLOAD_FILES_SUCCESS,
} from './constants';
import { resetStateFormValues, setStateFormValues } from './utils';

let backendParameters = {};
if (window.props !== undefined) {
  backendParameters = window.props;
}

function getInitialContributors(backendParameters) {
  let realName = backendParameters.userRealName || '';
  // console.log('realName ', realName);
  let nameSplit = realName.split(' ');
  // console.log(nameSplit);
  let firstName, lastName = '';
  if (nameSplit.length > 1) {
    firstName = nameSplit.shift();
    lastName = nameSplit.join(' ');
  } else {
    firstName = nameSplit.shift();
  }
  // console.log(firstName);
  // console.log(lastName);
  const initialContributor = {
    firstName: firstName,
    lastName: lastName,
    emailAddress: backendParameters.userEmail || '',
  };
  if (initialContributor.firstName.length > 0 &&
    initialContributor.emailAddress.length) {
    return [initialContributor];
  }
  return [];
}

// function getInitialContributor(backendParameters) {
// getInitialContributor();
// return initialContributor;
//   return {};
// };
//
const initialContributors = getInitialContributors(backendParameters);
// console.log('initialContibutor');
// console.log(initialContributors);

export const initialState = fromJS({
  license: 'CC BY 4.0',
  metaDataSchema: 'None',
  reduxFormForm: {},
  initialValues: {},
  submission: {},
  submitInProgress: false,
  saveInProgress: false,
  showSubmitSuccess: false,

  showSaveSuccess: false,

  // embargoDate: new Date(),
  embargoDate: new Date().setFullYear(new Date().getFullYear() + 1),
  // userId: backendParameters.userId || -1,
  // FIXME: replace. development default of 2
  userId: backendParameters.userId || 2,
  // token: backendParameters['token'] || 'NO_TOKEN',
  // FIXME: replace. during development token defaults to test-server user
  token: backendParameters['token'] || '5639b56bd077fb3e12d7e4a0ada244aaa970c2fd',
  userName: backendParameters.userName || '',
  // TODO: decide what from actual response is needed, then put in reducer
  submitResponse: {},
  // TODO: same for save
  saveResponse: {},
  currentRelatedPublication: '',
  relatedPublications: [],
  currentLabel: '',
  dataset_labels: [],

  fileUploads: [],
  fileUploadInProgress: false,

  fileUploadsFromServer: {},

  metaDataIndex: '',
  metaDataFileName: '',
  // uploadListIndex: 0,

  brokerSubmissionId: '',
  requestBrokerSubmissionId: '',
  // deleteBrokerSubmissionId: '',
  contributors: initialContributors,
  currentContributor: {},
  updateWithRelease: false,
  promptOnLeave: true,

  showUploadLimitMessage: false,
  // uploadNoOfFilesExceeded: false,
  // uploadVolumeExceeded: false,
  showEmbargoDialog: false,

  generalError: false,

});


// const getIndexForFileName = (data, fileName) => {
//   for (let d in data) {
//     console.log(data[d]);
//     if (data[d].file_name === fileName) {
//       return d;
//     }
//   }
// };

function submissionFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_LICENSE:
      return state.set('license', action.license);
    case CHANGE_META_DATA_SCHEMA:
      return state.set('metaDataSchema', action.metaDataSchema);
    case SAVE_FORM:
      return state
        .set('showSaveSuccess', false)
        // .set('promptOnLeave', false)
        .set('saveInProgress', true);
    case SAVE_FORM_SUCCESS:
      // console.info('SAVE_FORM_SUCCESS');
      // TODO: set bsi etc after success, from then its updates
      return state
        .set('metaDataIndex', '')
        // .set('metaDataFileName', action.response.data.data.requirements.metadata_file_name)
        .set('brokerSubmissionId', action.response.data.broker_submission_id)
        .set('saveResponse', action.response)
        .set('saveInProgress', false)
        .set('showSaveSuccess', true);
    case CLOSE_SAVE_SUCCESS:
      return state
        .set('showSaveSuccess', false);
    case CLOSE_SUBMIT_SUCCESS:
      return state
        .set('showSubmitSuccess', false);
    case SAVE_FORM_ERROR:
      return state
        .set('metaDataIndex', '')
        .set('saveInProgress', false);
    case SUBMIT_FORM:
      return state
        .set('promptOnLeave', false)
        .set('reduxFormForm', action.form);
    case SUBMIT_FORM_START:
      return state.set('submitInProgress', true);
    case SUBMIT_FORM_ACTIVE:
      return state.set('submitInProgress', true);
    case SUBMIT_FORM_SUCCESS:
      return state
        .set('metaDataIndex', '')
        .set('brokerSubmissionId', action.response.data.broker_submission_id)
        .set('submitResponse', action.response)
        .set('submitInProgress', false)
        .set('showSubmitSuccess', true);
    case SUBMIT_FORM_ERROR:
      return state
        .set('metaDataIndex', '')
        .set('submitInProgress', false);
    case SHOW_EMBARGO_DIALOG:
      return state
        .set('showEmbargoDialog', true);
    case CLOSE_EMBARGO_DIALOG:
      return state
        .set('showEmbargoDialog', false);
    case SET_EMBARGO_DATE:
      // return state.set('embargoDate', dateFormat(action.date, 'yyyy-mm-dd'));
      return state.set('embargoDate', action.date);
    case CHANGE_CURRENT_RELATED_PUBLICATION:
      return state
        .set('currentRelatedPublication', action.value);
    case ADD_RELATED_PUBLICATION:
      return state
        .update('relatedPublications', (relatedPublications) => relatedPublications.push(action.value))
        .set('currentRelatedPublication', '');
    case REMOVE_RELATED_PUBLICATION:
      return state
        .update('relatedPublications', (relatedPublications) => relatedPublications.splice(action.index, 1));
    case CHANGE_CURRENT_DATASET_LABEL:
      return state
        .set('currentLabel', action.value);
    case ADD_DATASET_LABEL:
      // console.log('ADD_DATASET_LABEL ');
      // console.log(action);
      return state
        .update('dataset_labels', (dataset_labels) => dataset_labels.push(action.value))
        .set('currentLabel', '');
    case REMOVE_DATASET_LABEL:
      // console.log('REMOVE_DATASET_LABEL ');
      // console.log(action);
      return state
        .update('dataset_labels', (dataset_labels) => dataset_labels.splice(action.index, 1));
    case SHOW_UPLOAD_LIMIT:
      return state
        .set('generalError', true)
        .set('showUploadLimitMessage', true);
    case DISMISS_SHOW_UPLOAD_LIMIT:
      return state
        .set('generalError', false)
        .set('showUploadLimitMessage', false);
    case ADD_FILE_UPLOAD:
      return state
        .set('showUploadLimitMessage', false)
        .update('fileUploads', (fileUploads) => fileUploads.push(...action.value));
    case REMOVE_FILE_UPLOAD:
      if (state.get('fileUploadInProgress') === false) {
        return state
          .set('metaDataIndex', '')
          .update('fileUploads', (fileUploads) => fileUploads.splice(action.index, 1));
      } else {
        return state;
      }
    case UPLOAD_FILES:
      return state
        .set('fileUploadInProgress', true);
    case UPLOAD_FILES_SUCCESS:
      return state
        .set('metaDataIndex', '')
        .set('fileUploadInProgress', false);
    case UPLOAD_FILES_ERROR:
      return state
        .set('fileUploadInProgress', false);
    case UPLOAD_FILE_PROGRESS:
      let upload = state.getIn(['fileUploads', action.index]);
      upload.progress = action.val;
      // TODO: setIn does not work as described in here: https://thomastuts.com/blog/immutable-js-101-maps-lists.html
      return state
        .update('fileUploads', (fileUploads) => fileUploads.splice(action.index, 1, upload));
    case UPLOAD_FILE_ERROR:
      let error_upload = state.getIn(['fileUploads', action.index]);
      error_upload.messages = action.error;
      error_upload.status = 'error';
      return state
        .update('fileUploads', (fileUploads) => fileUploads.splice(action.index, 1, error_upload));
    case UPLOAD_FILE_SUCCESS:
      let success_upload = state.getIn(['fileUploads', action.index]);
      success_upload.status = 'success';
      return state
        .update('fileUploads', (fileUploads) => fileUploads.splice(action.index, 1, success_upload));
    case DELETE_FILE:
      console.log('DELETE_FILE');
      console.log(action.fileKey);
      return state;
    case DELETE_FILE_SUCCESS:
      console.log('DELETE_FILE_SUCCESS');
      return state;
    case DELETE_FILE_ERROR:
      console.log('DELETE_FILE_ERROR');
      return state;
    case SET_CONTRIBUTORS:
      // console.log('SET_CONTRIBUTORS');
      // console.log(action.contributors);
      return state
        .set('contributors', action.contributors);
    case ADD_CONTRIBUTOR:
      // console.log('ADD_CONTRIBUTOR');
      // console.log(action.contributor);
      return state
        .update('contributors', (contributors) => contributors.push(action.contributor));
    case UPDATE_CONTRIBUTOR:
      // console.log('UPDATE_CONTRIBUTOR');
      // console.log(action.contributor);
      // console.log(action.index);
      return state
        .update('contributors', (contributors) => contributors.splice(action.index, 1, action.contributor));
    case REMOVE_CONTRIBUTOR:
      // console.log('REMOVE_CONTRIBUTOR');
      // console.log(action.index);
      return state
        .update('contributors', (contributors) => contributors.splice(action.index, 1));
    case FETCH_SUBMISSION:
      // console.log('FETCH_SUBMISSION');
      // TODO: set prop to inidcate loading -> loading gif
      return state.set('requestBrokerSubmissionId', action.brokerSubmissionId);
    case FETCH_SUBMISSION_SUCCESS:
      // console.log('FETCH_SUBMISSION_SUCCESS');
      // TODO: 2x data: 1 from axios 1 from json-body
      // TODO: refactor to some sort of getter with checks
      // console.log(action.response.data.broker_submission_id);
      // console.log(typeof action.response.data.data.requirements.contributors);
      return setStateFormValues(state, action).set('promptOnLeave', true);
    case FETCH_SUBMISSION_ERROR:
      // console.log('FETCH_SUBMISSION_ERROR');
      return state;
    case FETCH_FILE_UPLOADS_SUCCESS:
      // console.log('FETCH_FILE_UPLOADS_SUCCESS');
      // console.log(typeof action.response.data);
      // console.log(action.response);
      // const metaIndex = 'uploaded_' + action.response.data.indexOf(state.get('metaDataFileName'));
      // const metaIndex = 'uploaded_' + getIndexForFileName(action.response.data, state.get('metaDataFileName'));
      // console.log(metaIndex);
      return state
        .set('fileUploads', List())
        .set('fileUploadsFromServer', action.response.data);
    // .set('metaDataIndex', metaIndex);
    case FETCH_FILE_UPLOADS_ERROR:
      // console.log('FETCH_FILE_UPLOADS_ERROR');
      // console.log(action.error);
      return state;
    case RESET_FORM:
      // console.log('RESET_FORM');
      state = resetStateFormValues(state, getInitialContributors(backendParameters));
      // return state.set('promptOnLeave', true);
      return state;
    case UPDATE_SUBMISSION:
      // console.log('UPDATE_SUBMISSION');
      // TODO: set prop to inidcate loading -> loading gif
      // return state.set('requestBrokerSubmissionId', action.brokerSubmissionId);
      return state
        .set('updateWithRelease', action.release);
    case UPDATE_SUBMISSION_SUCCESS:
      // console.log('UPDATE_SUBMISSION_SUCCESS');
      // TODO: 2x data: 1 from axios 1 from json-body
      // TODO: refactor to some sort of getter with checks
      // console.log(action.response.data.broker_submission_id);
      // console.log(typeof action.response.data.data.requirements.contributors);
      return state
        .set('saveInProgress', false)
        .set('submitInProgress', false)
        // .set('showSubmitSuccess', true)
        .set('showSaveSuccess', true)
        .set('metaDataIndex', '')
        .set('updateWithRelease', false);
    case UPDATE_SUBMISSION_SUCCESS_SUBMIT:
      // console.log('UPDATE_SUBMISSION_SUCCESS_SUBMIT');
      // TODO: 2x data: 1 from axios 1 from json-body
      // TODO: refactor to some sort of getter with checks
      // console.log(action.response.data.broker_submission_id);
      // console.log(typeof action.response.data.data.requirements.contributors);
      return state
        .set('saveInProgress', false)
        .set('submitInProgress', false)
        .set('showSubmitSuccess', true)
        // .set('showSaveSuccess', true)
        .set('metaDataIndex', '')
        .set('updateWithRelease', false);
    // return setStateFormValues(state, action);
    case UPDATE_SUBMISSION_ERROR:
      // console.log('UPDATE_SUBMISSION_ERROR');
      return state
        .set('updateWithRelease', action.release);
    case SET_METADATA_INDEX:
      console.log('------  ___  SET_METADATA_INDEX');
      /*
      TODO: setIn does not work as described in here: https://thomastuts.com/blog/immutable-js-101-maps-lists.html
         answer maybe here: https://stackoverflow.com/questions/43515723/what-does-getin-do-in-immutable-js
      */
      const metaDataIndex = parseInt(action.metaDataIndex);
      // let fileUpload = state.getIn(['fileUploads', metaDataIndex]);
      // fileUpload.metaData = true;
      // const fileUploads = state.get('fileUploads');
      // let newFileUploads = [];

      // TODO: reactor to method -> utils
      console.log(action.metaDataIndex === state.get('metaDataIndex'));
      console.log(action.metaDataIndex);
      console.log(state.get('metaDataIndex'));

      let i = 0;
      for (let f of state.get('fileUploads')) {
        console.log(i + ' ' + f.metaData);
        if (i === metaDataIndex && f.metaData === false) {
          f.metaData = true;
        }
        // else if (i === metaDataIndex && f.metaData === true) {
        //   f.metaData = false;
        // }
        else {
          f.metaData = false;
        }
        console.log(f);
        // newFileUploads.push(f);
        state.update('fileUploads', (fileUploads) => fileUploads.splice(i, 1, f));
        i++;
        // if (f === action.metaDataIndex) {
        //   fileUploads[f].metaData = true;
        // } else {
        //   fileUploads[f].metaData = false;
        // }
        // newFileUploads.push(fileUploads[f]);
      }
      let newMetaDataIndex = action.metaDataIndex;
      if (state.getIn(['fileUploads', metaDataIndex]).metaData === false) {
        newMetaDataIndex = '';
      }
      // console.log(newFileUploads);
      return state
      // .update('fileUploads', (fileUploads) => fileUploads.splice(metaDataIndex, 1, fileUpload))
      //   .set('fileUploads', fromJS(newFileUploads))
        .set('metaDataFileName', '')
        .set('metaDataIndex', newMetaDataIndex);
    // case SET_UPLOAD_LIST_INDEX:
    //   return state
    //     .set('uploadListIndex', action.listIndex);
    default:
      return state;
  }
}

export default submissionFormReducer;
