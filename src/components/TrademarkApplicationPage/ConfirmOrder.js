import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

export default function PaymentForm() {
    const classes = useStyles();
    const history = useHistory();

    //handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Successfully Confirm ');
    };

    return (
        <Card className={classes.card}>
            <h1 className={classes.title}>Confirm Your Information</h1>
            {/* ////////////////////////////////////// Payment info ////////////////////////////////////////////*/}

            {/* ////////////////////////////////////// First name ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    First Name
                </Typography>
                <Typography className={classes.text} component="p">
                    John
                </Typography>
            </div>
            {/* ////////////////////////////////////// Last Name ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Last Name
                </Typography>
                <Typography className={classes.text} component="p">
                    Doe
                </Typography>
            </div>
            {/* ////////////////////////////////////// Street Address ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Street Address
                </Typography>
                <Typography className={classes.text} component="p">
                    555 Happy Road
                </Typography>
            </div>
            {/* ////////////////////////////////////// City ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    City
                </Typography>
                <Typography className={classes.text} component="p">
                    Vancouver
                </Typography>
            </div>
            {/* ////////////////////////////////////// Province ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Province
                </Typography>
                <Typography className={classes.text} component="p">
                    BC
                </Typography>
            </div>
            {/* ////////////////////////////////////// Country ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Country
                </Typography>
                <Typography className={classes.text} component="p">
                    Canada
                </Typography>
            </div>
            {/* ////////////////////////////////////// Postal Code ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Postal Code
                </Typography>
                <Typography className={classes.text} component="p">
                    V6K 5Q8
                </Typography>
            </div>
            {/* ////////////////////////////////////// Email ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Email
                </Typography>
                <Typography className={classes.text} component="p">
                    John@checkmark.com
                </Typography>
            </div>
            {/* ////////////////////////////////////// Trademark Types ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Trademark Types
                </Typography>
                <Typography className={classes.text} component="p">
                    Standard Characters
                </Typography>
            </div>
            {/* ////////////////////////////////////// Classes Selected ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Classes Selected
                </Typography>
                <Typography className={classes.text} component="p">
                    Class: 11,13
                </Typography>
            </div>
            {/* ////////////////////////////////////// Terms Selected ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Terms Selected
                </Typography>
                <Typography className={classes.text} component="p">
                    water softening units
                </Typography>
            </div>
            {/* //////////////////////////////////////  Filed in other country  ////////////////////////////////////////////*/}
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
                    className={classes.backButton}
                    // onClick={this.back}
                >
                    Back
                </Button>
                <Button
                    className={classes.continueButton}
                    type="submit"
                    variant="contained"
                    // onClick={this.clickContinue}
                >
                    Continue
                </Button>
            </div>
        </Card>
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
        marginTop: '5%',
        width: '75%',
        padding: '2%',
    },
    title: {
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
        justifyContent: 'center',
        margin: '4% 0',
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginLeft: '1%',
        width: '20%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8px',
        },
    },
    backButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        width: '20%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8px',
        },
    },
    alert: {
        width: '80%',
        margin: '3% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
