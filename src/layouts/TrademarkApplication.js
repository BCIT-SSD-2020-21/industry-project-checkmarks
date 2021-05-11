import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import bannerImage from '../assets/images/bg-application-yann-allegre.jpg';
// import bannerImageDark from '../assets/images/bg-dark-application-ricardo-gomez-angel.jpg';
import bannerImageDark from '../assets/images/bg-dark-application2-asoggetti.jpg';
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
import Footer from '../components/LandingPage/Footer';
import { sumProgressValue, validateForm } from '../utils/FormValidation';

const TrademarkApplication = (darkMode) => {
    const classes = useStyles();

    // form information
    const [info, setInfo] = useState({
        //Application Information
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
        idName: '',

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
        paymentToken: '',
        paymentCardholderName: '',
        paymentCreditCardNumber: '',
        paymentCardExpiryDate: '',
        paymentCardCVV: '',
        billingAddressSameAsUser: false,
        billingStreetAddress: '',
        billingPostalCode: '',
        // billingAddressStreet: '',
        // billingAddressCity: '',
        // billingAddressProvince: '',
        // billingAddressPostalCode: '',
        // billingAddressCountry: '',
        paymentConfirmaed: false,
    });

    // form validation and progress
    const [validationProgress, setValidationProgress] = useState({
        //Application Informarion - 1100 - step 1 end
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

        //Trademark Type - 500 - step 2 end
        trademarkTypeFormCompleted: 0,

        // Goods and Services - 500 - step 3 end
        amountNotZero: 0,

        //International Information - 300 - step 4 end
        internationalFilingInfo: 0,

        //Info Confirmed - 200 - step 5 end
        infoConfirmed: 0,

        // Payment Information - 300 - step 6 end
        paymentConfirmed: 0,
    });
    useEffect(() => {
        // builds the object carrying validation values assoiated with each step
        validateForm(info, setValidationProgress);
    }, [info]);
    const [progressValue, setProgressValue] = useState(0);
    useEffect(() => {
        // sums the values of all props in the object carrying validation values assoiated with each step
        setProgressValue(sumProgressValue(validationProgress));
    }, [validationProgress]);

    const [currentStep, setCurrentStep] = useState(1);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    // custon hook, "Discard changes?" on Leave Page (defined in  utils folder)
    const [Prompt, setDirty, setPristine] = PageLeavePrompt();

    //Give each step an id
    const steps = [
        {
            id: 'Trademark',
            num: 1,
            progressValueStart: 0,
            progressValueEnd: 500,
        },
        {
            id: 'Goods-and-Services',
            num: 2,
            progressValueStart: 500,
            progressValueEnd: 1000,
        },
        {
            id: 'International',
            num: 3,
            progressValueStart: 1000,
            progressValueEnd: 1300,
        },
        {
            id: 'Applicant',
            num: 4,
            progressValueStart: 1300,
            progressValueEnd: 2400,
        },
        {
            id: 'Confirmation',
            num: 5,
            progressValueStart: 2400,
            progressValueEnd: 2600,
        },
        {
            id: 'Payment',
            num: 6,
            progressValueStart: 2600,
            progressValueEnd: 2900,
        },
        { id: 'Success', num: 7, progressValueStart: 2900 },
    ];

    //use useStep from hook-helper to navigate the steps
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    console.log('info: ', info);
    return (
        <Paper
            className={classes.root}
            style={{
                backgroundImage: `url(${
                    darkMode.darkMode ? bannerImageDark : bannerImage
                })`,
            }}
        >
            {/* <div className={classes.logo}>
                <img src={Logo2} alt="Logo" />
            </div> */}
            <Progress
                step={step}
                steps={steps}
                info={info}
                progressValue={progressValue}
                validationProgress={validationProgress}
            />
            <Box className={classes.hero}>
                <Typography className={classes.title}>{step.id}</Typography>
            </Box>

            <div className={classes.container}>
                {(() => {
                    switch (step.id) {
                        case 'Trademark':
                            return (
                                <TrademarkForm
                                    navigation={navigation}
                                    step={step}
                                    info={info}
                                    setInfo={setInfo}
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    progressValue={progressValue}
                                    validationProgress={validationProgress}
                                    setDirty={setDirty}
                                />
                            );
                        case 'Goods-and-Services':
                            return (
                                <GoodsAndServices
                                    navigation={navigation}
                                    step={step}
                                    info={info}
                                    setInfo={setInfo}
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    progressValue={progressValue}
                                    validationProgress={validationProgress}
                                />
                            );
                        case 'International':
                            return (
                                <CountryCard
                                    navigation={navigation}
                                    step={step}
                                    info={info}
                                    setInfo={setInfo}
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    progressValue={progressValue}
                                    validationProgress={validationProgress}
                                />
                            );
                        case 'Applicant':
                            return (
                                <ApplicationInfo
                                    navigation={navigation}
                                    step={step}
                                    info={info}
                                    setInfo={setInfo}
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    progressValue={progressValue}
                                    validationProgress={validationProgress}
                                />
                            );
                        case 'Confirmation':
                            return (
                                <ConfirmOrder
                                    navigation={navigation}
                                    step={step}
                                    info={info}
                                    setInfo={setInfo}
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    progressValue={progressValue}
                                    validationProgress={validationProgress}
                                />
                            );
                        case 'Payment':
                            return (
                                <PaymentForm
                                    navigation={navigation}
                                    step={step}
                                    info={info}
                                    setInfo={setInfo}
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    progressValue={progressValue}
                                    validationProgress={validationProgress}
                                />
                            );
                        case 'Success':
                            return (
                                <Success
                                    navigation={navigation}
                                    currentStep={currentStep}
                                    setCurrentStep={setCurrentStep}
                                    setPristine={setPristine}
                                />
                            );
                    }
                })()}
            </div>
            {Prompt}
            <Footer />
        </Paper>
    );
};

export default TrademarkApplication;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundPosition: 'center',
        backgroundSize: 'cover', //'100% auto',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '75px',
        width: '100%',
        minHeight: window.innerHeight,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: window.innerHeight,
    },
    hero: {
        backgroundImage: '',
        display: 'flex',
        height: '100px',
    },
    title: {
        alignSelf: 'flex-end',
        fontSize: '32px',
        color: '#df3a48',
    },

    text: {
        fontSize: 30,
        fontWeight: 500,
    },
}));
