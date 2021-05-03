import React, { useState, useEffect } from 'react';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo2 from '../assets/images/CheckmarksLogo2.png';
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

const TrademarkApplication = () => {
    const classes = useStyles();

    //
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
        OtherTypes: [],

        characterText: '',
        fileName: '',
        trademarkName: '',

        // Goods and Services
        classesSelected: [],
        termsSelected: [],
        amount: 150000,

        //International Information
        filedInOtherCountry: false,
        countryOfFiling: '',
        fillingDate: '',
        fillingNumber: '',
    });

    //
    const [inputValidationValue, setInputValidationValue] = useState({
        //Application Informarion
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

        //Trademark Type
        trademarkTypeFormCompleted: 0,
        // isText: false,
        // isLogo: false,
        // isOther: false,
        // OtherTypes: [],

        // characterText: '',
        // fileName: '',
        // trademarkName: '',

        // Goods and Services
        // classesSelected: [],
        // termsSelected: [],
        amountNotZero: 0,

        //International Information
        internationalFilingInfo: 0,
    });

    const validateForm = (info) => {
        // const namesRegex = /^[a-zA-Z]+$/; // from Original Project
        const namesRegex = /[^a-z]/i; // case insensitive
        const streetAddressRegex = /^[a-z0-9.-]+$/i;
        const emailRegex = /^\S+@\S+\.\S+$/; // from Original Project
        const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/; // from Original Project

        const newInputValidationValue = {};
        // Individual OR Organization NAME
        if (info.individualOrOrganization === 'Individual') {
            newInputValidationValue.individualOrOrganizationName = 100;
        } else if (info.individualOrOrganization === 'Organization') {
            if (info.individualOrOrganization) {
                newInputValidationValue.individualOrOrganizationName = 100;
            } else {
                newInputValidationValue.individualOrOrganizationName = 0;
            }
        }
        // FirstName
        if (info.firstName && !namesRegex.test(info.firstName)) {
            newInputValidationValue.firstName = 100;
        } else {
            newInputValidationValue.firstName = 0;
        }
        // LastName
        if (info.lastName && !namesRegex.test(info.lastName)) {
            newInputValidationValue.lastName = 100;
        } else {
            newInputValidationValue.lastName = 0;
        }
        // Email
        if (emailRegex.test(info.email)) {
            newInputValidationValue.email = 100;
        } else {
            newInputValidationValue.email = 0;
        }
        // Id Document Upload
        if (info.idDocumentUploaded) {
            newInputValidationValue.idDocumentUploaded = 100;
        } else {
            newInputValidationValue.idDocumentUploaded = 0;
        }
        // Street Address
        if (streetAddressRegex.test(info.userStreetAddress)) {
            newInputValidationValue.userStreetAddress = 100;
        } else {
            newInputValidationValue.userStreetAddress = 0;
        }
        // City
        if (namesRegex.test(info.userCity)) {
            newInputValidationValue.userCity = 100;
        } else {
            newInputValidationValue.userCity = 0;
        }
        // Province
        if (namesRegex.test(info.userProvince)) {
            newInputValidationValue.userProvince = 100;
        } else {
            newInputValidationValue.userProvince = 0;
        }
        // Postal Code
        if (info.userPostalCode) {
            newInputValidationValue.userPostalCode = 100;
        } else {
            newInputValidationValue.userPostalCode = 0;
        }
        // Country
        if (namesRegex.test(info.userCountry)) {
            newInputValidationValue.userCountry = 100;
        } else {
            newInputValidationValue.userCountry = 0;
        }
        // Agreed to Terms of Service
        if (info.agreedTermsOfService) {
            newInputValidationValue.agreedTermsOfService = 100;
        } else {
            newInputValidationValue.agreedTermsOfService = 0;
        }
        // Trademark Types Completed
        if (
            (info.isText && info.characterText) ||
            (info.isLogo && info.fileName) ||
            (info.isOther && info.OtherTypes.length > 0)
        ) {
            newInputValidationValue.trademarkTypeFormCompleted = 100;
        } else {
            newInputValidationValue.trademarkTypeFormCompleted = 0;
        }
        // Total Amount > 0 (At least one class was selected)
        if (info.amount > 0) {
            newInputValidationValue.amountNotZero = 100;
        } else {
            newInputValidationValue.amountNotZero = 0;
        }
        // Not Filed in Other Countr OR If Filed, Fields completed
        if (
            !info.filedInOtherCountry ||
            (info.filedInOtherCountry &&
                info.countryOfFiling &&
                info.fillingDate &&
                info.fillingNumber)
        ) {
            newInputValidationValue.internationalFilingInfo = 100;
        } else {
            newInputValidationValue.internationalFilingInfo = 0;
        }
        // Payment Information Provided

        setInputValidationValue(newInputValidationValue);
    };

    useEffect(() => {
        validateForm(info);
    }, [info]);

    const [Prompt, setDirty, setPristine] = PageLeavePrompt();
    console.log('inputValidationValue: ', inputValidationValue);
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
            <Progress step={step} steps={steps} info={info} />
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
                                />
                            );
                        case 'Goods-and-Services':
                            return (
                                <GoodsAndServices
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
                                />
                            );
                        case 'International-Information':
                            return (
                                <CountryCard
                                    navigation={navigation}
                                    info={info}
                                    setInfo={setInfo}
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
