import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core';
import { checkmarksTheme } from '../../../styles/Themes';
import ApplicationForm from './ApplicationForm';

export default function ApplicationInfo({
    navigation,
    step,
    info,
    setInfo,
    currentStep,
    setCurrentStep,
    setDirty,
    progressValue,
    validationProgress,
}) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <Typography className={classes.heading}>
                {' '}
                First, some information about you.{' '}
            </Typography>
            <Typography>
                Are you registering as an{' '}
                <span style={{ color: '#DF3A48' }}>
                    <strong>individual </strong>{' '}
                </span>
                , or representing an{' '}
                <span style={{ color: '#DF3A48' }}>
                    <strong>organization </strong>{' '}
                </span>
                ?
            </Typography>
            <div className={classes.formContainer}>
                <ApplicationForm
                    step={step}
                    info={info}
                    setInfo={setInfo}
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    navigation={navigation}
                    setDirty={setDirty}
                    progressValue={progressValue}
                    validationProgress={validationProgress}
                />
            </div>
        </Card>
    );
}
const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: checkmarksTheme.transparentCard,
        borderRadius: '15px',
        border: '1px solid #696969',
        padding: '0 3% 5% 5%',
        margin: '3%',
        width: '80%',
        [theme.breakpoints.up('md')]: {
            width: '60%',
            padding: '0 2% ',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            padding: '0 5% 2% 5%',
        },
    },
    formContainer: {
        marginTop: '5%',
    },
    heading: {
        fontSize: '24px',
        color: checkmarksTheme.textPrimaryDark,
        marginBottom: '5%',
    },
}));
