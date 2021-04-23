import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    FormControl,
    Card,
    Typography,
    TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

export default function PaymentForm() {
    const classes = useStyles();
    const history = useHistory();

    //handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        alert('Successfully Confirm ');
    };

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <Typography className={classes.title} component="p">
                    Confirm Your Information
                </Typography>
                {/* ////////////////////////////////////// Payment info ////////////////////////////////////////////*/}
                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        First Name
                    </Typography>
                    <Typography className={classes.text} component="p">
                        John
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Last Name
                    </Typography>
                    <Typography className={classes.text} component="p">
                        Doe
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Street Address
                    </Typography>
                    <Typography className={classes.text} component="p">
                        555 Happy Road
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        City
                    </Typography>
                    <Typography className={classes.text} component="p">
                        Vancouver
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Province
                    </Typography>
                    <Typography className={classes.text} component="p">
                        BC
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Country
                    </Typography>
                    <Typography className={classes.text} component="p">
                        Canada
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Postal Code
                    </Typography>
                    <Typography className={classes.text} component="p">
                        V6K 5Q8
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Email
                    </Typography>
                    <Typography className={classes.text} component="p">
                        John@checkmark.com
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Trademark Types
                    </Typography>
                    <Typography className={classes.text} component="p">
                        Standard Characters
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Classes Selected
                    </Typography>
                    <Typography className={classes.text} component="p">
                        Class: 11,13
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Terms Selected
                    </Typography>
                    <Typography className={classes.text} component="p">
                        water softening units
                    </Typography>
                </div>

                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Filed in other country
                    </Typography>
                    <Typography className={classes.text} component="p">
                        No
                    </Typography>
                </div>

                <Alert severity="info" className={classes.alert}>
                    Helper section with brief legal information, assisting the
                    client through the process.
                </Alert>
                <div className={classes.buttonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSubmit}
                        className={classes.completeButton}
                    >
                        Confirm and go to payment
                    </Button>
                </div>
            </Card>
        </div>
    );
}
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5%',
    },
    card: {
        padding: '2%',
        width: '80%',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#df3a48',
        marginBottom: '5%',
    },
    textContainer: {
        display: 'flex',
    },
    subtitle: {
        color: '#808080',
        fontSize: '12px',
        margin: '2%',
        width: '40%',
        fontWeight: 'bold',
        // [theme.breakpoints.between('sm', 'md')]: {
        //     fontSize: '15px',
        //     width: '20%',
        // },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: '15px',
        //     width: '20%',
        // },
        // [theme.breakpoints.up('sm')]: {
        //     fontSize: '15px',
        //     width: '20%',
        // },
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '15px',
            width: '25%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '15px',
            width: '20%',
        },
    },
    text: {
        color: '#black',
        fontSize: '12px',
        margin: '2%',
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
        },
    },
    buttonContainer: {
        display: 'flex',
        margin: '3%',
    },
    completeButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        width: '50%',
        height: '30px',
        fontSize: '8px',
        margin: '3% auto',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.up('sm')]: {
            fontSize: '10px',
            width: '40%',
        },
    },
    alert: {
        width: '80%',
        margin: '3% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
