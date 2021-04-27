import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, Typography } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

export default function PaymentForm({ navigation }) {
    const classes = useStyles();

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
                    onClick={() => navigation.previous()}
                >
                    Back
                </Button>
                <Button
                    className={classes.continueButton}
                    type="submit"
                    variant="contained"
                    onClick={() => navigation.next()}
                >
                    Continue
                </Button>
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
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        margin: '10% 0 2% 3%',
        width: '30%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 5% 0',
        },
    },
    backButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        margin: '10% 0 2% 0%',
        width: '30%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 5% 0',
        },
    },
    alert: {
        marginTop: '3%',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
