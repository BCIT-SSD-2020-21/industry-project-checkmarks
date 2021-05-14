import React, { useState, useEffect } from 'react';
import { useStep } from 'react-hooks-helper';
import { Paper } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuAppBar from './components/AppBar';
import Landing from './layouts/Landing';
import TrademarkApplication from './layouts/TrademarkApplication';
import { sumProgressValue, validateForm } from './utils/FormValidation';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });
    const lightTheme = createMuiTheme({
        palette: {
            type: 'light',
        },
    });

    // DRAWER
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
        // setProgressBarPosition(1)
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
        // setProgressBarPosition(0)
    };

    // form information
    const [info, setInfo] = useState({
        //Application Information
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

    // Trademark Application Form Steps
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
    const { step, navigation } = useStep({
        steps,
        initialStep: 0,
    });

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper>
                <Router>
                    <MenuAppBar
                        navigation={navigation}
                        step={step}
                        steps={steps}
                        progressValue={progressValue}
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        drawerOpen={drawerOpen}
                        handleDrawerOpen={handleDrawerOpen}
                        handleDrawerClose={handleDrawerClose}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Landing darkMode={darkMode} />
                        </Route>
                        <Route path="/application">
                            <TrademarkApplication
                                navigation={navigation}
                                step={step}
                                steps={steps}
                                info={info}
                                setInfo={setInfo}
                                progressValue={progressValue}
                                setProgressValue={setProgressValue}
                                validationProgress={validationProgress}
                                setValidationProgress={setValidationProgress}
                                darkMode={darkMode}
                                drawerOpen={drawerOpen}
                            />
                        </Route>
                    </Switch>
                </Router>
            </Paper>
        </ThemeProvider>
    );
}
