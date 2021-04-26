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

const CountryCard = () => {
    const classes = useStyles();

    const [checked, setChecked] = useState('');
    const [country, setCountry] = useState('');
    const [date, setDate] = useState('');
    const [appNumber, setAppNumber] = useState('');

    //handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Successfully Confirm ');
    };

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
                    onChange={(e) => setChecked(e.target.value)}
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
                {checked == 'Yes' && (
                    <div className={classes.form}>
                        <Typography className={classes.text}>
                            Please fill out information below (if known)
                        </Typography>
                        <TextField
                            id="outlined-basic"
                            label="Country of filing"
                            variant="outlined"
                            size="small"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className={classes.input}
                        />
                        <TextField
                            id="outlined-basic"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            label="Filing date"
                            variant="outlined"
                            size="small"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className={classes.input}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Application file number"
                            variant="outlined"
                            size="small"
                            value={appNumber}
                            onChange={(e) => setAppNumber(e.target.value)}
                            className={classes.input}
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
                    onClick={handleSubmit}
                    className={classes.nextButton}
                >
                    Confirm and go to payment
                </Button>
            </div>
        </Card>
    );
};

export default CountryCard;
const useStyles = makeStyles((theme) => ({
    countryCard: {
        padding: '2%',
        marginTop: '5%',
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
    alert: {
        margin: '3% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
