import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, Card } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

export default function IndividualForm({ user, setUser }) {
    const classes = useStyles();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //handle register as individual
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
        <div className={classes.root}>
            <Card className={classes.card}>
                <FormControl fullWidth={true}>
                    <input
                        className={classes.input}
                        placeholder="Email"
                        type="email"
                        value={email}
                        autoComplete="on"
                        onChange={(e) =>
                            setEmail({
                                email: e.target.value,
                            })
                        }
                    />
                </FormControl>
                <FormControl fullWidth={true}>
                    <input
                        className={classes.input}
                        placeholder="Password"
                        type="password"
                        value={password}
                        autoComplete="on"
                        onChange={(e) =>
                            setPassword({
                                password: e.target.value,
                            })
                        }
                    />
                </FormControl>
                <div className={classes.submitButtonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        onClick={handleSignUp}
                        className={classes.signUpButton}
                    >
                        Sign Up
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
            </Card>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        padding: '5%',
        width: '50%',
    },
    input: {
        width: '60%',
        margin: '3% auto',
        padding: '3%',
        borderRadius: '10px',
        '&:focus': {
            outline: 'none',
        },
        border: '1px solid #ccc',
    },
    submitButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%',
    },
    loginButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '50%',
        height: '40px',
        margin: '3%',
        borderRadius: '10px',
        fontSize: '10px',
    },
    signUpButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        width: '50%',
        height: '40px',
        fontSize: '10px',
        margin: '3%',
        borderRadius: '10px',
        border: '1px solid #df3a48',
    },
}));
