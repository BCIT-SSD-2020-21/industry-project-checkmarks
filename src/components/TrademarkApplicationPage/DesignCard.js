import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';

const LogoForm = () => {
    const classes = useStyles();
    return (
        <Card className={classes.logoCard} fullwidth>
            <div>
                <p style={{ color: 'red' }}>Select a file to upload</p>
                <button className={classes.browseButton}>Choose File</button>
            </div>
            <Alert severity="info" className={classes.alert}>
                Single image file should be under 2MB
            </Alert>
        </Card>
    );
};

export default LogoForm;
const useStyles = makeStyles((theme) => ({
    alert: {
        margin: ' auto',
        color: '#2a9df4',
        fontSize: '13px',
        marginBottom: '3%',
    },
    logoCard: {
        width: '90%',
        margin: 'auto',
        marginBottom: '3%',
    },
    browseButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        marginTop: '3%',
        marginBottom: '3%',

        fontWeight: 'bold',
        borderRadius: '30px',
    },
}));
