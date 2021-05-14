import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function Success({ setCurrentStep, setInfo, setPristine }) {
    const history = useHistory();
    const classes = useStyles();

    //handle back button
    const toLanding = () => {
        setCurrentStep(1);
        setInfo({
            //Applicant Information
            individualOrOrganization: 'Individual',
            firstName: '',
            lastName: '',
            organizationName: '',
            email: '',
            idDocumentUploaded: false,
            userStreetAddress: '',
            userCity: '',
            userProvince: '',
            userPostalCode: '',
            userCountry: '',
            agreedTermsOfService: false,
            idName: '',

            //Trademark Type
            isText: false,
            isLogo: false,
            isOther: false,
            otherTypes: [],
            characterText: '',
            fileName: '',
            file: '',

            // Goods and Services
            classesSelected: [],
            termsSelected: [],
            selectedServiceName: 'DIY',
            basePrice: 690,
            amount: 0,

            //International Information
            filedInOtherCountry: null,
            countryOfFiling: '',
            fillingDate: '',
            fillingNumber: '',

            // Info Confirmed
            infoConfirmed: false,

            // Payment Information
            paymentToken: '',
            paymentCardholderName: '',
            paymentCreditCardNumber: '',
            paymentCardExpiryDate: '',
            paymentCardCVV: '',
            billingAddressSameAsUser: false,
            billingStreetAddress: '',
            billingPostalCode: '',
            paymentConfirmaed: false,
        });
        history.push('/');
    };

    setPristine();
    return (
        <div className={classes.root}>
            <h1 className={classes.text}>
                <b>Thank You For Your Submission!</b>
            </h1>
            <p className={classes.text}>
                Your Trademark Registration request has been sent. You will
                receive an email within <strong>2-3 business days </strong>
                regarding your request.
            </p>
            <br />
            <Button
                variant="contained"
                className={classes.button}
                onClick={() => toLanding()}
            >
                Return to Home page
            </Button>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '3%',
    },
    button: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginLeft: '1%',
        width: '20%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            width: '40%',
        },
    },
    text: {
        textAlign: 'center',
        fontWeight: 400,
    },
}));
