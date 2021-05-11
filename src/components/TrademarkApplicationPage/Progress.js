import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';

const progressStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        // backgroundColor: checkmarksTheme.buttonTextPrimary,
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: '75px',
        padding: '12px',
        height: '34px',
        width: '100%',
        // ['@media (min-height:735px)']: { padding: '12px' },
        // ['@media (min-height:812px)']: { padding: '7px' },
    },
    container: {
        backgroundColor: checkmarksTheme.bgDrawer,
        borderRadius: '25px',
        border: `1px solid ${checkmarksTheme.textLabel}`,
        height: '32px',
        position: 'relative',
        opacity: 0.85,
        // margin: '2% auto',
        width: '80%',
    },
    progress: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        // border: `0.5px solid ${checkmarksTheme.textLabel}`,
        borderRadius: '25px 0 0 25px',
        height: '100%',
    },
    value: {
        backgroundColor: '#00000000',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        position: 'absolute',
        top: '0%',
        left: '50%',
        marginTop: '3px',
        // transform: 'translate(-50%, 0)',
        zIndex: 1,
    },
}));

export default function Progress({ progressValue, inputValidationValue }) {
    const progressPercentage = Math.round((progressValue * 100) / 2900);

    const classes = progressStyles();
    return (
        <Box className={classes.root} position="fixed" zIndex="modal">
            <Box className={classes.container}>
                <Box
                    className={classes.progress}
                    style={{
                        borderRadius:
                            progressPercentage > 96 ? '25px' : '25px 0 0 25px',
                        transition: 'width 1s ease-in-out',
                        width: `${progressPercentage}%`,
                    }}
                ></Box>
                <Typography
                    className={classes.value}
                    style={{
                        color: `${
                            progressPercentage > 54
                                ? checkmarksTheme.buttonTextPrimary
                                : checkmarksTheme.buttonTextSecondary
                        }`,
                        transition: 'color 1s ease-in-out',
                    }}
                >
                    {progressPercentage + '%'}
                </Typography>
            </Box>
        </Box>
    );
}
