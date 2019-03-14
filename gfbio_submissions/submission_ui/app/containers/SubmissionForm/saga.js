import {
  all,
  call,
  put,
  select,
  takeEvery, takeLatest,
  takeLeading,
} from 'redux-saga/effects';
import {
  SAVE_FORM,
  SUBMIT_FORM,
  SUBMIT_FORM_START,
  UPLOAD_FILES,
} from './constants';
import {
  makeSelectDatasetLabels,
  makeSelectFileUploads,
  makeSelectFormWrapper,
  makeSelectLicense,
  makeSelectMetaDataSchema,
  makeSelectReduxFormForm,
  makeSelectRelatedPublications,
  makeSelectToken,
  makeSelectUserId,
} from './selectors';
import {
  saveForm,
  saveFormError,
  saveFormSuccess,
  submitFormError,
  submitFormStart,
  submitFormSuccess,
  uploadFiles,
  uploadFilesSuccess,
} from './actions';
import { postSubmission } from './submissionApi';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// TODO: move logic to utils.js. here only workflow
function* prepareRequestData(userId, submit = true) {
  const form = yield select(makeSelectFormWrapper());
  const formWrapper = form.formWrapper || {};
  let formValues = formWrapper.values || {};
  let legal_requirements = [];
  let categories = [];
  for (let f in formValues) {
    if (f.includes('legal-requirement')) {
      legal_requirements.push(f.replace('legal-requirement ', ''));
      delete formValues[f];
    }
    if (f.includes('data-category')) {
      categories.push(f.replace('data-category ', ''));
      delete formValues[f];
    }
  }
  const license = yield select(makeSelectLicense());
  const metadata_schema = yield select(makeSelectMetaDataSchema());
  const related_publications = yield select(makeSelectRelatedPublications());
  const datasetLabels = yield select(makeSelectDatasetLabels());
  const requirements = Object.assign({
    license,
    metadata_schema,
    legal_requirements,
    related_publications,
    datasetLabels,
    categories,
  }, formValues);
  return {
    target: 'GENERIC',
    release: submit, // false for save
    submitting_user: userId,
    // download_url: 'url?',
    data: {
      requirements: requirements,
    },
  };
}

function* performUploadSaga() {
  // const uid = uuid.v4();
  // console.log('\nperformUploadSaga ' + uid);
  // console.log(file);
  // TODO: try blocking sequence
  const fileUploads = yield select(makeSelectFileUploads());
  for (let f of fileUploads) {
    let min = 1;
    let max = 6;
    let random = Math.random() * (+max - +min) + +min;
    console.log('\nperformUploadSaga ms: ' + random + ' ' + f.name);
    yield sleep(3000 * random);
  }
  yield put(uploadFilesSuccess({}));
}

export function* performSubmitFormSaga() {
  const token = yield select(makeSelectToken());
  const userId = yield select(makeSelectUserId());
  const payload = yield prepareRequestData(userId);
  try {
    const response = yield call(postSubmission, token, payload);
    yield put(submitFormSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(submitFormError(error));
  }
}

export function* performSaveFormSaga() {
  const token = yield select(makeSelectToken());
  const userId = yield select(makeSelectUserId());
  const payload = yield prepareRequestData(userId, false);
  try {
    const response = yield call(postSubmission, token, payload);
    yield put(saveFormSuccess(response));
    console.log('SAGA save succesful  | put form success');
    console.log('continue with file uploads ?');
    yield put(uploadFiles());
  } catch (error) {
    yield put(saveFormError(error));
  }
}

export function* processSubmitFormTypeSaga() {
  const reduxFormForm = yield select(makeSelectReduxFormForm());
  if (reduxFormForm.workflow === 'save') {
    yield put(saveForm());
  } else if (reduxFormForm.workflow === 'submit') {
    yield put(submitFormStart());
  }
}


export function* checkFormTypeSaga() {
  // new feature from rc1 that blocks until finished
  // https://redux-saga.js.org/docs/api/index.html#takeleadingpattern-saga-args
  yield takeLeading(SUBMIT_FORM, processSubmitFormTypeSaga);
}

export function* submitFormSaga() {
  yield takeLeading(SUBMIT_FORM_START, performSubmitFormSaga);
}

export function* saveFormSaga() {
  yield takeLeading(SAVE_FORM, performSaveFormSaga);
}

export function* uploadFilesSaga() {
  yield takeLatest(UPLOAD_FILES, performUploadSaga);
}


export default function* rootSaga() {
  yield all([checkFormTypeSaga(), saveFormSaga(), submitFormSaga(), uploadFilesSaga()]);
}
