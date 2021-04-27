import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

export default function Success() {
    const history = useHistory();
    const classes = useStyles();

    //handle back button
    const handleSubmit = () => {
        history.push('/');
    };

    return (
        <div className={classes.root}>
            <h1>
                <b>Thank You For Your Submission!</b>
            </h1>
            <h3>
                Your Trademark Registration request has been sent. You will
                receive an email within 2-3 business days regarding your
                request.
            </h3>
            <br />
            <Button
                variant="contained"
                className={classes.button}
                onClick={handleSubmit}
            >
                Return to Home page
            </Button>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
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
}));
