/**
 *
 * CommentForm
 *
 */

import React from 'react';
import { Field } from 'redux-form/lib/immutable';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class CommentForm extends React.PureComponent {
  render() {
    return (
      <div>
        <header className="header header-left form-header-top">
          <h2 className="section-title">Add a comment</h2>
          <p className="section-subtitle">(optional)</p>
        </header>
        <div className="form-group">
          <Field
            name="comment"
            className="form-control"
            component="textarea"
            rows="7"
            placeholder="Enter a comment"
          />
        </div>
      </div>
    );
  }
}

CommentForm.propTypes = {};

export default CommentForm;
