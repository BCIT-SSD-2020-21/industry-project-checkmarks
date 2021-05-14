import React, { useState, useEffect } from 'react';
import { Box, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';
import bannerImage from '../assets/images/bg-application-yann-allegre.jpg';
import Progress from '../components/TrademarkApplicationPage/Progress';
import CountryCard from '../components/TrademarkApplicationPage/CountryCard';
import ConfirmOrder from '../components/TrademarkApplicationPage/ConfirmOrder';
import PaymentForm from '../components/TrademarkApplicationPage/PaymentForm';
import TrademarkForm from '../components/TrademarkApplicationPage/TrademarkType/index';
import GoodsAndServices from '../components/TrademarkApplicationPage/GoodsAndServices';
import Success from '../components/TrademarkApplicationPage/Success';
import ApplicationInfo from '../components/TrademarkApplicationPage/ApplicationInfo/index';
import PageLeavePrompt from '../utils/PageLeavePrompt';
import Footer from '../components/LandingPage/Footer';

const TrademarkApplication = ({
    navigation,
    step,
    steps,
    info,
    setInfo,
    progressValue,
    validationProgress,
    darkMode,
    drawerOpen,
}) => {
    const classes = useStyles();

    const [currentStep, setCurrentStep] = useState(0);
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentStep]);

    // custon hook, "Discard changes?" on Leave Page (defined in  utils folder)
    const [Prompt, setDirty, setPristine] = PageLeavePrompt();

    return (
        <Paper
            className={classes.root}
            style={{
                backgroundImage: `url(${bannerImage})`,
                backgroundSize: 'auto 2900px',
            }}
        >
            <Paper
                style={{
                    backgroundColor: darkMode
                        ? checkmarksTheme.bgOpaque30Dark
                        : checkmarksTheme.bgOpaque30,
                    width: '100%',
                }}
            >
                <div className={classes.container}>
                    <Progress
                        step={step}
                        steps={steps}
                        info={info}
                        progressValue={progressValue}
                        validationProgress={validationProgress}
                        drawerOpen={drawerOpen}
                    />
                    <Box className={classes.hero}>
                        <Typography className={classes.title}>
                            {step.id}
                        </Typography>
                    </Box>
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
                                        setInfo={setInfo}
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
        </Paper>
    );
};

export default TrademarkApplication;

const useStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',

        minHeight: window.innerHeight,
        width: '100%',
    },
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '80px',
        minHeight: window.innerHeight,
        width: '100%',
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
