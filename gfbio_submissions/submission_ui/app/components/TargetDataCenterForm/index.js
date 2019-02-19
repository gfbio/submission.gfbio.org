/**
 *
 * TargetDataCenterForm
 *
 */

import React from 'react';
import { Field } from 'redux-form/immutable';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class TargetDataCenterForm extends React.PureComponent {
  dataCenterList = [
    '',
    'ENA – European Nucleotide Archive',
    'PANGAEA – Data Publisher for Earth & Environmental Science',
    'Data Centers at Natural Science Collections',
    'BGBM – Botanic Garden and Botanical Museum Berlin, Freie Universität Berlin',
    'DSMZ – Leibniz Institute DSMZ – German Collection of Microorganisms and Cell Cultures, Braunschweig',
    'MfN – Leibniz Institute for Research on Evolution and Biodiversity, Berlin',
    'SGN – Senckenberg Gesellschaft für Naturforschung – Leibniz Institute, Frankfurt',
    'SMNS – State Museum of Natural History Stuttgart',
    'SNSB – Staatliche Naturwissenschaftliche Sammlungen Bayerns – SNSB IT Center, München',
    'ZFMK – Zoological Research Museum Alexander Koenig – Leibniz Institute for Animal Biodiversity, Bonn',
  ];

  dataCenterOptions = this.dataCenterList.map((center, index) => (
    <option key={index}>{center}</option>
  ));

  renderDataCenterSelector = ({ input, meta: { touched, error } }) => (
    <div className="form-group">
      <select className="form-control" {...input}>
        {this.dataCenterOptions}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  );

  // TODO:  Maybe a connection to store/reducer is needed
  // TODO: get List of Datacenters dynamically
  render() {
    return (
      <div>
        <header className="header header-left form-header-top">
          <h2 className="section-title">Target Datacenter</h2>
          <p className="section-subtitle">(optional)</p>
        </header>
        <Field name="dataCenter" component={this.renderDataCenterSelector} />
      </div>
    );
  }
}

TargetDataCenterForm.propTypes = {};

export default TargetDataCenterForm;
