import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bannerImage from '../assets/images/bg_application-nicolas-hoizey.jpg';
import Progress from '../components/TrademarkApplicationPage/Progress';
import CountryCard from '../components/TrademarkApplicationPage/CountryCard';
import ConfirmOrder from '../components/TrademarkApplicationPage/ConfirmOrder';
import PaymentForm from '../components/TrademarkApplicationPage/PaymentForm';
import TrademarkForm from '../components/TrademarkApplicationPage/TrademarkType/index';
import GoodsAndServices from '../components/TrademarkApplicationPage/GoodsAndServices';
import { useStep } from 'react-hooks-helper';
import Success from '../components/TrademarkApplicationPage/Success';
import ApplicationInfo from '../components/TrademarkApplicationPage/ApplicationInfo/index';
import PageLeavePrompt from '../utils/PageLeavePrompt';
import { validateForm } from '../utils/FormValidation';

const TrademarkApplication = () => {
    const classes = useStyles();

    // form information
    const [info, setInfo] = useState({
        //Application Informarion
        individualOrOrganization: '',
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

        //Trademark Type
        isText: false,
        isLogo: false,
        isOther: false,
        otherTypes: [],
        characterText: '',
        fileName: '',
        file: '',

        // trademarkName: '',

        // Goods and Services
        classesSelected: [],
        termsSelected: [],
        amount: 0,

        //International Information
        filedInOtherCountry: null,
        countryOfFiling: '',
        fillingDate: '',
        fillingNumber: '',

        // Info Confirmed
        infoConfirmed: false,

        // Payment Information
        paymentCardholderName: '',
        paymentCreditCardNumber: '',
        paymentCardExpiryDate: '',
        paymentCardCVV: '',
        billingAddressSameAsUser: false,
        billingAddressStreet: '',
        billingAddressCity: '',
        billingAddressProvince: '',
        billingAddressPostalCode: '',
        billingAddressCountry: '',
        paymentConfirmaed: false,
    });

    // form validation and progress
    const [inputValidationValue, setInputValidationValue] = useState({
        //Application Informarion - 1100
        individualOrOrganizationName: 0,
        firstName: 0,
        lastName: 0,
        email: 0,
        idDocumentUploaded: 0,
        userStreetAddress: 0,
        userCity: 0,
        userProvince: 0,
        userPostalCode: 0,
        userCountry: 0,
        agreedTermsOfService: 0,

        //Trademark Type - 400
        trademarkTypeFormCompleted: 0,

        // Goods and Services - 600
        amountNotZero: 0,

        //International Information - 300
        internationalFilingInfo: 0,

        //Info Confirmed - 200
        infoConfirmed: 0,

        // Payment Information - 500
        paymentCardInfo: 0,
        billingAddress: 0,
        paymentConfirmed: 0,
    });
    useEffect(() => {
        validateForm(info, inputValidationValue, setInputValidationValue);
    }, [info]);

    // custon hook, "Discard changes?" on Leave Page (defined in  utils folder)
    const [Prompt, setDirty, setPristine] = PageLeavePrompt();

    //Give each step an id
    const steps = [
        { id: 'Application-Information', num: 1 },
        { id: 'Trademark-Type', num: 2 },
        { id: 'Goods-and-Services', num: 3 },
        { id: 'International-Information', num: 4 },
        { id: 'Confirmation', num: 5 },
        { id: 'Payment', num: 6 },
        { id: 'Success', num: 7 },
    ];

    //use useStep from hook-helper to navigate the steps
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    return (
        <Paper className={classes.root}>
            {/* <div className={classes.logo}>
                <img src={Logo2} alt="Logo" />
            </div> */}
            <Progress
                step={step}
                steps={steps}
                info={info}
                inputValidationValue={inputValidationValue}
            />
            <div className={classes.container}>
                {(() => {
                    switch (step.id) {
                        case 'Application-Information':
                            return (
                                <ApplicationInfo
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                    setDirty={setDirty}
                                    inputValidationValue={inputValidationValue}
                                />
                            );
                        case 'Trademark-Type':
                            return (
                                <TrademarkForm
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                    inputValidationValue={inputValidationValue}
                                />
                            );
                        case 'Goods-and-Services':
                            return (
                                <GoodsAndServices
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                    inputValidationValue={inputValidationValue}
                                />
                            );
                        case 'International-Information':
                            return (
                                <CountryCard
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                    inputValidationValue={inputValidationValue}
                                />
                            );
                        case 'Confirmation':
                            return (
                                <ConfirmOrder
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'Payment':
                            return (
                                <PaymentForm
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                    inputValidationValue={inputValidationValue}
                                    setPristine={setPristine}
                                />
                            );
                        case 'Success':
                            return <Success navigation={navigation} />;
                    }
                })()}
            </div>
            {Prompt}
        </Paper>
    );
};

export default TrademarkApplication;

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundImage: `url(${bannerImage})`,
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '75px',
        minHeight: window.innerHeight,
        width: window.innerWidth,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '60px',
        minHeight: window.innerHeight,
        width: window.innerWidth,
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '2%',
    },

    text: {
        fontSize: 30,
        fontWeight: 500,
    },
}));
