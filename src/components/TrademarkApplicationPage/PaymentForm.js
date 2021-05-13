import React, { useState, useRef, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card } from '@material-ui/core';
import { checkmarksTheme } from '../../styles/Themes';
import { createClioContact, createEmail, sendPayment } from '../../network';

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

    // Error statevar
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
                placeholder: 'credit card number',
                css: {
                    'background-color': 'white',
                    'font-family': 'serif',
                    'font-size': '22px',
                    padding: '4px',
                    color: 'black',
                    ':invalid': {
                        color: '#FF0000',
                        border: '2px solid red',
                    },
                    ':valid': { color: '#0000FF' },
                    '::placeholder': { color: 'brown' },
                    border: '1px solid #A8A8A8',
                },
            },
        };

        const cvv_hosted_field = {
            selector: '#cvv_field_id',
            input: {
                type: 'cvv',
                placeholder: 'CVV',
                css: {
                    'background-color': 'white',
                    'border-radius': '10px',
                    'font-family': 'serif',
                    'font-size': '22px',
                    padding: '4px',
                    ':focus': { color: 'blue' },
                    ':invalid': {
                        color: '#FF0000',
                        border: '2px solid red',
                    },
                    ':valid': { color: 'green' },
                    border: '1px solid #A8A8A8',
                },
            },
        };

        const hostedFieldsConfiguration = {
            publicKey: 'm_4Pmy9PJ0T76ip_9W-o6UUA',
            input: {
                css: {
                    'font-family': 'serif',
                    'font-size': '22px',
                    'border-radius': '10px',
                    color: '#0BEEF0',
                    ':invalid': { background: 'antiquewhite' },
                    ':valid': { color: 'blanchedalmond' },
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
                            form {
                                width: 500px;
                                margin: 0 auto;
                            }
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
            <form id="form" ref={formRef} className={classes.container}>
                <div className={classes.flexInput}>
                    <label
                        className={classes.label}
                        htmlFor="credit_card_field_id"
                    >
                        Credit Card
                    </label>
                    <div id="ccValidation" style={{ color: 'red' }}>
                        {ccError}
                    </div>
                    <div
                        // className={classes.input}
                        id="credit_card_field_id"
                    ></div>
                </div>

                <div className={classes.expiryDateBox}>
                    <div className={classes.flexInput}>
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

                    <div className={classes.flexInput}>
                        <label
                            className={classes.label}
                            className={classes.label}
                            htmlFor="exp_year"
                        >
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

                <div className={classes.flexInput}>
                    <label className={classes.label} htmlFor="cvv_field_id">
                        CVV
                    </label>
                    <div id="cvvValidation" style={{ color: 'red' }}>
                        {cvvError}
                    </div>
                    <div id="cvv_field_id"></div>
                </div>

                <div className={classes.flexInput}>
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

                <div className={classes.flexInput}>
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
        width: '70%',
        padding: '0 5% 5% 5%',
        [theme.breakpoints.up('md')]: {
            width: '150%',
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
        overflowY: 'hidden',
        overflowX: 'hidden',
        height: '100%',
        // width: 'auto',
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
        width: '80%',
        backgroundColor: 'transparent',
        border: `1px solid ${checkmarksTheme.textLabel}`,
        padding: '10px',
        margin: '3% auto',
        borderRadius: '5px',
        '&:focus': {
            outline: 'none',
        },
        [theme.breakpoints.up('sm')]: {
            margin: '2% auto',
        },
    },
    flexInput: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        margin: '3%',
        borderRadius: '10px',
        // [theme.breakpoints.up('sm')]: {
        //     width: '38%',
        //     margin: '2%',
        // },
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
    expiryDateBox: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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

// <Card className={classes.card}>
//     <div>
//         <script
//             src="https://cdn.affinipay.com/hostedfields/1.1.1/fieldGen_1.1.1.js"
//             async
//         ></script>
//         <h1 className={classes.title}> Place a Trust Payment</h1>
//         {/* ////////////////////////////////////// Credit Card ////////////////////////////////////////////*/}
//         <Typography className={classes.text} component="p">
//             Credit Card
//         </Typography>
//         <form ref={formRef}>
//             <FormControl fullWidth={true}>
//                 <TextField
//                     // id="outlined-basic"
//                     label="Cardholder Name"
//                     variant="outlined"
//                     size="small"
//                     className={classes.input}
//                     type="text"
//                     // value={info.paymentCardholderName}
//                     autoComplete="on"
//                     // onChange={(e) =>
//                     //     setInfo({
//                     //         ...info,
//                     //         paymentCardholderName: e.target.value,
//                     //     })
//                     // }
//                 />
//             </FormControl>
//             <FormControl fullWidth={true}>
//                 <TextField
//                     id="outlined-basic"
//                     label="Credit Card Number"
//                     variant="outlined"
//                     size="small"
//                     className={classes.input}
//                     type="text"
//                     // value={info.paymentCreditCardNumber}
//                     autoComplete="on"
//                     // onChange={(e) =>
//                     //     setInfo({
//                     //         ...info,
//                     //         paymentCreditCardNumber: e.target.value,
//                     //     })
//                     // }
//                 />
//             </FormControl>
//             <div className={classes.flexContainer}>
//                 <TextField
//                     id="exp_month"
//                     label="Expiry Month"
//                     variant="outlined"
//                     size="small"
//                     className={classes.flexInput}
//                     type="text"
//                     // value={info.paymentCardExpiryDate}
//                     autoComplete="on"
//                     ref={mRef}
//                 />
//                 <div id="monthValidation" style={{ color: 'red' }}>
//                     {monthError}
//                 </div>

//                 <TextField
//                     id="exp_year"
//                     label="Expiry Year"
//                     variant="outlined"
//                     size="small"
//                     className={classes.flexInput}
//                     type="text"
//                     // value={info.paymentCardCVV}
//                     autoComplete="on"
//                     ref={yRef}
//                 />
//                 <div id="yearValidation" style={{ color: 'red' }}>
//                     {yearError}
//                 </div>
//             </div>
//             <FormControl fullWidth={true}>
//                 <TextField
//                     id="cvv_field_id"
//                     label="CVV"
//                     variant="outlined"
//                     size="small"
//                     className={classes.input}
//                     type="text"
//                     // value={info.paymentCreditCardNumber}
//                     autoComplete="on"
//                     // onChange={(e) =>
//                     //     setInfo({
//                     //         ...info,
//                     //         paymentCreditCardNumber: e.target.value,
//                     //     })
//                     // }
//                 />
//                 <div id="cvvValidation" style={{ color: 'red' }}>
//                     {cvvError}
//                 </div>
//             </FormControl>
//             <Checkmark value={validationProgress.paymentCardInfo} />

//             {/* ////////////////////////////////////// Billing Addres ////////////////////////////////////////////*/}
//             <Typography className={classes.text} component="p">
//                 Billing Addres
//             </Typography>

//             <FormControl fullWidth={true}>
//                 <FormControlLabel
//                     control={
//                         <Checkbox
//                             checked={info.billingAddressSameAsUser}
//                             onChange={() => handleMirrorUserAddress()}
//                         />
//                     }
//                     label="Same as Applicant Address (from a few steps ago)"
//                 />
//                 <TextField
//                     id="address1"
//                     label="Billing Address"
//                     variant="outlined"
//                     size="small"
//                     className={classes.input}
//                     type="text"
//                     // value={info.billingAddressStreet}
//                     autoComplete="on"
//                     disabled={info.billingAddressSameAsUser}
//                     ref={addressRef}
//                     // onChange={(e) =>
//                     //     setInfo({
//                     //         ...info,
//                     //         billingAddressStreet: e.target.value,
//                     //     })
//                     // }
//                 />
//                 <div id="addressValidation" style={{ color: 'red' }}>
//                     {addressError}
//                 </div>
//             </FormControl>

//             <FormControl fullWidth={true}>
//                 <TextField
//                     id="postal_code"
//                     label="Postal Code"
//                     variant="outlined"
//                     size="small"
//                     className={classes.input}
//                     type="text"
//                     // value={info.billingAddressStreet}
//                     autoComplete="on"
//                     disabled={info.billingAddressSameAsUser}
//                     ref={psRef}
//                     // onChange={(e) =>
//                     //     setInfo({
//                     //         ...info,
//                     //         billingAddressStreet: e.target.value,
//                     //     })
//                     // }
//                 />
//                 <div id="psValidation" style={{ color: 'red' }}>
//                     {postalCodeError}
//                 </div>
//             </FormControl>

//             {/* <div className={classes.flexContainer}>
//             <TextField
//                 id="outlined-basic"
//                 label="City"
//                 variant="outlined"
//                 size="small"
//                 className={classes.flexInput}
//                 type="text"
//                 value={info.billingAddressCity}
//                 autoComplete="on"
//                 disabled={info.billingAddressSameAsUser}
//                 onChange={(e) =>
//                     setInfo({
//                         ...info,
//                         billingAddressCity: e.target.value,
//                     })
//                 }
//             />
//             <TextField
//                 id="outlined-basic"
//                 label="Province"
//                 variant="outlined"
//                 size="small"
//                 className={classes.flexInput}
//                 type="text"
//                 value={info.billingAddressProvince}
//                 autoComplete="on"
//                 disabled={info.billingAddressSameAsUser}
//                 onChange={(e) =>
//                     setInfo({
//                         ...info,
//                         billingAddressProvince: e.target.value,
//                     })
//                 }
//             />
//         </div>
//         <div className={classes.flexContainer}>
//             <TextField
//                 id="outlined-basic"
//                 label="Postal Code"
//                 variant="outlined"
//                 size="small"
//                 className={classes.flexInput}
//                 type="text"
//                 value={info.billingAddressPostalCode}
//                 autoComplete="on"
//                 disabled={info.billingAddressSameAsUser}
//                 onChange={(e) =>
//                     setInfo({
//                         ...info,
//                         billingAddressPostalCode: e.target.value,
//                     })
//                 }
//             />

//             <TextField
//                 id="outlined-basic"
//                 label="Country"
//                 variant="outlined"
//                 size="small"
//                 className={classes.flexInput}
//                 type="text"
//                 value={info.billingAddressCountry}
//                 autoComplete="on"
//                 disabled={info.billingAddressSameAsUser}
//                 onChange={(e) =>
//                     setInfo({
//                         ...info,
//                         billingAddressCountry: e.target.value,
//                     })
//                 }
//             />
//             <Checkmark value={validationProgress.billingAddress} />
//         </div> */}
//             <Alert severity="info" className={classes.alert}>
//                 Helper section with brief legal information, assisting
//                 the client through the process.
//             </Alert>
//             <div className={classes.buttonContainer}>
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     className={classes.backButton}
//                     onClick={() => navigation.previous()}
//                 >
//                     Back
//                 </Button>
//                 <Button
//                     className={classes.continueButton}
//                     type="submit"
//                     variant="contained"
//                     onClick={() => {
//                         submitApplication(true);
//                     }}
//                 >
//                     Confirm Payment
//                 </Button>
//             </div>
//         </form>
//     </div>
// </Card>
