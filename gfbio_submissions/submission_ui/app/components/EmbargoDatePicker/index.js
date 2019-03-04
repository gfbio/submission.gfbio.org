/**
 *
 * EmbargoDatePicker
 *
 */

import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import ButtonInput from './ButtonInput';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class EmbargoDatePicker extends React.Component {
  render() {
    return (
      <div>
        <header className="header header-left form-header-top">
          <h2 className="section-title">Set Embargo</h2>
          <p className="section-subtitle" />
        </header>
        <DatePicker
          customInput={
            <ButtonInput
              cssClassName="btn btn-secondary btn-block btn-light-blue"
              iconClassName="fa fa-calendar"
              text="Set Embargo"
            />
          }
          inline
          selected={this.props.embargoDate}
          onChange={this.props.onChange}
          dateFormat="MMMM d, yyyy"
        />
      </div>
    );
  }
}

EmbargoDatePicker.propTypes = {
  embargoDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

export default EmbargoDatePicker;
