import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

export default function IndividualForm({ user, setUser }) {
    const classes = useStyles();

    //handle register as organzational
    const handleRegister = async (event) => {
        event.preventDefault();
    };

    //handle Existing User
    const haveAccountButton = async (event) => {
        event.preventDefault();
    };
    console.log(user);
    return (
        <div>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="First Name"
                    type="text"
                    value={user.firtstName}
                    autoComplete="on"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            firstName: e.target.value,
                        })
                    }
                />
            </FormControl>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="Last Name"
                    type="text"
                    value={user.lastName}
                    autoComplete="on"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            lastName: e.target.value,
                        })
                    }
                />
            </FormControl>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="Organization Name"
                    type="text"
                    value={user.organizationName}
                    autoComplete="on"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            organizationName: e.target.value,
                        })
                    }
                />
            </FormControl>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="Email"
                    type="email"
                    value={user.email}
                    autoComplete="on"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            email: e.target.value,
                        })
                    }
                />
                <div className={classes.uploadButtonContainer}>
                    <Button
                        type="submit"
                        variant="contained"
                        className={classes.uploadButton}
                    >
                        Upload ID Document
                    </Button>
                </div>
            </FormControl>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="Password"
                    type="password"
                    value={user.password}
                    autoComplete="on"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            password: e.target.value,
                        })
                    }
                />
            </FormControl>
            <FormControl fullWidth={true}>
                <input
                    className={classes.input}
                    placeholder="Confirm Password"
                    type="password"
                    value={user.confirmPassword}
                    autoComplete="on"
                    onChange={(e) =>
                        setUser({
                            ...user,
                            confirmPassword: e.target.value,
                        })
                    }
                />
            </FormControl>
            <Alert severity="info" className={classes.alert}>
                Helper section with brief legal information, assisting the
                client through the process.
            </Alert>
            <div className={classes.submitButtonContainer}>
                <Button
                    type="submit"
                    variant="contained"
                    onClick={haveAccountButton}
                    className={classes.haveAccountButton}
                >
                    Back
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    className={classes.submitButton}
                    onClick={handleRegister}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
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
    uploadButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%',
    },
    uploadButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '70%',
        height: '50px',
        borderRadius: '10px',
        fontSize: '10px',
    },
    submitButtonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '3%',
    },
    submitButton: {
        backgroundColor: '#df3a48',
        color: '#FFF',
        width: '40%',
        height: '50px',
        margin: '3%',
        borderRadius: '10px',
    },
    haveAccountButton: {
        color: '#df3a48',
        backgroundColor: '#FFF',
        fontWeight: 'bold',
        width: '40%',
        height: '50px',
        fontSize: '10px',
        margin: '3%',
        borderRadius: '10px',
        border: '1px solid #df3a48',
        [theme.breakpoints.down('xs')]: {
            fontSize: '8px',
        },
    },
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
