import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Button,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@material-ui/core';
import { checkmarksTheme } from '../../styles/Themes';
import Alert from '@material-ui/lab/Alert';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Checkmark from '../Checkmark';
import { canadaProvinces, unitedStates } from '../../utils/FormValidation';
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

    const [cccError, setCcError] = useState('');
    const [cvvError, setCcvError] = useState('');
    const [monthError, setMonthError] = useState('');
    const [yearError, setYearError] = useState('');
    const [postalCodeError, setPostalCodeError] = useState('');
    const [addressError, setAddressError] = useState('');

    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        let currentComponent;

        const form = formRef.current;

        var ccErrorMessage = 'Credit Card field is required';
        var cvvErrorMessage = 'CVV field is required';

        const cc_hosted_field = {
            selector: '#credit_card_field_id',
            input: {
                type: 'credit_card_number',
                placeholder: 'credit card number',
                css: {
                    'font-family': 'serif',
                    'font-size': '22px',
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
                placeholder: 'cvv number',
                css: {
                    backgroundcolor: 'white',
                    'font-family': 'serif',
                    'font-size': '22px',
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
                    color: '#0BEEF0',
                    ':invalid': { background: 'antiquewhite' },
                    ':valid': { color: 'blanchedalmond' },
                },
            },
            fields: [cc_hosted_field, cvv_hosted_field],
        };

        // const hostedFieldsCallBack = function (state) {
        //     if (state.fields[0].error != '') {
        //         ccErrorMessage = state.fields[0].error;
        //     } else {
        //         ccErrorMessage = '';
        //     }

        //     if (state.fields[1].error != '') {
        //         cvvErrorMessage = state.fields[1].error;
        //     } else {
        //         cvvErrorMessage = '';
        //     }
        // };

        // const hostedFields = window.AffiniPay.HostedFields.initializeFields(
        //     hostedFieldsConfiguration,
        //     hostedFieldsCallBack
        // );

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

            ////////////////////////////////////Validation///////////////////////////////////////////////
            // creditCardValidation.innerText = currentComponent.state.ccError;
            // cvvValidation.innerText = currentComponent.state.cvvError;

            // currentComponent.setState({
            //     monthError: '',
            //     yearError: '',
            //     postalCodeError: '',
            //     addressError: '',
            //     ccError: '',
            //     cvvError: '',
            // });

            // if (expMonthElement.value.length == 0) {
            //     currentComponent.setState({
            //         monthError: 'Expiry Month field is required',
            //     });
            // }

            // if (expYearElement.value.length == 0) {
            //     currentComponent.setState({
            //         yearError: 'Expiry Year field is required',
            //     });
            // }

            // if (ccErrorMessage || cvvErrorMessage) {
            //     currentComponent.setState({
            //         ccError: ccErrorMessage,
            //         cvvError: cvvErrorMessage,
            //     });
            // }

            // if (postalCodeElement.value.length == 0) {
            //     currentComponent.setState({
            //         postalCodeError: 'Postal Code field is required',
            //     });
            // }

            // if (addressElement.value.length == 0) {
            //     currentComponent.setState({
            //         addressError: 'Billing Street Address is required',
            //     });
            //     return;
            // }

            // hostedFields
            //     .getPaymentToken({
            //         postal_code: postalCodeElement.value,
            //         exp_year: expYearElement.value,
            //         exp_month: expMonthElement.value,
            //         address1: addressElement.value,
            //     })
            //     .then(function (paymentResult) {
            //         currentComponent.props.handler(
            //             'id',
            //             String(paymentResult.id)
            //         );
            //         currentComponent.props.nextStep();
            //     })
            //     .catch(function (err) {
            //         console.log(err);
            //     });
        };
    }, []);

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

    //////////////////////////////Create clio account and send email/////////////////////////////////////////////

    const submitApplication = async () => {
        setSubmitting(true);
        let responseSendPayment = await sendPayment(info);
        if (responseSendPayment) {
            let matterId = await createClioContact(info);
            console.log('matterId: ', matterId);
            if (matterId) {
                let responseCreateEmail = await createEmail(info, matterId);
                // let responseCreateEmail = true;
                if (responseCreateEmail) {
                    setInfo({
                        ...info,
                        paymentConfirmaed: true,
                    });
                    navigation.next();
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
        submitApplication();
    };

    return (
        <Card className={classes.card}>
            <div>
                <script
                    src="https://cdn.affinipay.com/hostedfields/1.1.1/fieldGen_1.1.1.js"
                    async
                ></script>
                <h1 className={classes.title}> Place a Trust Payment</h1>
                {/* ////////////////////////////////////// Credit Card ////////////////////////////////////////////*/}
                <Typography className={classes.text} component="p">
                    Credit Card
                </Typography>
                <form ref={formRef}>
                    <FormControl fullWidth={true}>
                        <TextField
                            // id="outlined-basic"
                            label="Cardholder Name"
                            variant="outlined"
                            size="small"
                            className={classes.input}
                            type="text"
                            // value={info.paymentCardholderName}
                            autoComplete="on"
                            // onChange={(e) =>
                            //     setInfo({
                            //         ...info,
                            //         paymentCardholderName: e.target.value,
                            //     })
                            // }
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
                            // value={info.paymentCreditCardNumber}
                            autoComplete="on"
                            // onChange={(e) =>
                            //     setInfo({
                            //         ...info,
                            //         paymentCreditCardNumber: e.target.value,
                            //     })
                            // }
                        />
                    </FormControl>
                    <div className={classes.flexContainer}>
                        <TextField
                            id="exp_month"
                            label="Expiry Month"
                            variant="outlined"
                            size="small"
                            className={classes.flexInput}
                            type="text"
                            // value={info.paymentCardExpiryDate}
                            autoComplete="on"
                            ref={mRef}
                        />
                        <div id="monthValidation" style={{ color: 'red' }}>
                            {monthError}
                        </div>

                        <TextField
                            id="exp_year"
                            label="Expiry Year"
                            variant="outlined"
                            size="small"
                            className={classes.flexInput}
                            type="text"
                            // value={info.paymentCardCVV}
                            autoComplete="on"
                            ref={yRef}
                        />
                        <div id="yearValidation" style={{ color: 'red' }}>
                            {yearError}
                        </div>
                    </div>
                    <FormControl fullWidth={true}>
                        <TextField
                            id="cvv_field_id"
                            label="CVV"
                            variant="outlined"
                            size="small"
                            className={classes.input}
                            type="text"
                            // value={info.paymentCreditCardNumber}
                            autoComplete="on"
                            // onChange={(e) =>
                            //     setInfo({
                            //         ...info,
                            //         paymentCreditCardNumber: e.target.value,
                            //     })
                            // }
                        />
                        <div id="cvvValidation" style={{ color: 'red' }}>
                            {cvvError}
                        </div>
                    </FormControl>
                    <Checkmark value={inputValidationValue.paymentCardInfo} />

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
                            id="address1"
                            label="Billing Address"
                            variant="outlined"
                            size="small"
                            className={classes.input}
                            type="text"
                            // value={info.billingAddressStreet}
                            autoComplete="on"
                            disabled={info.billingAddressSameAsUser}
                            ref={addressRef}
                            // onChange={(e) =>
                            //     setInfo({
                            //         ...info,
                            //         billingAddressStreet: e.target.value,
                            //     })
                            // }
                        />
                        <div id="addressValidation" style={{ color: 'red' }}>
                            {addressError}
                        </div>
                    </FormControl>

                    <FormControl fullWidth={true}>
                        <TextField
                            id="postal_code"
                            label="Postal Code"
                            variant="outlined"
                            size="small"
                            className={classes.input}
                            type="text"
                            // value={info.billingAddressStreet}
                            autoComplete="on"
                            disabled={info.billingAddressSameAsUser}
                            ref={psRef}
                            // onChange={(e) =>
                            //     setInfo({
                            //         ...info,
                            //         billingAddressStreet: e.target.value,
                            //     })
                            // }
                        />
                        <div id="psValidation" style={{ color: 'red' }}>
                            {postalCodeError}
                        </div>
                    </FormControl>

                    {/* <div className={classes.flexContainer}>
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
                    <Checkmark value={inputValidationValue.billingAddress} />
                </div> */}
                    <Alert severity="info" className={classes.alert}>
                        Helper section with brief legal information, assisting
                        the client through the process.
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
                                submitApplication(true);
                            }}
                        >
                            Confirm Payment
                        </Button>
                    </div>
                </form>
            </div>
        </Card>
    );
}
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: checkmarksTheme.transparentCard,
        borderRadius: '15px',
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

// This page c-ontains modified code from the following sources:
// https://developers.affinipay.com/collect/create-payment-form-hosted-fields.html
// https://cdn.affinipay.com/hostedfields/1.1.1/advancedExample.html

// import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
// import Background from '../images/back_pattern.png'

// var sectionStyle = {
//     overflowY: "hidden",
//     overflowX: "hidden",
//     height: "100%",
//     width: "auto",
//     backgroundImage: `url(${Background})`,
// };

// export class PaymentForm extends Component {
//     constructor(props) {
//         super(props);
//         this.formRef = React.createRef();
//         this.psRef = React.createRef();
//         this.addressRef = React.createRef();
//         this.nameRef= React.createRef();
//         this.yRef = React.createRef();
//         this.mRef = React.createRef();

//         this.state = {
//             ccError: "",
//             cvvError: "",
//             monthError: "",
//             yearError: "",
//             postalCodeError: "",
//             addressError: ""
//         };
//     }

//     continue = e => {
//         e.preventDefault();
//         this.props.nextStep();
//     };

//     back = e => {
//         e.preventDefault();
//         this.props.prevStep();
//     };

//     componentDidMount() {

//         let currentComponent = this;

//         const form = this.formRef.current;

//         var ccErrorMessage = "Credit Card field is required";
//         var cvvErrorMessage = "CVV field is required";

//         const cc_hosted_field = {
//             selector: '#credit_card_field_id',
//             input: {
//                 type: 'credit_card_number',
//                 placeholder: 'credit card number',
//                 css: {
//                     'font-family': 'serif',
//                     'font-size': '22px',
//                     'color': 'black',
//                     ':invalid': {
//                         'color': '#FF0000',
//                         'border': '2px solid red'
//                     },
//                     ':valid': { color: '#0000FF' },
//                     '::placeholder': { color: 'brown' },
//                     'border': '1px solid #A8A8A8'
//                 }
//             }
//         }

//         const cvv_hosted_field = {
//             selector: '#cvv_field_id',
//             input: {
//                 type: 'cvv',
//                 placeholder: 'cvv number',
//                 css: {
//                     backgroundcolor: 'white',
//                     'font-family': 'serif',
//                     'font-size': '22px',
//                     ':focus': { color: 'blue' },
//                     ':invalid': {
//                         'color': '#FF0000',
//                         'border': '2px solid red'
//                     },
//                     ':valid': { color: 'green' },
//                     'border': '1px solid #A8A8A8'
//                 }
//             }
//         }

//         const hostedFieldsConfiguration = {
//             publicKey: 'm_4Pmy9PJ0T76ip_9W-o6UUA',
//             input: {
//                 css: {
//                     'font-family': 'serif',
//                     'font-size': '22px',
//                     'color': '#0BEEF0',
//                     ':invalid': { background: 'antiquewhite' },
//                     ':valid': { color: 'blanchedalmond' }
//                 }
//             },
//             fields: [
//                 cc_hosted_field,
//                 cvv_hosted_field,
//             ]
//         }

//         const hostedFieldsCallBack = function (state) {
//             if (state.fields[0].error != "") {
//                 ccErrorMessage = state.fields[0].error;
//             } else {
//                 ccErrorMessage = "";
//             }

//             if (state.fields[1].error != "") {
//                 cvvErrorMessage = state.fields[1].error;
//             } else {
//                 cvvErrorMessage = "";
//             }
//         }

//         const hostedFields = window.AffiniPay.HostedFields.initializeFields(hostedFieldsConfiguration, hostedFieldsCallBack)

//         form.onsubmit = function (event) {
//             event.preventDefault()
//             const postalCodeElement = document.getElementById('postal_code')
//             const expYearElement = document.getElementById('exp_year')
//             const expMonthElement = document.getElementById('exp_month')
//             const addressElement = document.getElementById('address1')
//             const nameElement = document.getElementById('cardholder_name')
//             const creditCardValidation = document.getElementById('ccValidation')
//             const cvvValidation = document.getElementById('cvvValidation')

//             creditCardValidation.innerText = currentComponent.state.ccError;
//             cvvValidation.innerText = currentComponent.state.cvvError;

//             currentComponent.setState({
//                 nameError:"",
//                 monthError: "",
//                 yearError: "",
//                 postalCodeError: "",
//                 addressError: "",
//                 ccError: "",
//                 cvvError: "",
//             })

//             if (nameElement.value.length == 0) {
//                 currentComponent.setState({
//                     nameError: "Cardholder Name is required",
//                 })
//             }

//             if (expMonthElement.value.length == 0) {
//                 currentComponent.setState({
//                     monthError: "Expiry Month field is required",
//                 })
//             }

//             if (expYearElement.value.length == 0) {
//                 currentComponent.setState({
//                     yearError: "Expiry Year field is required"
//                 })
//             }

//             if (ccErrorMessage || cvvErrorMessage) {
//                 currentComponent.setState({
//                     ccError: ccErrorMessage,
//                     cvvError: cvvErrorMessage,
//                 })
//             }

//             if (postalCodeElement.value.length == 0) {
//                 currentComponent.setState({
//                     postalCodeError: "Postal Code field is required"
//                 })
//             }

//             if (addressElement.value.length == 0) {
//                 currentComponent.setState({
//                     addressError: "Billing Street Address is required"
//                 })
//                 return;
//             }
//             hostedFields.getPaymentToken({ "postal_code": postalCodeElement.value, "exp_year": expYearElement.value, "exp_month": expMonthElement.value , "address1": addressElement.value, "name": nameElement.value, "email": currentComponent.props.values.email})
//                 .then(function (paymentResult) {
//                     currentComponent.props.handler('id', String(paymentResult.id));
//                     currentComponent.props.nextStep();
//                 }).catch(function (err) {
//                     console.log(err)
//                 })
//         }
//     }

//     render() {

//         return (
//             <React.Fragment>
//                 <section style={sectionStyle}>
//                     <div className="applicationFormTitle">
//                         <h1>Place a Trust Payment</h1>
//                     </div>
//                     <div className="formLayout">
//                         <div>
//                             <script src="https://cdn.affinipay.com/hostedfields/1.1.1/fieldGen_1.1.1.js" async></script>

//                             <style type="text/css">
//                                 {`
//                             form {
//                                 width: 500px;
//                                 margin: 0 auto;
//                             }
//                             form input, form iframe {
//                                 width: 100%;
//                                 margin: 5px;
//                             }

//                             form iframe {
//                                 border: none;
//                                 height: 30px;
//                             }
//                         `}
//                             </style>
//                             <form id="form" ref={this.formRef}>
//                                 <h1>Payment Details</h1>

//                                 <div>
//                                     <label htmlFor="cardholder_name">Cardholder Name</label>
//                                     <div id="nameValidation" style={{ color: "red" }}>{this.state.nameError}</div>
//                                     <input id="cardholder_name" type="text" name="cardholder_name" ref={this.nameRef} />

//                                 </div>

//                                 <div>
//                                     <label htmlFor="credit_card_field_id">Credit Card</label>
//                                     <div id="ccValidation" style={{ color: "red" }}>{this.state.ccError}</div>
//                                     <div id="credit_card_field_id"></div>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="exp_month">Expiry Month</label>
//                                     <div id="monthValidation" style={{ color: "red" }}>{this.state.monthError}</div>
//                                     <input id="exp_month" type="text" name="exp_month" ref={this.mRef} />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="exp_year">Expiry Year</label>
//                                     <div id="yearValidation" style={{ color: "red" }}>{this.state.yearError}</div>
//                                     <input id="exp_year" type="text" name="exp_year" ref={this.yRef} />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="cvv_field_id">CVV</label>
//                                     <div id="cvvValidation" style={{ color: "red" }}>{this.state.cvvError}</div>
//                                     <div id="cvv_field_id"></div>
//                                 </div>

//                                 <div>
//                                     <label htmlFor="address1">Billing Street Address</label>
//                                     <div id="addressValidation" style={{ color: "red" }}>{this.state.addressError}</div>
//                                     <input id="address1" type="text" name="address1" ref={this.addressRef} />
//                                 </div>

//                                 <div>
//                                     <label htmlFor="postal_code">Postal Code</label>
//                                     <div id="psValidation" style={{ color: "red" }}>{this.state.postalCodeError}</div>
//                                     <input id="postal_code" type="text" name="postal_code" ref={this.psRef} />
//                                 </div>

//                                 <br />
//                                 <Button style={{ margin: "4px" }} color="secondary" variant="contained" onClick={this.back}>Back</Button>
//                                 {/* Disable the Continue button if the id has not been set. */}
//                                 <Button style={{ margin: "4px" }} color="primary" variant="contained" type="submit" value="Submit" >
//                                     Continue to Confirm Trademark Details
//                                 </Button>
//                                 {/* To test the data */}
//                                 {/* <Button color="primary" variant="contained" type="submit" value="Submit" >Continue</Button> */}
//                             </form>
//                         </div>
//                     </div>
//                 </section>
//             </React.Fragment>
//         );
//     }

// }
// export default PaymentForm;
