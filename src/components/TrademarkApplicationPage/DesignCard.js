import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';

const LogoForm = () => {
    const classes = useStyles();
    return (
        <div className={classes.logoCard} fullwidth>
            <div>
                <p style={{ color: '#DF3A48' }}>Select a file to upload</p>
                <Button className={classes.browseButton}>Choose File</Button>
            </div>
            <Alert severity="info" className={classes.alert}>
                Single image file should be under 2MB
            </Alert>
        </div>
    );
};

export default LogoForm;
const useStyles = makeStyles((theme) => ({
    alert: {
        color: '#2a9df4',
        fontSize: '13px',
        margin: '3% auto',
    },
    logoCard: {
        width: '90%',
        margin: 'auto',
        marginBottom: '3%',
    },
    browseButton: {
        backgroundColor: '#DF3A48',
        color: '#FFF',
        width: '20%',
        height: '30px',
        fontWeight: 'bold',
        fontSize: '10px',
        borderRadius: '10px',
        border: 'none',
        margin: 'auto',
        [theme.breakpoints.down('xs')]: {
            margin: '2% auto 5% auto',
            width: '40%',
            fontSize: '10px',
        },
    },
}));
