import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, TextField } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export default function IndividualForm({ user, setUser, navigation }) {
    const classes = useStyles();

    return (
        <div>
            <FormControl fullWidth={true}>
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
                    placeholder="First Name"
                    type="text"
                    value={user.firstName}
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
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
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
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
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
                <TextField
                    className={classes.input}
                    variant="outlined"
                    size="small"
                    placeholder="Street Address"
                    type="text"
                    // value={user.firstName}
                    autoComplete="on"
                    // onChange={(e) =>
                    //     setUser({
                    //         ...user,
                    //         firstName: e.target.value,
                    //     })
                    // }
                />
            </FormControl>
            <div className={classes.flexContainer}>
                <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    // value={creditCardInfo.city}
                    autoComplete="on"
                    // onChange={(e) =>
                    //     setCreditCardInfo({
                    //         ...creditCardInfo,
                    //         city: e.target.value,
                    //     })
                    // }
                />
                <TextField
                    id="outlined-basic"
                    label="Province"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    // value={creditCardInfo.province}
                    autoComplete="on"
                    // onChange={(e) =>
                    //     setCreditCardInfo({
                    //         ...creditCardInfo,
                    //         province: e.target.value,
                    //     })
                    // }
                />
            </div>
            <div className={classes.flexContainer}>
                <TextField
                    id="outlined-basic"
                    label="Postal Code"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    // value={creditCardInfo.postalCode}
                    autoComplete="on"
                    // onChange={(e) =>
                    //     setCreditCardInfo({
                    //         ...creditCardInfo,
                    //         postalCode: e.target.value,
                    //     })
                    // }
                />

                <TextField
                    id="outlined-basic"
                    label="Country"
                    variant="outlined"
                    size="small"
                    className={classes.flexInput}
                    type="text"
                    // value={creditCardInfo.country}
                    autoComplete="on"
                    // onChange={(e) =>
                    //     setCreditCardInfo({
                    //         ...creditCardInfo,
                    //         country: e.target.value,
                    //     })
                    // }
                />
            </div>
            <Alert severity="info" className={classes.alert}>
                Helper section with brief legal information, assisting the
                client through the process.
            </Alert>
            <div className={classes.nextButtonContainer}>
                <Button
                    className={classes.nextButton}
                    onClick={() => navigation.next()}
                >
                    Next Step
                </Button>
            </div>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    input: {
        width: '80%',
        margin: '3% auto',
        borderRadius: '10px',
        [theme.breakpoints.up('sm')]: {
            margin: '2% auto',
        },
    },
    flexInput: {
        width: '80%',
        margin: '3%',
        borderRadius: '10px',
        '&:focus': {
            outline: 'none',
        },
        [theme.breakpoints.up('sm')]: {
            width: '38%',
            margin: '2%',
        },
    },
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
        height: '50px',
        borderRadius: '10px',
        fontSize: '12px',
    },

    alert: {
        margin: '2% auto',
        color: '#2a9df4',
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
        margin: '0 auto 4% auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            margin: ' 4% auto 0 auto',
            width: '30%',
        },
    },
}));
