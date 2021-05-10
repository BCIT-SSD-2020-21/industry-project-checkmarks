import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    TextField,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { checkmarksTheme } from '../../../styles/Themes';
import Checkmark from '../../Checkmark';

export default function IndividualForm({
    step,
    info,
    setInfo,
    currentStep,
    setCurrentStep,
    navigation,
    setDirty,
    progressValue,
    validationProgress,
}) {
    const classes = useStyles();

    //handle seclection of individual or organization
    const handleSelection = (e) => {
        setInfo({
            ...info,
            individualOrOrganization: e.target.value,
        });
    };

    // const [nextSectionUnlocked, setNextSectionUnlocked] = useState(false);
    // useEffect(() => {
    //     if (
    //         // Validation - if all true, unlock next
    //         validationProgress.individualOrOrganizationName > 0 &&
    //         validationProgress.firstName > 0 &&
    //         validationProgress.lastName > 0 &&
    //         validationProgress.email > 0 &&
    //         validationProgress.agreedTermsOfService > 0
    //     ) {
    //         setNextSectionUnlocked(true);
    //     } else {
    //         setNextSectionUnlocked(false);
    //     }
    // }, [nextSectionUnlocked]);

    // console.log('inputValidationValue: ', validationProgress);

    const nextStep = () => {
        // if (nextSectionUnlocked) {
        setCurrentStep(currentStep + 1); // assign currentStep to next step
        navigation.next();
        // }
    };

    setDirty();

    return (
        <div>
            {/* checkbox for indicidual or organization */}
            <div className={classes.selectionContainer}>
                <RadioGroup
                    row
                    aria-label="individualOrOrganization"
                    id="individualOrOrganization"
                    name="individualOrOrganization"
                    value={info.individualOrOrganization}
                    onClick={handleSelection}
                >
                    <FormControlLabel
                        value="Individual"
                        control={<Radio />}
                        label="Individual"
                    />
                    <FormControlLabel
                        value="Organization"
                        control={<Radio />}
                        label="Organization"
                    />
                </RadioGroup>
            </div>
            {/* ///////////////////////personal info///////////////////////*/}
            {info.individualOrOrganization == 'Organization' && (
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        size="small"
                        placeholder="Organization Name"
                        type="text"
                        value={info.organizationName}
                        autoComplete="on"
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                organizationName: e.target.value,
                            })
                        }
                    />
                    <Checkmark
                        value={validationProgress.individualOrOrganizationName}
                    />
                    {/* {inputValidationValue?.individualOrOrganizationName ? (
                        <CheckCircleOutlinedIcon
                            className={classes.checkmark}
                        />
                    ) : (
                        <ErrorOutlineIcon className={classes.checkmark} />
                    )} */}
                </FormControl>
            )}

            <FormControl fullWidth={true} className={classes.field}>
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
                    placeholder="First Name"
                    type="text"
                    value={info.firstName}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            firstName: e.target.value,
                        })
                    }
                />
                <Checkmark value={validationProgress.firstName} />
            </FormControl>
            <FormControl fullWidth={true} className={classes.field}>
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
                    placeholder="Last Name"
                    type="text"
                    value={info.lastName}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            lastName: e.target.value,
                        })
                    }
                />
                <Checkmark value={validationProgress.lastName} />
            </FormControl>
            <FormControl fullWidth={true} className={classes.field}>
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
                    placeholder="Email"
                    type="email"
                    value={info.email}
                    autoComplete="on"
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            email: e.target.value,
                        })
                    }
                />
                <Checkmark value={validationProgress.email} />
            </FormControl>
            <div className={classes.field}>
                <Button
                    onClick={() =>
                        setInfo({
                            ...info,
                            idDocumentUploaded: true,
                        })
                    }
                    type="submit"
                    variant="contained"
                    className={classes.uploadButton}
                >
                    Upload ID Document
                </Button>
                <Checkmark value={validationProgress.idDocumentUploaded} />
            </div>
            {/* /////////////////////////// address /////////////////////// */}
            <FormControl fullWidth={true} className={classes.field}>
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
                    placeholder="Street Address"
                    type="text"
                    autoComplete="on"
                    value={info.userStreetAddress}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            userStreetAddress: e.target.value,
                        })
                    }
                />
                <Checkmark value={validationProgress.userStreetAddress} />
            </FormControl>
            <div className={classes.flexContainer}>
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        id="outlined-basic"
                        label="City"
                        variant="outlined"
                        size="small"
                        className={classes.flexInput}
                        type="text"
                        autoComplete="on"
                        value={info.userCity}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                userCity: e.target.value,
                            })
                        }
                    />
                    <Checkmark value={validationProgress.userCity} />
                </FormControl>
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        id="outlined-basic"
                        label="Province"
                        variant="outlined"
                        size="small"
                        className={classes.flexInput}
                        type="text"
                        autoComplete="on"
                        value={info.userProvince}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                userProvince: e.target.value,
                            })
                        }
                    />
                    <Checkmark value={validationProgress.userProvince} />
                </FormControl>
            </div>
            <div className={classes.flexContainer}>
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        id="outlined-basic"
                        label="Postal Code"
                        variant="outlined"
                        size="small"
                        className={classes.flexInput}
                        type="text"
                        autoComplete="on"
                        value={info.userPostalCode}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                userPostalCode: e.target.value,
                            })
                        }
                    />
                    <Checkmark value={validationProgress.userPostalCode} />
                </FormControl>
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        id="outlined-basic"
                        label="Country"
                        variant="outlined"
                        size="small"
                        className={classes.flexInput}
                        type="text"
                        autoComplete="on"
                        value={info.userCountry}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                userCountry: e.target.value,
                            })
                        }
                    />
                    <Checkmark value={validationProgress.userCountry} />
                </FormControl>
            </div>
            <Alert severity="info" className={classes.alert}>
                Helper section with brief legal information, assisting the
                client through the process.
            </Alert>
            <Box className={classes.disclaimer}>
                <Alert severity="info" className={classes.alertRed}>
                    Using Checkmarks does not guarantee that your Trademark will
                    be registered. Your application will be reviewed by a lawyer
                    prior to submission, however approval and registration
                    determined upon submission to the Canadian Intellectual
                    Property Office.
                </Alert>
                <FormControl fullWidth={true} className={classes.field}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={info.agreedTermsOfService}
                                onChange={() =>
                                    setInfo({
                                        ...info,
                                        agreedTermsOfService: !info.agreedTermsOfService,
                                    })
                                }
                                name="AgreeTermsOfService"
                            />
                        }
                        label="I understand."
                    />
                    <Checkmark
                        value={validationProgress.agreedTermsOfService}
                    />
                </FormControl>
            </Box>
            <div className={classes.nextButtonContainer}>
                <Button
                    className={classes.nextButton}
                    onClick={() => nextStep()}
                    disabled={progressValue < step.progressValueEnd}
                >
                    Next Step
                </Button>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
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
    selectionContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    field: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        // position: 'relative',
        width: '100%',
        margin: '3% auto',
        borderRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            margin: '2% auto',
        },
    },
    checkmark: {
        // position: 'absolute',
    },
    flexInput: {
        width: '100%',
        margin: '3% 0',
        borderRadius: '10px',
        '&:focus': {
            outline: 'none',
        },
        // [theme.breakpoints.up('sm')]: {
        //     width: '38%',
        //     margin: '2%',
        // },
    },
    uploadButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%',
    },
    uploadButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '85%',
        height: '40px',
        borderRadius: '10px',
        fontSize: '12px',
    },
    nextButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nextButton: {
        backgroundColor: '#DF3A48',
        color: '#FFF',
        width: '20%',
        height: '30px',
        fontWeight: 'bold',
        fontSize: '10px',
        borderRadius: '10px',
        margin: '0 auto 5% auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            margin: ' 4% auto 2% auto',
            width: '30%',
        },
    },
    alert: {
        color: '#2a9df4',
        margin: '5% auto 5% auto',
        fontSize: '12px',
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '5% auto 2% auto',
        },
        [theme.breakpoints.up('md')]: {
            margin: '0 auto 5% auto',
        },
    },
    disclaimer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    alertRed: {
        color: checkmarksTheme.buttonTextSecondary,
        // backgroundColor: checkmarksTheme.bgSecondary,
    },
}));
