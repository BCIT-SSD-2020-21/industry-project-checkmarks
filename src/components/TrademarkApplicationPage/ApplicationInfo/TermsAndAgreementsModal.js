import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';

const TermsAndAgreementsModal = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <h1 id="transition-modal-title">Terms and Agreements</h1>
                    <h2>Electronic Communications</h2>
                    <p id="transition-modal-description">
                        <p>
                            When you contact us, you consent to receive
                            communications from us electronically. We will
                            communicate with you by email (if and to the extent
                            you choose to provide with your e-mail address) or
                            by posting notices on this Site. You agree that all
                            agreements, notices, disclosures and other
                            communications that we provide to you electronically
                            satisfy any legal requirement that such
                            communications be in writing.
                        </p>

                        <h2>Privacy Policy</h2>
                        <p>
                            Information that we collect and use about you is
                            subject to our Privacy Policy located at
                            https://www.checkmarx.com/privacy-policy. By
                            accessing this Site you consent to the collection
                            and use of information as described in our Privacy
                            Policy, as may be amended by us from time to time.
                        </p>
                    </p>
                </div>
            </Fade>
        </Modal>
    );
};

export default TermsAndAgreementsModal;

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
