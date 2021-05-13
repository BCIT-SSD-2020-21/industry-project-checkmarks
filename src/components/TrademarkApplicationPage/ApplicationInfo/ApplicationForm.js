import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    RadioGroup,
    Select,
    TextField,
    Radio,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { checkmarksTheme } from '../../../styles/Themes';
import { canadaProvinces, unitedStates } from '../../../utils/FormValidation';
import Checkmark from '../../Checkmark';
import IdUpload from '../../IdUpload';
import TermsAndAgreementsModal from './TermsAndAgreementsModal';

export default function IndividualForm({
    step,
    info,
    setInfo,
    currentStep,
    setCurrentStep,
    navigation,
    progressValue,
    validationProgress,
}) {
    const classes = useStyles();
    const [handle, setHandle] = useState('');

    //Modal State
    const [open, setOpen] = useState(false);

    //handle selection of individual or organization
    const handleSelection = (e) => {
        setInfo({
            ...info,
            individualOrOrganization: e.target.value,
        });
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1); // assign currentStep to next step
        navigation.next();
    };
    const previousStep = () => {
        setCurrentStep(currentStep - 1); // assign currentStep to next step
        navigation.previous();
    };

    return (
        <div>
            {/* checkbox for individual or organization */}
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
                    multiline
                    InputProps={{
                        className: classes.multilineColor,
                    }}
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
                    multiline
                    InputProps={{
                        className: classes.multilineColor,
                    }}
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
                    multiline
                    InputProps={{
                        className: classes.multilineColor,
                    }}
                />
                <Checkmark value={validationProgress.email} />
            </FormControl>

            <div className={classes.flexContainer}>
                {/* /// Phone /// */}
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        size="small"
                        placeholder="Phone number"
                        type="text"
                        value={info.phone}
                        autoComplete="on"
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                phone: e.target.value,
                            })
                        }
                        multiline
                        InputProps={{
                            className: classes.multilineColor,
                        }}
                    />
                    <Checkmark value={validationProgress.phone} />
                </FormControl>

                {/* /// Fax /// */}
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        size="small"
                        placeholder="Fax number (Optional)"
                        type="text"
                        value={info.fax}
                        autoComplete="on"
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                fax: e.target.value,
                            })
                        }
                        multiline
                        InputProps={{
                            className: classes.multilineColor,
                        }}
                    />
                </FormControl>
            </div>

            <Alert severity="info" className={classes.idAlert}>
                Please upload your photo ID, file should be less than 2Mb.
            </Alert>

            {/* ============================ */}
            {/* ======== Upload ID ========= */}
            {/* ============================ */}
            <FormControl className={classes.fieldDropDown}>
                <IdUpload setHandle={setHandle} info={info} setInfo={setInfo} />
                <Checkmark value={validationProgress.idDocumentUploaded} />
            </FormControl>
            {/* /////////////////////////// address /////////////////////// */}
            <FormControl fullWidth={true} className={classes.fieldDropDown}>
                <InputLabel
                    className={classes.inputLabel}
                    id="demo-simple-select-helper-label"
                >
                    Country
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    autoComplete="off"
                    value={info.userCountry}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            userCountry: e.target.value,
                        })
                    }
                >
                    <MenuItem value={'Canada'}>Canada</MenuItem>
                    <MenuItem value={'USA'}>USA</MenuItem>
                </Select>
                <Checkmark value={validationProgress.userCountry} />
            </FormControl>

            <FormControl fullWidth={true} className={classes.fieldDropDown}>
                <InputLabel
                    className={classes.inputLabel}
                    id="demo-simple-select-helper-label"
                >
                    {info.userCountry === 'Canada' ? 'Province' : 'State'}
                </InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="outlined-basic"
                    label="Province"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    autoComplete="on"
                    disabled={!info.userCountry}
                    value={info.userProvince}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            userProvince: e.target.value,
                        })
                    }
                >
                    {info.userCountry === 'Canada' &&
                        canadaProvinces.map((province, index) => {
                            return (
                                <MenuItem key={index} value={province.name}>
                                    {province.name}
                                </MenuItem>
                            );
                        })}
                    {info.userCountry === 'USA' &&
                        unitedStates.map((state, index) => {
                            return (
                                <MenuItem key={index} value={state.name}>
                                    {state.name}
                                </MenuItem>
                            );
                        })}
                </Select>
                <Checkmark value={validationProgress.userProvince} />
            </FormControl>

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
                    multiline
                    InputProps={{
                        className: classes.multilineColor,
                    }}
                />
                <Checkmark value={validationProgress.userStreetAddress} />
            </FormControl>
            <div className={classes.flexContainer}>
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        className={classes.input}
                        variant="outlined"
                        size="small"
                        placeholder="City"
                        type="text"
                        autoComplete="on"
                        value={info.userCity}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                userCity: e.target.value,
                            })
                        }
                        multiline
                        InputProps={{
                            className: classes.multilineColor,
                        }}
                    />
                    <Checkmark value={validationProgress.userCity} />
                </FormControl>
            </div>
            <div className={classes.flexContainer}>
                <FormControl fullWidth={true} className={classes.field}>
                    <TextField
                        className={classes.input}
                        placeholder={
                            info.userCountry === 'Canada'
                                ? 'Postal Code'
                                : 'Zip Code'
                        }
                        variant="outlined"
                        size="small"
                        type="text"
                        autoComplete="on"
                        value={info.userPostalCode}
                        onChange={(e) =>
                            setInfo({
                                ...info,
                                userPostalCode: e.target.value,
                            })
                        }
                        multiline
                        InputProps={{
                            className: classes.multilineColor,
                        }}
                    />

                    <Checkmark value={validationProgress.userPostalCode} />
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
                    <FormControl className={classes.field}>
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
                </Alert>

                {/* ======================== */}
                {/* = Terms and Agreemment = */}
                {/* ======================== */}

                <FormControl className={classes.field}>
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
                    />
                    {/* Terms and Agreement Modal  */}{' '}
                    <strong className={classes.terms}>I agree with the</strong>
                    <TermsAndAgreementsModal open={open} setOpen={setOpen} />
                    <Checkmark
                        value={validationProgress.agreedTermsOfService}
                    />
                </FormControl>
            </Box>
            <div className={classes.buttonContainer}>
                <Button
                    className={classes.backButton}
                    onClick={() => previousStep()}
                >
                    Back
                </Button>
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
    fieldDropDown: {
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
    inputLabel: {
        marginLeft: '3%',
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

    // // Text field styles
    // multilineColor: {
    //     color: checkmarksTheme.textValue1,
    // },

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '5%',
        marginBottom: '5%',
    },
    nextButton: {
        backgroundColor: '#DF3A48',
        color: '#FFF',
        width: '35%',
        height: '35px',
        fontWeight: 'bold',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            margin: ' 4% auto 2% auto',
            // width: '30%',
        },
    },
    backButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        border: '1px solid #df3a48',
        width: '35%',
        height: '35px',
        fontWeight: 'bold',
        fontSize: '10px',
        borderRadius: '10px',
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
    idAlert: {
        color: '#2a9df4',
        margin: '3% auto 5% auto',
        fontSize: '12px',
        [theme.breakpoints.between('sm', 'md')]: {
            margin: '5% auto 3% auto',
        },
        [theme.breakpoints.up('md')]: {
            margin: '3% auto 2% auto',
        },
    },
    disclaimer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    alertRed: {
        color: checkmarksTheme.buttonTextSecondary,
    },
    terms: {
        color: checkmarksTheme.textValue1,
    },
}));
