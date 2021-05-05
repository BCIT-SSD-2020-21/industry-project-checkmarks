import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import CheckIcon from '@material-ui/icons/Check';

export default function Checkmark({ value }) {
    const classes = useStyles();

    console.log(value);
    return (
        <Box boxShadow={5} className={classes.container}>
            {value ? (
                <CheckIcon className={classes.checkmarkGood} />
            ) : (
                <PriorityHighIcon className={classes.checkmarkBad} />
            )}
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    container: {
        // backgroundColor: 'blue',
        alignItems: 'center',
        borderRadius: '50px',
        display: 'flex',
        justifyContent: 'center',
        height: '30px',
        marginLeft: '12px',
        width: '30px',
    },
    checkmarkBad: {
        color: 'red',
        objectFit: 'cover',
        opacity: 0.3,
        height: '100%',
        width: '100%',
    },
    checkmarkGood: {
        color: 'green',
        objectFit: 'cover',
        height: '100%',
        width: '100%',
    },
}));
