import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the submissionForm state domain
 */

const selectSubmissionFormDomain = state =>
  state.get('submissionForm', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SubmissionForm
 */

const makeSelectSubmissionForm = () =>
  createSelector(selectSubmissionFormDomain, substate => substate.toJS());

const makeSelectLicense = () =>
  createSelector(selectSubmissionFormDomain, substate =>
    substate.get('license'),
  );

export default makeSelectSubmissionForm;

export { selectSubmissionFormDomain, makeSelectLicense };
