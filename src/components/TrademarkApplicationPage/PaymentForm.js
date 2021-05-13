import React, { useState, useRef, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card } from '@material-ui/core';
import { checkmarksTheme } from '../../styles/Themes';
import { createClioContact, createEmail, sendPayment } from '../../network';
import OrderAmount from '../OrderAmount';

export default function PaymentForm({
    navigation,
    step,
    info,
    setInfo,
    currentStep,
    setCurrentStep,
    progressValue,
    validationProgress,
}) {
    const classes = useStyles();

    const formRef = useRef(null);
    const psRef = useRef(null);
    const addressRef = useRef(null);
    const yRef = useRef(null);
    const mRef = useRef(null);
    const nameRef = useRef(null);

    // Error statevar
    const [nameError, setNameError] = useState('');
    const [ccError, setCcError] = useState('');
    const [cvvError, setCcvError] = useState('');
    const [monthError, setMonthError] = useState('');
    const [yearError, setYearError] = useState('');
    const [postalCodeError, setPostalCodeError] = useState('');
    const [addressError, setAddressError] = useState('');

    const [submitting, setSubmitting] = useState(false);

    useLayoutEffect(() => {
        const form = formRef.current;

        let paymentToken = '';

        var ccErrorMessage = 'Credit Card field is required';
        var cvvErrorMessage = 'CVV field is required';

        const cc_hosted_field = {
            selector: '#credit_card_field_id',
            input: {
                type: 'credit_card_number',
                // placeholder: 'credit card number',
                css: {
                    'background-color': 'transparent',
                    'font-family': 'Segoe UI',
                    'font-size': '15px',
                    'border-radius': '5px',
                    padding: '10px',
                    color: 'black',

                    ':invalid': {
                        border: '1px solid red',
                    },
                    border: `1px solid ${checkmarksTheme.textLabel}`,
                },
            },
        };

        const cvv_hosted_field = {
            selector: '#cvv_field_id',
            input: {
                type: 'cvv',
                // placeholder: 'CVV',
                css: {
                    'background-color': 'transparent',
                    'border-radius': '5px',
                    'font-family': 'Segoe UI',
                    'font-size': '15px',
                    padding: '10px',
                    ':invalid': {
                        border: '1px solid red',
                    },
                    border: `1px solid ${checkmarksTheme.textLabel}`,
                },
            },
        };

        const hostedFieldsConfiguration = {
            publicKey: 'm_4Pmy9PJ0T76ip_9W-o6UUA',
            input: {
                css: {
                    borderRadius: '5px',
                    'font-family': 'serif',
                    padding: '10px',
                    'font-size': '22px',
                    'border-radius': '5px',
                    ':invalid': { background: 'antiquewhite' },
                },
            },
            fields: [cc_hosted_field, cvv_hosted_field],
        };

        const hostedFieldsCallBack = function (state) {
            if (state.fields[0].error != '') {
                ccErrorMessage = state.fields[0].error;
            } else {
                ccErrorMessage = '';
            }

            if (state.fields[1].error != '') {
                cvvErrorMessage = state.fields[1].error;
            } else {
                cvvErrorMessage = '';
            }
        };

        const hostedFields = window.AffiniPay.HostedFields.initializeFields(
            hostedFieldsConfiguration,
            hostedFieldsCallBack
        );

        form.onsubmit = function (event) {
            event.preventDefault();
            const nameElement = document.getElementById('cardholder_name');
            const postalCodeElement = document.getElementById('postal_code');
            const expYearElement = document.getElementById('exp_year');
            const expMonthElement = document.getElementById('exp_month');
            const addressElement = document.getElementById('address1');
            const creditCardValidation = document.getElementById(
                'ccValidation'
            );
            const cvvValidation = document.getElementById('cvvValidation');

            creditCardValidation.innerText = ccError;
            cvvValidation.innerText = cvvError;

            if (nameElement.value.length == 0) {
                setNameError('Cardholder Name is required');
            }

            if (expMonthElement.value.length == 0) {
                setMonthError('Expiry Month field is required');
            }

            if (expYearElement.value.length == 0) {
                setYearError('Expiry Year field is required');
            }

            if (ccErrorMessage || cvvErrorMessage) {
                setCcError(ccErrorMessage);
                setCcvError(cvvErrorMessage);
            }

            if (postalCodeElement.value.length == 0) {
                setPostalCodeError('Postal Code field is required');
            }

            if (addressElement.value.length == 0) {
                setAddressError('Billing Street Address is required');
                return;
            }
            hostedFields
                .getPaymentToken({
                    name: nameElement.value,
                    postal_code: postalCodeElement.value,
                    exp_year: expYearElement.value,
                    exp_month: expMonthElement.value,
                    address1: addressElement.value,
                })
                .then((result) => {
                    paymentToken = result.id;
                    setInfo({ ...info, paymentToken: result.id });
                    console.log('result, getPaymentToken: ', result);
                    console.log('paymentForm, paymentToken: ', paymentToken);
                    submitApplication(paymentToken);
                })
                .then(() => {})
                .catch(function (err) {
                    console.log(err);
                });
        };
    }, []);

    //////////////////////////////Create clio account and send email/////////////////////////////////////////////

    // Pass paymentToken
    const submitApplication = async (paymentToken) => {
        setSubmitting(true);
        let responseSendPayment = await sendPayment(info, paymentToken);
        console.log('responseSendPayment: ', responseSendPayment);
        if (responseSendPayment) {
            let matterId = await createClioContact(info);
            console.log('matterId: ', matterId);
            if (matterId) {
                let responseCreateEmail = await createEmail(info, matterId);
                // let responseCreateEmail = true;
                console.log('responseCreateEmail: ', responseCreateEmail);
                if (responseCreateEmail) {
                    setInfo({
                        ...info,
                        paymentConfirmed: true,
                    });
                    nextStep();
                } else {
                    console.log('createEmail() unsuccsessful');
                }
            } else {
                console.log('createClioContact() unsuccsessful');
            }
        } else {
            console.log('sendPayment() unsuccessful');
        }

        setSubmitting(false);
    };

    const previousStep = () => {
        setCurrentStep(currentStep - 1); // assign currentStep to next step
        navigation.previous();
    };
    const nextStep = () => {
        setCurrentStep(currentStep + 1); // assign currentStep to next step
        navigation.next();
    };

    return (
        <Card className={classes.card}>
            <script
                src="https://cdn.affinipay.com/hostedfields/1.1.1/fieldGen_1.1.1.js"
                async
            ></script>
            <h1>Place a Trust Payment</h1>
            <style type="text/css">
                {`

                            form input, form iframe {
                                width: 100%;
                                margin: 5px;
                   
                            }
                        
                            form iframe {
                                border: none;
                                height: 30px;
                            } 
                        `}
            </style>

            <OrderAmount info={info} />
            <form id="form" ref={formRef} className={classes.container}>
                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="cardholder_name">
                        Cardholder Name
                    </label>
                    <div id="nameValidation" style={{ color: 'red' }}>
                        {nameError}
                    </div>
                    <input
                        id="cardholder_name"
                        name="cardholder_name"
                        className={classes.input}
                        ref={nameRef}
                    ></input>
                </div>

                <div className={classes.inputContainer}>
                    <label
                        className={classes.label}
                        htmlFor="credit_card_field_id"
                    >
                        Credit Card Number
                    </label>
                    <div id="ccValidation" style={{ color: 'red' }}>
                        {ccError}
                    </div>
                    <div id="credit_card_field_id"></div>
                </div>

                <div className={classes.expiryDateBox}>
                    <div className={classes.flexInputContainer}>
                        <label className={classes.label} htmlFor="exp_month">
                            Expiry Month
                        </label>
                        <div id="monthValidation" style={{ color: 'red' }}>
                            {monthError}
                        </div>
                        <input
                            className={classes.input}
                            id="exp_month"
                            type="text"
                            name="exp_month"
                            ref={mRef}
                        />
                    </div>

                    <div className={classes.flexInputContainer}>
                        <label className={classes.label} htmlFor="exp_year">
                            Expiry Year
                        </label>
                        <div id="yearValidation" style={{ color: 'red' }}>
                            {yearError}
                        </div>
                        <input
                            className={classes.input}
                            id="exp_year"
                            type="text"
                            name="exp_year"
                            ref={yRef}
                        />
                    </div>
                </div>

                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="cvv_field_id">
                        CVV
                    </label>
                    <div id="cvvValidation" style={{ color: 'red' }}>
                        {cvvError}
                    </div>
                    <div id="cvv_field_id"></div>
                </div>

                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="address1">
                        Billing Street Address
                    </label>
                    <div id="addressValidation" style={{ color: 'red' }}>
                        {addressError}
                    </div>
                    <input
                        className={classes.input}
                        id="address1"
                        type="text"
                        name="address1"
                        ref={addressRef}
                    />
                </div>

                <div className={classes.inputContainer}>
                    <label className={classes.label} htmlFor="postal_code">
                        Postal Code
                    </label>
                    <div id="psValidation" style={{ color: 'red' }}>
                        {postalCodeError}
                    </div>
                    <input
                        className={classes.input}
                        id="postal_code"
                        type="text"
                        name="postal_code"
                        ref={psRef}
                    />
                </div>

                <div className={classes.buttonContainer}>
                    <Button
                        className={classes.backButton}
                        variant="contained"
                        onClick={() => previousStep()}
                    >
                        Back
                    </Button>
                    {/* Disable the Continue button if the id has not been set. */}
                    <Button
                        className={classes.continueButton}
                        variant="contained"
                        type="submit"
                        value="Submit"
                    >
                        Confirm Payment
                    </Button>
                </div>
            </form>
        </Card>
    );
}
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: checkmarksTheme.transparentCard,
        borderRadius: '15px',
        margin: '3%',
        width: '86%',
        padding: '0 5% 5% 5%',
        [theme.breakpoints.up('md')]: {
            width: '50%',
            padding: '0 2% ',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 5% 4% 5%',
        },
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'auto',
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
    label: {
        fontSize: '18px',
    },
    input: {
        backgroundColor: 'transparent',
        border: `1px solid ${checkmarksTheme.textLabel}`,
        padding: '8px',
        marginLeft: '3%',
        borderRadius: '5px',
        width: '100%',
        ':invalid': {
            border: '1px solid red',
        },
        '&:focus': {
            outline: 'none',
        },
        [theme.breakpoints.up('md')]: {
            margin: '2% auto',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '2% auto',
        },
    },

    inputContainer: {
        width: '75%',
    },
    flexInputContainer: {
        width: '45%',

        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            width: '100%',
        },
    },

    expiryDateBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '75%',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '10%',
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginLeft: '3%',
        width: '50%',
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
        width: '50%',
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
