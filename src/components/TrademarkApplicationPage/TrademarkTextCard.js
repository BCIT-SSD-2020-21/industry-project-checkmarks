import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Alert from '@material-ui/lab/Alert';
import TrademarkAppSearchBar from '../TrademarkAppSearchBar';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const TextSearchCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchCard}>
            <p style={{ color: 'red', fontSize: 15 }}>
                Type out your trademark
            </p>
            <TrademarkAppSearchBar />

            <Alert severity="info" className={classes.alert}>
                A Trademark cannot be 'primarily merely a surname'
            </Alert>
        </div>
    );
};

export default TextSearchCard;
const useStyles = makeStyles((theme) => ({
    searchCard: {
        width: '75%',
        margin: 'auto',
        marginBottom: '3%',
    },
    alert: {
        width: '80%',
        margin: '2% auto',
        color: '#2a9df4',
        fontSize: '12px',
    },
}));
