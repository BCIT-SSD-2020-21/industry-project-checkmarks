import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Card,
    FormControlLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from '@material-ui/core';
import { checkmarksTheme } from '../../styles/Themes';
import Alert from '@material-ui/lab/Alert';
import Checkmark from '../Checkmark';

const CountryCard = ({
    navigation,
    step,
    info,
    setInfo,
    currentStep,
    setCurrentStep,
    progressValue,
    validationProgress,
}) => {
    const classes = useStyles();

    const previousStep = () => {
        setCurrentStep(currentStep - 1); // assign currentStep to next step
        navigation.previous();
    };
    const nextStep = () => {
        setCurrentStep(currentStep + 1); // assign currentStep to next step
        navigation.next();
    };

    return (
        <Card className={classes.countryCard}>
            <h1 className={classes.title}> International Information</h1>
            <div className={classes.formContainer}>
                <Typography className={classes.question}>
                    Have you filed or applied for this trademark in any other
                    country?
                </Typography>

                <Box className={classes.selectionContainer}>
                    <RadioGroup
                        className={classes.radioContainer}
                        aria-label="userType"
                        id="userType"
                        name="userType"
                        value={info.filedInOtherCountry}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                filedInOtherCountry: e.target.value,
                                countryOfFiling: '',
                                fillingDate: '',
                                fillingNumber: '',
                            })
                        }
                    >
                        <FormControlLabel
                            value="Yes"
                            control={<Radio />}
                            label="Yes"
                        />
                        <FormControlLabel
                            value="No"
                            control={<Radio />}
                            label="No"
                        />
                    </RadioGroup>
                    <Box className={classes.checkmarkContainer}>
                        <Checkmark
                            value={validationProgress.internationalFilingInfo}
                        />
                    </Box>
                </Box>
                {info.filedInOtherCountry == 'Yes' && (
                    <div className={classes.form}>
                        <Typography className={classes.text}>
                            Please fill out information below, if known.
                        </Typography>
                        <TextField
                            className={classes.input}
                            id="outlined-basic"
                            label="Country of filing"
                            variant="outlined"
                            size="small"
                            value={info.countryOfFiling}
                            onChange={(e) =>
                                setInfo({
                                    ...info,
                                    countryOfFiling: e.target.value,
                                })
                            }
                        />
                        <TextField
                            className={classes.input}
                            id="outlined-basic"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Filing date"
                            variant="outlined"
                            size="small"
                            type="date"
                            value={info.fillingDate}
                            onChange={(e) =>
                                setInfo({
                                    ...info,
                                    fillingDate: e.target.value,
                                })
                            }
                        />
                        <TextField
                            className={classes.input}
                            id="outlined-basic"
                            label="Application file number"
                            variant="outlined"
                            size="small"
                            value={info.fillingNumber}
                            onChange={(e) =>
                                setInfo({
                                    ...info,
                                    fillingNumber: e.target.value,
                                })
                            }
                        />
                    </div>
                )}
            </div>
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
                    disabled={progressValue < step.progressValueEnd}
                >
                    Continue
                </Button>
            </div>
        </Card>
    );
};

export default CountryCard;

const useStyles = makeStyles((theme) => ({
    countryCard: {
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
    selectionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    checkmarkContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: '10px',
    },
    title: {
        color: '#df3a48',
        marginBottom: '5%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        fontWeight: 'bold',
        fontSize: '14px',
        marginTop: '2% ',
    },
    question: {
        fontWeight: 'bold',
        marginTop: '2% ',
        marginBottom: '2%',
    },
    input: {
        marginTop: '5%',
        [theme.breakpoints.up('md')]: {
            marginTop: '3%',
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
