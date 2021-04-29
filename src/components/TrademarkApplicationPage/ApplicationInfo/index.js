import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import ApplicationForm from './ApplicationForm';

export default function ApplicationInfo({ navigation }) {
    const classes = useStyles();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        organizationName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    return (
        <Card className={classes.card}>
            <h1 className={classes.title}> Application Information</h1>
            <Typography>
                Are you registering as an{' '}
                <span style={{ color: '#DF3A48' }}>
                    <strong>individual </strong>{' '}
                </span>
                , or representing an{' '}
                <span style={{ color: '#DF3A48' }}>
                    <strong>organization </strong>{' '}
                </span>
                ?
            </Typography>

            <div className={classes.formContainer}>
                <ApplicationForm
                    user={user}
                    setUser={setUser}
                    navigation={navigation}
                />
            </div>
        </Card>
    );
}
const useStyles = makeStyles((theme) => ({
    card: {
        margin: '3%',
        width: '70%',
        border: '1px solid #696969',
        padding: '0 5% 5% 5%',
        [theme.breakpoints.up('md')]: {
            width: '60%',
            padding: '0 2% ',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 5% 2% 5%',
        },
    },
    formContainer: {
        marginTop: '5%',
    },
    title: {
        color: '#df3a48',
        marginBottom: '5%',
    },
    question: {
        marginTop: '5%',
        fontSize: '15px',
        textAlign: 'center',
    },
}));
