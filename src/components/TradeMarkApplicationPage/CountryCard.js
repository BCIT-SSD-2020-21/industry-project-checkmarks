import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Radio from '@material-ui/core/Radio';
import Alert from '@material-ui/lab/Alert';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';

const CountryCard = () => {
    const classes = useStyles();
    return (
        <Card className={classes.countryCard}>
            <p style={{ color: 'red', fontSize: 15 }}>
                Have you filed or applied for this trademark in any other
                country?
            </p>
            <div className={classes.formContainer}>
                {/* ===================== */}
                {/* No option radio card  */}
                {/* ===================== */}
                <FormControlLabel value="No" control={<Radio />} label="No" />
                {/* ================ */}
                {/* Yes form payment */}
                {/* ================ */}
                <div className={classes.form}>
                    <FormControlLabel
                        value="Yes"
                        control={<Radio />}
                        label="Yes"
                    />
                    <p style={{ color: 'red', fontSize: 15 }}>
                        Please fill out information below (if known)
                    </p>
                    <TextField
                        id="outlined-basic"
                        label="Country of filing"
                        variant="outlined"
                        size="small"
                        className={classes.input}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Filing date"
                        variant="outlined"
                        size="small"
                        className={classes.input}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Application file number"
                        variant="outlined"
                        size="small"
                        className={classes.input}
                    />
                </div>
            </div>

            <Alert severity="info" className={classes.alert}>
                Helper Section with brief legal information, assisting the
                client through the process
            </Alert>
            <div className={classes.buttonContainer}>
                <button className={classes.nextButton}>Next Step</button>
            </div>
        </Card>
    );
};

export default CountryCard;
const useStyles = makeStyles((theme) => ({
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
    countryCard: {
        marginTop: '5%',
        width: '75%',
    },
    nextButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '40%',
        height: '50px',
        borderRadius: '30px',
        marginBottom: '5%',
        margin: 'auto',
        [theme.breakpoints.up('sm')]: {
            width: '20%',
        },
    },

    formContainer: {
        paddingTop: '3%',
        paddingBottom: '3%',
        margin: '3%',
    },

    form: {
        display: 'flex',
        flexDirection: 'column',
    },

    input: {
        margin: '1%',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
    },
}));
