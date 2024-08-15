import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Dropzone } from "@mantine/dropzone";
import { Center, Text } from "@mantine/core";
import UploadMessage from "../../utils/UploadMessage.jsx";
import FileIndicator from "../../utils/FileIndicator.jsx";
import { MAX_TOTAL_UPLOAD_SIZE, MAX_UPLOAD_ITEMS } from "../../settings.jsx";
import getSubmissionUploads from "../../api/getSubmissionUploads";

const DropzoneUpload = (props) => {
    const {
        title,
        description,
        form,
        field_id,
        onFilesChange,
        token,
        onDeleteServerFile,
        onMetadataSelectServerFile,
    } = props;

    const [metadataIndex, setMetadataIndex] = useState(-1);
    const [localFiles, setLocalFiles] = useState(form.values.files || []);
    const [filesFromServer, setFilesFromServer] = useState([]);

    useEffect(() => {
        const fetchServerFiles = async () => {
            try {
                const submission = JSON.parse(localStorage.getItem("submission"));
                const brokerSubmissionId = submission.broker_submission_id || "";
                const serverFileData = await getSubmissionUploads(brokerSubmissionId);
                console.log("Server file data retrieved:", serverFileData);
                setFilesFromServer(serverFileData);
                form.setFieldValue("serverFiles", serverFileData);
            } catch (error) {
                console.error("Error fetching server files:", error);
            }
        };

        fetchServerFiles();
    }, [token]);

    const handleMetadataSelect = (index) => {
        const newMetadataIndex = metadataIndex === index ? -1 : index;
        setMetadataIndex(newMetadataIndex);
        onFilesChange(localFiles, showUploadLimitMessage, newMetadataIndex);
    };

    const handleMetadataSelectServerFile = (index, file) => {
        onMetadataSelectServerFile(index, file);
    };

    const matchingUploadLimit = (files) => {
        let tmpTotalSize = 0;
        for (let file of files) {
            tmpTotalSize += file.size;
        }
        return (
            tmpTotalSize <= MAX_TOTAL_UPLOAD_SIZE && files.length <= MAX_UPLOAD_ITEMS
        );
    };

    const [showUploadLimitMessage, setShowUploadLimitMessage] = useState(() => {
        return !matchingUploadLimit(localFiles);
    });

    useEffect(() => {
        setShowUploadLimitMessage(!matchingUploadLimit(localFiles));
    }, [localFiles]);

    const onDrop = (files) => {
        const updatedFiles = [...localFiles, ...files];
        setLocalFiles(updatedFiles);
        form.setFieldValue("files", updatedFiles);
        const uploadLimitExceeded = !matchingUploadLimit(updatedFiles);
        setShowUploadLimitMessage(uploadLimitExceeded);
        onFilesChange(updatedFiles, uploadLimitExceeded, metadataIndex);
    };

    const removeFile = (index) => {
        const updatedFiles = localFiles.filter((_, i) => i !== index);
        let newMetadataIndex = metadataIndex;

        if (metadataIndex === index) {
            newMetadataIndex = -1; // Reset metadata index if the metadata file is removed
        } else if (metadataIndex > index) {
            newMetadataIndex = metadataIndex - 1; // Adjust metadata index if necessary
        }
        setLocalFiles(updatedFiles);
        setMetadataIndex(newMetadataIndex);
        form.setFieldValue("files", updatedFiles);
        const uploadLimitExceeded = !matchingUploadLimit(updatedFiles);
        setShowUploadLimitMessage(uploadLimitExceeded);
        onFilesChange(updatedFiles, uploadLimitExceeded, newMetadataIndex);
    };

    return (
        <div className="file-upload">
            <div>
                <h2>{title}</h2>
                <Text>{description}</Text>
            </div>

            <FileIndicator
                fileUploads={localFiles}
                fileUploadsFromServer={filesFromServer}
                handleRemove={removeFile}
                deleteFile={onDeleteServerFile}
                metadataIndex={metadataIndex}
                handleMetadataSelect={handleMetadataSelect}
                changeMetaDataOnServer={handleMetadataSelectServerFile}
            />

            <UploadMessage showUploadLimitMessage={showUploadLimitMessage} />

            <Dropzone h={120} p={0} multiple onDrop={onDrop}>
                <Center h={120}>
                    <Dropzone.Idle>
                        Try <b>dropping</b> some files here, or <b>click</b> to select files
                        to upload.
                    </Dropzone.Idle>
                    <Dropzone.Accept>Drop files here...</Dropzone.Accept>
                    <Dropzone.Reject>Files are invalid</Dropzone.Reject>
                </Center>
            </Dropzone>

            {form.errors.files && (
                <Text c="red" mt={5}>
                    {form.errors.files}
                </Text>
            )}
        </div>
    );
};

DropzoneUpload.defaultProps = {
    serverFiles: [],
};

DropzoneUpload.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    form: PropTypes.object.isRequired,
    field_id: PropTypes.string.isRequired,
    onFilesChange: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    brokerSubmissionId: PropTypes.string.isRequired,
    serverFiles: PropTypes.array,
    onDeleteServerFile: PropTypes.func.isRequired,
    onMetadataSelectServerFile: PropTypes.func.isRequired,
};

export default DropzoneUpload;
