import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import React from 'react';

const FileUpload = () => {
    const [fileName, setFileName] = useState('');
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const fileInput = useRef(null);

    useEffect(() => {
        if (fileName) {
            setUploadedFileName(fileName);
        } else {
            setFileName(fileName);
        }
    }, []);

    // Checks the file size and sets the image url preview.
    const handleUploadImage = (event) => {
        if (checkFileSize(event)) {
            setErrorMessage(errorMessage);
            // this.props.oldState.file = URL.createObjectURL(
            //     event.target.files[0]
            // );
            return true;
        }
        return false;
    };

    const checkFileSize = (event) => {
        let files = event.target.files[0];
        let size = 2000000; //2Mb File Limit
        let err = '';
        if (files == null) {
            return false;
        }
        if (files.size > size) {
            err += files.name + ' is too large, please pick a smaller file\n';
        }
        if (err !== '') {
            event.target.value = null;
            setErrorMessage(err);
            return false;
        }
        return true;
    };
    // This handler is activated when the button is clicked. After calling handleUploadImage() it posts the image to the backend database for temporary storage.
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleUploadImage(event)) {
            const formData = new FormData();
            formData.append('FileToUpload', fileInput.current.files[0]);
            const options = {
                method: 'POST',
                body: formData,
            };
            const response = await fetch(
                'https://localhost:5001/api/files',
                options
            )
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    // this.props.handler('fileName', data.filename);
                    setFileName(data.fileName);
                });
        }
    };
    return (
        <div>
            <form>
                <p>
                    Select File to Upload{' '}
                    <span className="finePrint">
                        (single image file under 2MB):
                    </span>
                </p>
                <Button
                    variant="contained"
                    component="label"
                    color="primary"
                    onChange={handleSubmit}
                >
                    Choose File
                    <input
                        encType="multipart/form-data"
                        accept="image/* "
                        type="file"
                        ref={fileInput}
                        style={{ display: 'none' }}
                    />
                </Button>
                {fileName && <p>Currently using {fileName}</p>}
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                <p>{uploadedFileName}</p>
                <p className="finePrint">
                    If you wish to use more than one file, or a larger one,
                    please follow up with the confirmation email sent at the end
                    of the form.
                </p>
            </form>
        </div>
    );
};
export default FileUpload;
