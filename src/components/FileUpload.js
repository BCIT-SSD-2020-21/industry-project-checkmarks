import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import React from 'react';

const FileUpload = () => {
    const [fileUpload, setFileUpload] = useState({
        fileName: '',
        uploadedFileName: '',
        errorMessage: '',
    });

    // constructor(props) {
    //     super(props);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.handleUploadImage = this.handleUploadImage.bind(this);
    //     this.fileInput = React.createRef();

    //     this.state = {
    //         fileName: '',
    //         uploadedFileName: '',
    //         errorMessage: '',
    //     };
    // }

    // use effect

    // componentDidMount() {
    //     if (this.state.fileName) {
    //         this.setState({
    //             uploadedFileName: this.props.values.values.fileName,
    //         });
    //     } else {
    //         this.setState({
    //             fileName: this.props.values.values.fileName,
    //         });
    //     }
    // }
    // Checks the file size and sets the image url preview.

    // handleUploadImage(event) {
    //     if (this.checkFileSize(event)) {
    //         this.setState({
    //             errorMessage: '',
    //         });
    //         this.props.oldState.file = URL.createObjectURL(
    //             event.target.files[0]
    //         );
    //         return true;
    //     }
    //     return false;
    // }
    const handleUploadImage = async (e) => {
        e.preventDefault();

        checkFileSize = (event) => {
            let files = event.target.files[0];
            let size = 2000000; //2Mb File Limit
            let err = '';
            if (files == null) {
                return false;
            }
            if (files.size > size) {
                err +=
                    files.name + ' is too large, please pick a smaller file\n';
            }
            if (err !== '') {
                event.target.value = null;
                this.setState({ errorMessage: err });
                return false;
            }
            return true;
        };
    };

    // This handler is activated when the button is clicked. After calling handleUploadImage() it posts the image to the backend database for temporary storage.
    // async handleSubmit(event) {
    //     event.preventDefault();

    //     if (this.handleUploadImage(event)) {
    //         const formData = new FormData();

    //         formData.append('FileToUpload', this.fileInput.current.files[0]);

    //         const options = {
    //             method: 'POST',
    //             body: formData,
    //         };

    //         const response = await fetch(
    //             this.props.values.values.checkmarksApiUrl + 'files',
    //             options
    //         )
    //             .then((res) => {
    //                 return res.json();
    //             })
    //             .then((data) => {
    //                 this.props.handler('fileName', data.filename);

    //                 this.setState({
    //                     fileName: data.filename,
    //                 });
    //             });
    //     }
    //}
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
                    onChange={this.handleSubmit}
                >
                    Choose File
                    <input
                        encType="multipart/form-data"
                        accept="image/* "
                        type="file"
                        ref={this.fileInput}
                        style={{ display: 'none' }}
                    />
                </Button>
                {this.state.fileName && (
                    <p>Currently using {this.state.fileName}</p>
                )}
                {this.state.errorMessage && (
                    <p className="errorMessage">{this.state.errorMessage}</p>
                )}
                <p>{this.state.uploadedFileName}</p>
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
