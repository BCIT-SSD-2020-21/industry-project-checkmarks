import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { FormControl, Input } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import InputAdornment from '@material-ui/core/InputAdornment';

const TextSearchCard = () => {
    const classes = useStyles();

    return (
        <div className={classes.searchCard}>
            <p style={{ color: 'red', fontSize: 15 }}>
                Type out your trademark
            </p>
            <FormControl>
                <Input
                    type="text"
                    startAdornment={
                        <InputAdornment position="start">
                            <CreateIcon />
                        </InputAdornment>
                    }
                />
            </FormControl>

            <Alert severity="info" className={classes.alert}>
                A Trademark cannot be 'primarily merely a surname'
            </Alert>
        </div>
    );
};

export default TextSearchCard;
const useStyles = makeStyles((theme) => ({
    searchCard: {
        width: '90%',
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
