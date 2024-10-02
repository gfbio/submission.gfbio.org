# -*- coding: utf-8 -*-
import logging

from config.celery_app import app
from ...configuration.settings import SUBMISSION_MAX_RETRIES, SUBMISSION_RETRY_DELAY
from ...exceptions.transfer_exceptions import TransferServerError, TransferClientError
from ...models.submission import Submission
from ...models.abcd_conversion_result import AbcdConversionResult
from ...models.submission_upload import SubmissionUpload
from ...tasks.submission_task import SubmissionTask

from abcd_converter_gfbio_org import abcd_conversion, handlers, file_validation

logger = logging.getLogger(__name__)


@app.task(
    base=SubmissionTask,
    bind=True,
    name="tasks.atax_run_combination_task",
    autoretry_for=(TransferServerError, TransferClientError),
    retry_kwargs={"max_retries": SUBMISSION_MAX_RETRIES},
    retry_backoff=SUBMISSION_RETRY_DELAY,
    retry_jitter=True,
)
def atax_run_combination_task(
    self,
    previous_task_result=None,
    submission_id=None,
):
    logger.info(
        "tasks.py | atax_run_combination_task"
    )
    submission = Submission.objects.get(pk=submission_id)
    submission_upload_files = SubmissionUpload.objects.filter(submission_id=submission_id)

    spec_file = submission_upload_files.filter(file__icontains="specimen").first()
    measurements_file = submission_upload_files.filter(file__icontains="measurement").first()
    multimedia_file = submission_upload_files.filter(file__icontains="multimedia").first()

    if not spec_file or not measurements_file or not multimedia_file:
        AbcdConversionResult.objects.create(
            submission = submission,
            atax_xml_valid = False,
            xml = "",
            errors = "No files found.",
            warnings = "",
            logs = "",
        )
        return False

    error_handler = ToFieldOutputter()
    handlings = handlers.InOutHandler()
    handlings.dataProvider = DataFromSubmissionProvider(submission)
    handlings.resultFileHandler = ToFieldOutputter()
    handlings.errorHandler = error_handler
    handlings.warning_handler = ToFieldOutputter()
    handlings.logHandler = ToFieldOutputter()
    handlings.singleFileHandler = ToFieldOutputter()
    handlings.multimedia_validator = SubmissionMultimediaFileValidator(submission.id, handlings)

    atax_xml_valid = False
    try:
        xml = abcd_conversion.convert_csv_to_abcd(spec_file.file.path, measurements_file.file.path, multimedia_file.file.path, handlings)
        atax_xml_valid = True if xml else False

        AbcdConversionResult.objects.create(
            submission = submission,
            atax_xml_valid = atax_xml_valid,
            xml = handlings.resultFileHandler.result[0]["content"],
            errors = error_handler.result,
            warnings = handlings.warning_handler.result,
            logs = handlings.logHandler.result,
        )
    except Exception as exc:
        error_handler.result.append(exc.with_traceback(None))

        AbcdConversionResult.objects.create(
            submission = submission,
            atax_xml_valid = False,
            xml = handlings.resultFileHandler.result[0]["content"] if len(handlings.resultFileHandler.result) > 0 else "",
            errors = error_handler.result,
            warnings = handlings.warning_handler.result,
            logs = handlings.logHandler.result,
        )


    return atax_xml_valid


class ToFieldOutputter(handlers.Outputter):
    def __init__(self):
        self.result = []

    def handle(self, description, content):
        self.result.append({ "description": description, "content": content })


class DataFromSubmissionProvider(handlers.DataProvider):
    def __init__(self, submission):
        self.submission = submission
        
    def get_user_username(self):
        return self.submission.user.username

    def get_user_email(self):
        return self.submission.user.email

    def get_created_date(self):
        return self.submission.created.strftime("%Y-%m-%dT%H:%M:%S")


class SubmissionMultimediaFileValidator(file_validation.MultimediaFileValidatorInterface):
    def __init__(self, submission_id, io_handler):
        self.io_handler = io_handler
        submission_upload_list = list(SubmissionUpload.objects.filter(submission_id=submission_id).values_list("file", flat=True).all())
        self.submission_upload_list = [entry.split("/")[1] for entry in submission_upload_list]
        self.file_extensions = file_validation.FILE_EXTENSIONS
        self.file_extensions["image"].append("tif")

    def validate(self, file_name, format, row):
        if not file_name:
            self.io_handler.warning_handler.handle(f"File in row {row} has no name.", { "file": "multimedia", "row": row, "message": "File has no name"})
            return

        if not format:
            self.io_handler.warning_handler.handle(f"File in row {row} has no format.", { "file": "multimedia", "row": row, "message": "File has no format"})
        else:
            file_extension = file_name.rsplit(".")[1]
            if (format.lower() not in self.file_extensions and format.lower() != file_extension.lower()) or (format.lower() in self.file_extensions and file_extension.lower() not in self.file_extensions[format.lower()]):
                msg = f"File extension '{file_extension}' of {file_name} may not match the format description '{format}'."
                self.io_handler.warning_handler.handle(msg, { "file": "multimedia", "row": row, "message": "Unrecognized file extension"})

        if not file_name.replace(" ", "_") in self.submission_upload_list:
            msg = f"File {file_name} in row {row} is missing it's corresponding file in the upload."
            self.io_handler.errorHandler.handle(msg, { "file": "multimedia", "row": row, "message": "File not found"})
