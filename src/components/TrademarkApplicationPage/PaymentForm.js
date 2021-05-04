import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    TextField,
    Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export default function PaymentForm({
    navigation,
    info,
    setInfo,
    inputValidationValue,
    setPristine,
}) {
    const classes = useStyles();

    const handleMirrorUserAddress = () => {
        setInfo({
            ...info,
            billingAddressSameAsUser: !info.billingAddressSameAsUser,
            billingAddressStreet: info.billingAddressSameAsUser
                ? ''
                : info.userStreetAddress,
            billingAddressCity: info.billingAddressSameAsUser
                ? ''
                : info.userCity,
            billingAddressProvince: info.billingAddressSameAsUser
                ? ''
                : info.userProvince,
            billingAddressPostalCode: info.billingAddressSameAsUser
                ? ''
                : info.userPostalCode,
            billingAddressCountry: info.billingAddressSameAsUser
                ? ''
                : info.userCountry,
        });
    };

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
                    value={info.paymentCardholderName}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            paymentCardholderName: e.target.value,
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
                    value={info.paymentCreditCardNumber}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            paymentCreditCardNumber: e.target.value,
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
                    value={info.paymentCardExpiryDate}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            paymentCardExpiryDate: e.target.value,
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
                    value={info.paymentCardCVV}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            paymentCardCVV: e.target.value,
                        })
                    }
                />
            </div>
            {inputValidationValue?.paymentCardInfo ? (
                <CheckCircleOutlinedIcon className={classes.checkmark} />
            ) : (
                <ErrorOutlineIcon className={classes.checkmark} />
            )}

            {/* ////////////////////////////////////// Billing Addres ////////////////////////////////////////////*/}
            <Typography className={classes.text} component="p">
                Billing Addres
            </Typography>

            <FormControl fullWidth={true}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={info.billingAddressSameAsUser}
                            onChange={() => handleMirrorUserAddress()}
                        />
                    }
                    label="Same as Applicant Address (from a few steps ago)"
                />
                <TextField
                    id="outlined-basic"
                    label="Street Address"
                    variant="outlined"
                    size="small"
                    className={classes.input}
                    type="text"
                    value={info.billingAddressStreet}
                    autoComplete="on"
                    disabled={info.billingAddressSameAsUser}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            billingAddressStreet: e.target.value,
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
                    value={info.billingAddressCity}
                    autoComplete="on"
                    disabled={info.billingAddressSameAsUser}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            billingAddressCity: e.target.value,
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
                    value={info.billingAddressProvince}
                    autoComplete="on"
                    disabled={info.billingAddressSameAsUser}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            billingAddressProvince: e.target.value,
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
                    value={info.billingAddressPostalCode}
                    autoComplete="on"
                    disabled={info.billingAddressSameAsUser}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            billingAddressPostalCode: e.target.value,
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
                    value={info.billingAddressCountry}
                    autoComplete="on"
                    disabled={info.billingAddressSameAsUser}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            billingAddressCountry: e.target.value,
                        })
                    }
                />
                {inputValidationValue?.billingAddress ? (
                    <CheckCircleOutlinedIcon className={classes.checkmark} />
                ) : (
                    <ErrorOutlineIcon className={classes.checkmark} />
                )}
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
                    onClick={() => {
                        setInfo({
                            ...info,
                            paymentConfirmaed: true,
                        });
                        navigation.next();
                        setPristine();
                    }}
                >
                    Confirm Payment
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
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 5% 4% 5%',
        },
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
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginTop: '10%',
        marginLeft: '3%',
        width: '40%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 5% 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '6% 3% 0% 0',
        },
    },
    backButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        marginTop: '10%',
        width: '40%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.up('md')]: {
            margin: '5% 3% 5% 0',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '6% 3% 0% 0',
        },
    },
    alert: {
        color: '#2a9df4',
        marginTop: '10%',
        fontSize: '12px',
        [theme.breakpoints.up('sm')]: {
            marginTop: '5%',
        },
    },
}));
