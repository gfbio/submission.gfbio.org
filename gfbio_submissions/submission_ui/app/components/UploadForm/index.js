/**
 *
 * UploadForm
 *
 */

import React from 'react';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { makeSelectFileUploads } from '../../containers/SubmissionForm/selectors';
import {
  addFileUpload,
  removeFileUpload,
} from '../../containers/SubmissionForm/actions';
import { connect } from 'react-redux';
import { compose } from 'redux';
import FileIndicator from './FileIndicator';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class UploadForm extends React.PureComponent {

  onDrop = (acceptedFiles, rejectedFiles) => {
    console.log('DrOP');
    console.log('acceptedFiles');
    // TODO: accepted files will become list of files scheduled for upload, remove etc
    console.log(acceptedFiles);
    console.log('rejectedFiles');
    console.log(rejectedFiles);
    const fileIndicators = acceptedFiles.map((file, index) => {
      return <FileIndicator
        key={index}
        index={index}
        fileName={file.name}
        fileSize={file.size}
        fileType={file.type}
        handleRemove={this.props.handleRemove}
      />;
    });
    this.props.handleDrop(fileIndicators);
    //  upload example
    // this.props.onUpload(acceptedFiles[0]);
  };

  render() {

    console.log('UPLOAD FORM RENDER: fileUploads');
    console.log(this.props.fileUploads);
    console.log('--------------------------');

    // TODO: needs different styling
    // TODO: needs different position
    // TODO: accordion style for no. of file over X ?
    // const fileUploadSchedule = this.props.fileUploads.map((file, index) => {
    //   return <FileIndicator
    //     key={index}
    //     index={index}
    //     fileName={file.name}
    //     fileSize={file.size}
    //     fileType={file.type}
    //     handleRemove={this.props.handleRemove}
    //   />;
    // });

    return (
      <div>
        <header className="header header-left form-header-top">
          <h2 className="section-title">Upload Data</h2>
          <p className="section-subtitle">(optional)</p>
        </header>
        <ul className="list-group list-group-flush">
          {/*{fileUploadSchedule}*/}
          {this.props.fileUploads}
        </ul>
        <div className="form-group">
          <Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps, isDragActive }) => (
              <div
                {...getRootProps()}
                className={classNames('dropzone', {
                  'dropzone--isActive': isDragActive,
                })}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop files here...</p>
                ) : (
                  <p>
                    Try <b>dropping</b> some files here, or <b>click</b> to
                    select files to upload.
                  </p>
                )}
              </div>
            )}
          </Dropzone>
          {/*<progress value={this.props.progress} />*/}
        </div>
      </div>
    );
  }
}

UploadForm.propTypes = {
  fileUploads: PropTypes.array,
  handleDrop: PropTypes.func,
  handleRemove: PropTypes.func,
  // upload example
  // progress: PropTypes.number,
  // onUpload: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  fileUploads: makeSelectFileUploads(),
  // progress: makeSelectProgress(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleDrop: value => dispatch(addFileUpload(value)),
    handleRemove: index => dispatch(removeFileUpload(index)),
    // onUpload: file => dispatch(uploadRequest(file)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UploadForm);

