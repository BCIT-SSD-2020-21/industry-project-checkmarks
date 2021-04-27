import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    RadioGroup,
    Radio,
    FormControlLabel,
    TextField,
    Card,
    Button,
    Typography,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const CountryCard = ({ navigation, info, setInfo }) => {
    const classes = useStyles();

    return (
        <Card className={classes.countryCard}>
            <h1 className={classes.title}> International Information</h1>
            <div className={classes.formContainer}>
                <Typography className={classes.question}>
                    Have you filed or applied for this trademark in any other
                    country?
                </Typography>

                <RadioGroup
                    aria-label="userType"
                    id="userType"
                    name="userType"
                    value={info.filedInOtherCountry}
                    onChange={(e) =>
                        setInfo({
                            ...info,
                            filedInOtherCountry: e.target.value,
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
                {info.filedInOtherCountry == 'Yes' && (
                    <div className={classes.form}>
                        <Typography className={classes.text}>
                            Please fill out information below (if known)
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
                <Alert severity="info" className={classes.alert}>
                    Helper Section with brief legal information, assisting the
                    client through the process
                </Alert>
            </div>
            <div className={classes.buttonContainer}>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.backButton}
                    onClick={() => navigation.previous()}
                >
                    Back
                </Button>
                <Button
                    className={classes.continueButton}
                    type="submit"
                    variant="contained"
                    onClick={() => navigation.next()}
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
        padding: '0 2% ',
        margin: '3%',
        width: '75%',
    },
    title: {
        color: '#df3a48',
        marginBottom: '5%',
    },
    formContainer: {
        margin: '3%',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    text: {
        fontWeight: 'bold',
        marginTop: '2% ',
    },
    question: {
        fontWeight: 'bold',
        marginTop: '2% ',
        marginBottom: '2%',
    },
    input: {
        marginTop: '3%',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    nextButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        width: '50%',
        height: '30px',
        fontSize: '8px',
        margin: '3% auto',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.up('sm')]: {
            fontSize: '10px',
            width: '40%',
        },
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        margin: '4% 0',
    },
    continueButton: {
        color: '#FFF',
        backgroundColor: '#df3a48',
        fontWeight: 'bold',
        marginLeft: '1%',
        width: '20%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8px',
        },
    },
    backButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        width: '20%',
        height: '30px',
        fontSize: '10px',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8px',
        },
    },
    alert: {
        margin: '3% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
