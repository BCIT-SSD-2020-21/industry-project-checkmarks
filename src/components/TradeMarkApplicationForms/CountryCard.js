import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import Alert from '@material-ui/lab/Alert';

const CountryCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.countryCard}>
            <p style={{ color: 'red', fontSize: 15 }}>
                Have you filed or applied for this trademark in any other
                country?
            </p>

            <Alert severity="info" className={classes.alert}>
                Helper Section with brief legal information, assisting the
                client through the process
            </Alert>

            <button className={classes.nextButton}>Next Step</button>
        </Card>
    );
};

export default CountryCard;
const useStyles = makeStyles((theme) => ({
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
    countryCard: {
        marginTop: '5%',
        width: '75%',
        margin: 'auto',
    },
    nextButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '40%',
        height: '50px',
        borderRadius: '30px',
        marginBottom: '5%',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '20%',
        },
    },
}));
