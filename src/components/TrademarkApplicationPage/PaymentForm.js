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

export default function PaymentForm({ navigation }) {
    const classes = useStyles();

    const [creditCardInfo, setCreditCardInfo] = useState({
        cardholderName: '',
        creditcardNumber: '',
        expiryDate: '',
        CVV: '',
        streetAddress: '',
        city: '',
        province: '',
        postalCode: '',
        country: '',
    });

    return (
        <Card className={classes.card}>
            <h1 className={classes.title}> Place a Trust Payment</h1>
            {/* ////////////////////////////////////// Credit Card ////////////////////////////////////////////*/}
            <Typography className={classes.text} component="p">
                Credit Card
            </Typography>
            <FormControl fullWidth={true}>
                <TextField
                    id="outlined-basic"
                    label="Cardholder Name"
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    type="text"
                    value={creditCardInfo.cardholderName}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            cardholderName: e.target.value,
                        })
                    }
                />
            </FormControl>
            <FormControl fullWidth={true}>
                <TextField
                    id="outlined-basic"
                    label="Credit Card Number"
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    type="text"
                    value={creditCardInfo.creditcardNumber}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            creditcardNumber: e.target.value,
                        })
                    }
                />
            </FormControl>
            <div className={classes.flexContainer}>
                <TextField
                    id="outlined-basic"
                    label="Expiry Date (MM/YY)"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    value={creditCardInfo.expiryDate}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            expiryDate: e.target.value,
                        })
                    }
                />

                <TextField
                    id="outlined-basic"
                    label="CVV"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    value={creditCardInfo.CVV}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            CVV: e.target.value,
                        })
                    }
                />
            </div>
            {/* ////////////////////////////////////// Billing Addres ////////////////////////////////////////////*/}
            <Typography className={classes.text} component="p">
                Billing Addres
            </Typography>
            <FormControl fullWidth={true}>
                <TextField
                    id="outlined-basic"
                    label="Street Address"
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    type="text"
                    value={creditCardInfo.streetAddress}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            streetAddress: e.target.value,
                        })
                    }
                />
            </FormControl>
            <div className={classes.flexContainer}>
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    value={creditCardInfo.city}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            city: e.target.value,
                        })
                    }
                />
                <TextField
                    id="outlined-basic"
                    label="Province"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    value={creditCardInfo.province}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            province: e.target.value,
                        })
                    }
                />
            </div>
            <div className={classes.flexContainer}>
                <TextField
                    id="outlined-basic"
                    label="Postal Code"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    value={creditCardInfo.postalCode}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            postalCode: e.target.value,
                        })
                    }
                />

                <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    value={creditCardInfo.country}
                    autoComplete="on"
                    onChange={(e) =>
                        setCreditCardInfo({
                            ...creditCardInfo,
                            country: e.target.value,
                        })
                    }
                />
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
        padding: '2%',
        margin: '3%',
        width: '75%',
    },
    title: {
        color: '#df3a48',
        marginBottom: '5%',
    },
    text: {
        color: '#808080',
        fontSize: '12px',
        margin: '3%',
        fontWeight: 'bold',
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
            marginBottom: '1%',
        },
    },
    input: {
        width: '80%',
        margin: '3% auto',
        borderRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            margin: '2% auto',
        },
    },
    flexInput: {
        width: '80%',
        margin: '3%',
        borderRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            width: '38%',
            margin: '2%',
        },
    },
    flexContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            width: '100%',
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
