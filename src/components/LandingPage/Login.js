import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, Card, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { checkmarksTheme } from '../../styles/Themes';

export default function IndividualForm() {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //handle login
    const handleLogin = async (event) => {
        event.preventDefault();
        alert('Successfully login');
    };

    //handle handle SignUp
    const handleSignUp = async (event) => {
        event.preventDefault();
        history.push('/Register');
    };

    return (
        <Card className={classes.container}>
            <Typography className={classes.title}>Login</Typography>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="Email"
                    type="email"
                    value={email}
                    autoComplete="on"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="Password"
                    type="password"
                    value={password}
                    autoComplete="on"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <div className={classes.submitButtonContainer}>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={handleSignUp}
                    className={classes.signUpButton}
                >
                    Register
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.loginButton}
                    onClick={handleLogin}
                >
                    Login
                </Button>
            </div>
            <Typography className={classes.text}>Forgot password?</Typography>
        </Card>
    );
}
const useStyles = makeStyles((theme) => ({
    container: {
        animation: '$shiftUp-login 0.5s',
        // animation: '$shiftUp-login 1s',
        backgroundColor: checkmarksTheme.bgDrawer,
        borderRadius: '25px',
        padding: '2% 8%',
        margin: 'auto',
        minWidth: 320,
        width: '80%',
        maxWidth: 500,
    },
    input: {
        border: '1px solid #ccc',
        borderRadius: '25px',
        fontSize: '12px',
        padding: '3% 6%',
        margin: '5% auto',
        width: '100%',
        '&:focus': {
            border: `1px solid ${checkmarksTheme.buttonTextSecondary}`,
            outline: 'none',
        },
    },
    title: {
        margin: '2%',
        fontSize: '24px',
        fontWeight: 'bold',
        color: checkmarksTheme.buttonTextSecondary,
        textAlign: 'center',
    },
    text: {
        color: checkmarksTheme.buttonTextSecondary,
        fontWeight: 'bold',
        padding: '2%',
        textAlign: 'right',
        fontSize: '14px',
    },
    submitButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '5% auto',
    },
    loginButton: {
        backgroundColor: checkmarksTheme.buttonSecondary,
        '&:hover': {
            color: checkmarksTheme.buttonPrimary,
            background: checkmarksTheme.hoverLight,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        borderRadius: '25px',
        color: checkmarksTheme.buttonTextSecondary,
        fontWeight: 'bold',
        opacity: 0.7,
        width: '45%',
    },
    signUpButton: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        '&:hover': {
            color: checkmarksTheme.buttonPrimary,
            background: checkmarksTheme.hoverSoft,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        borderRadius: '25px',
        color: checkmarksTheme.buttonTextPrimary,
        fontWeight: 'bold',
        fontWeight: 'bold',
        // height: '40px',
        opacity: 0.8,
        width: '45%',
    },
    '@keyframes shiftUp-login': {
        from: { transform: 'translateY(10%)' },
        to: { transform: 'translateY(0px)' },
    },
}));
