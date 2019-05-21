/**
 *
 * LicenseSelectionForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import reducer from '../../containers/SubmissionForm/reducer';
import { makeSelectLicense } from '../../containers/SubmissionForm/selectors';
import { changeLicense } from '../../containers/SubmissionForm/actions';
import LicenseModals, {
  licenseDetailData,
} from './licenseDetailsData';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class LicenseSelectionForm extends React.PureComponent {

  licenseListElements = Object.keys(licenseDetailData).map(licenseKey => {
      if (licenseKey === 'OtherLicense') {
        return (
          <li className="list-group-item" key={licenseKey}>
            <button
              className="btn btn-primary btn-block btn-license text-left"
              type="button"
              data-toggle="collapse show"
              data-target="#collapseLicense"
              aria-expanded="false"
              aria-controls="collapseLicense"
              onClick={() => this.props.onClickLicense(
                licenseDetailData[licenseKey].name)}
            >
              {licenseDetailData[licenseKey].name}
            </button>
          </li>
        );
      }
      return (
        <li className="list-group-item" key={licenseKey}>

          <button
            className="btn btn-primary btn-block btn-license text-left"
            type="button"
            data-toggle="collapse show"
            data-target="#collapseLicense"
            aria-expanded="false"
            aria-controls="collapseLicense"
            onClick={() => this.props.onClickLicense(
              licenseDetailData[licenseKey].name)}
          >
            {licenseDetailData[licenseKey].name}
            <a className="align-bottom" data-toggle="modal"
               data-target={'#' + licenseKey}>
              details
            </a>
          </button>
        </li>
      );
    },
  );

  // TODO:  Maybe a connection to store/reducer is needed
  // TODO: no redux form connection ? set license to form with reeducer ?
  // TODO: get List of Licenses dynamically
  render() {
    return (
      <div>
        <header className="header header-left form-header-top">
          <h2 className="section-title">License</h2>
          <p className="section-subtitle" />
        </header>
        {/* MODAL*/}
        <LicenseModals
          onClickLicense={this.props.onClickLicense}
        />
        {/* END MODAL*/}
        <div className="form-group accordion-form-content">
          <button
            className="btn btn-primary btn-block btn-license text-left"
            type="button"
            data-toggle="collapse"
            data-target="#collapseLicense"
            aria-expanded="false"
            aria-controls="collapseLicense"
          >
            <i className="fa fa-balance-scale" />
            {this.props.license}
            <p className="align-bottom">change</p>
          </button>

          <div className="collapse" id="collapseLicense">
            <div className="card card-body">
              <ul className="list-group">{this.licenseListElements}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LicenseSelectionForm.propTypes = {
  onClickLicense: PropTypes.func,
  license: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  license: makeSelectLicense(),
});

function mapDispatchToProps(dispatch) {
  return {
    onClickLicense: license => dispatch(changeLicense(license)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'submissionForm', reducer });

export default compose(
  withReducer,
  withConnect,
)(LicenseSelectionForm);
