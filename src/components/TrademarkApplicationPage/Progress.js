import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const progressStyles = makeStyles((theme) => ({
    root: {
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // border: '1px solid black',
        // borderRadius: '25px',
        backgroundColor: 'red',
        // padding: '3px',
        padding: '1.5%',
        // borderRadius: '25px',
        border: '1px solid black',
        height: '34px',
        width: '100%',
    },
    container: {
        backgroundColor: 'white',
        borderRadius: '25px',
        border: '1px solid black',
        height: '32px',

        position: 'relative',
        margin: 'auto',
        width: '80%',
    },
    progress: {
        // borderRadius: '25px',
        backgroundColor: 'green',
        border: '1px solid black',
        // margin: 'auto',

        height: '30px',
        // width: '30px',
    },
    value: {
        backgroundColor: '#00000000',
        textAlign: 'center',
        // border: '1px solid blue',
        fontWeight: 'bold',
        position: 'absolute',
        top: '0%',
        left: '50%',
        marginTop: '5px',
        transform: 'translate(-50%, 0)',
        // background-color: #fff,
        zIndex: 1,
    },
}));

export default function Progress({ step, steps }) {
    const progressValue = Math.round((step.num * 100) / steps.length);

    const classes = progressStyles();
    return (
        <Box className={classes.root} position="fixed">
            <Box className={classes.container}>
                <Box
                    className={classes.progress}
                    style={{ width: `${progressValue}%` }}
                ></Box>
                <Typography className={classes.value}>
                    {progressValue + '%'}
                </Typography>
            </Box>
        </Box>
    );
}
