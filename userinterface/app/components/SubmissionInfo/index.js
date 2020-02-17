/**
 *
 * SubmissionInfo
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { JIRA_ROOT } from '../../globalConstants';

// import styled from 'styled-components';

function SubmissionInfo(props) {

  let listItems = [];
  const mailToLink = `mailto:info@gfbio.org?subject=Help with Submission ${props.brokerSubmissionId}&body=Dear GFBio Team,`;
  if (props.brokerSubmissionId.length > 0) {
    listItems.push(
      [
        <li className="list-group-item">
          <a>
            <i className="fa fa-bookmark-o" aria-hidden="true"></i>Submission
            Id: <br />
            <div className="bsi">{props.brokerSubmissionId}</div>
          </a>
        </li>,
      ],
    );
  }

  if (props.accessionId && props.accessionId.length > 0) {
    listItems.push(
      <li className="list-group-item">
        <a>
          <i className="fa fa-archive" aria-hidden="true"></i>ENA Accession:<br />
          <div className="bsi">{props.accessionId}</div>
        </a>
      </li>,
    );
  }

  if (props.issue.length > 0) {
    listItems.push(
      <li className="list-group-item">
        <a target="_blank" rel="noopener noreferrer" className="external"
           href={JIRA_ROOT + props.issue}>
          <i className="fa fa-tags" aria-hidden="true"></i>Ticket:<br />
          <div className="bsi">{props.issue}</div>
        </a>
      </li>,
    );
  }

  // Add Help link at the bottom of the box
  listItems.push(
    <li className="list-group-item">
      <a
        href={mailToLink}
        className="external">
        <i className="fa fa-comments" aria-hidden="true"></i>
        Do you need Help ?
      </a>
    </li>,
  );

  return (
    <div className="">
      <header className="header header-left form-header-top">
        <h2 className="section-title">Info</h2>
        <p className="section-subtitle" />
      </header>
      <div className="submission-info">
        <ul className="list-group list-group-flush">
          {listItems}


        </ul>
      </div>
    </div>
  );
  // return null;
}

SubmissionInfo.propTypes = {
  brokerSubmissionId: PropTypes.string,
  accessionId: PropTypes.string,
  issue: PropTypes.string,
};

export default SubmissionInfo;
