import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Card, Typography } from '@material-ui/core';
import { checkmarksTheme } from '../../styles/Themes';
import Alert from '@material-ui/lab/Alert';
import Divider from '@material-ui/core/Divider';

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

    const previousStep = () => {
        setCurrentStep(currentStep - 1); // assign currentStep to next step
        navigation.previous();
    };
    const nextStep = () => {
        setInfo({ ...info, infoConfirmed: true });
        setCurrentStep(currentStep + 1); // assign currentStep to next step
        navigation.next();
    };

    console.log('info: ', info);

    return (
        <Card className={classes.card}>
            <h1 className={classes.title}>Confirm Your Information</h1>
            {/* ////////////////////////////////////// Payment info ////////////////////////////////////////////*/}

            {/* ////////////////////////////////////// Organization name ////////////////////////////////////////////*/}
            {info.organizationName && (
                <div className={classes.textContainer}>
                    <Typography className={classes.subtitle} component="p">
                        Organization Name
                    </Typography>
                    <Typography className={classes.text} component="p">
                        {info.organizationName}
                    </Typography>
                </div>
            )}
            <Divider />
            {/* ////////////////////////////////////// First name ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    First Name
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.firstName}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Last Name ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Last Name
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.lastName}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Street Address ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Street Address
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.userStreetAddress}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// City ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    City
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.userCity}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Province ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Province
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.userProvince}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Postal Code ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Postal Code
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.userPostalCode}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Country ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Country
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.userCountry}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Agreed to Disclaimer (Termso of Service) ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Agreed To Terms of Service
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.agreedTermsOfService}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Email ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Email
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.email}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Phone ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Phone
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.phone}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Fax ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Fax
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.fax}
                </Typography>
            </div>
            <Divider />
            {/* ////////////////////////////////////// Trademark Types ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Trademark Types
                </Typography>
                {info.isText && (
                    <Typography className={classes.text} component="p">
                        {'Standard Characters'}
                    </Typography>
                )}
                {info.isLogo && (
                    <Typography className={classes.text} component="p">
                        {'Logo or Design'}
                    </Typography>
                )}
                {info.isOther && (
                    <Typography className={classes.text} component="p">
                        {'Other'}
                    </Typography>
                )}
            </div>
            <Divider />
            {/* ////////////////////////////////////// Classes Selected ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Classes Selected
                </Typography>
                {info.classesSelected.length > 0 ? (
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        {info.classesSelected.map((niceClass, index) => {
                            return (
                                <Typography
                                    key={index}
                                    className={classes.text}
                                    component="p"
                                >
                                    {niceClass.id +
                                        ' - ' +
                                        niceClass.description}
                                </Typography>
                            );
                        })}
                    </Box>
                ) : (
                    <Typography className={classes.text} component="p">
                        None
                    </Typography>
                )}
            </div>
            <Divider />
            {/* ////////////////////////////////////// Terms Selected ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Terms Selected
                </Typography>
                {info.termsSelected.length > 0 ? (
                    <Box style={{ display: 'flex', flexDirection: 'column' }}>
                        {info.termsSelected.map((term, index) => {
                            return (
                                <Typography
                                    key={index}
                                    className={classes.text}
                                    component="p"
                                >
                                    {term.id + ' - ' + term.termName}
                                </Typography>
                            );
                        })}
                    </Box>
                ) : (
                    <Typography className={classes.text} component="p">
                        None
                    </Typography>
                )}
            </div>
            <Divider />
            {/* //////////////////////////////////////  Filed in other country  ////////////////////////////////////////////*/}
            <div className={classes.textContainer}>
                <Typography className={classes.subtitle} component="p">
                    Filed in other country
                </Typography>
                <Typography className={classes.text} component="p">
                    {info.filedInOtherCountry ? 'Yes' : 'No'}
                </Typography>
            </div>
            <Divider />
            {info.filedInOtherCountry && (
                <>
                    <div className={classes.textContainer}>
                        <Typography className={classes.subtitle} component="p">
                            Country of filing:
                        </Typography>
                        <Typography className={classes.text} component="p">
                            {info.countryOfFiling}
                        </Typography>
                    </div>
                </>
            )}

            <div className={classes.buttonContainer}>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.backButton}
                    onClick={() => previousStep()}
                >
                    Back
                </Button>
                <Button
                    className={classes.continueButton}
                    type="submit"
                    variant="contained"
                    onClick={() => nextStep()}
                >
                    Confirm
                </Button>
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
    textContainer: {
        display: 'flex',
    },
    subtitle: {
        // color: '#808080',
        color: 'black',
        fontSize: '12px',
        margin: '2%',
        width: '40%',
        fontWeight: 'bold',
        [theme.breakpoints.between('sm', 'md')]: {
            fontSize: '15px',
            width: '25%',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '15px',
            width: '20%',
        },
    },
    text: {
        color: '#black',
        fontSize: '12px',
        margin: '2%',
        [theme.breakpoints.up('sm')]: {
            fontSize: '15px',
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
        width: '30%',
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
        width: '30%',
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
