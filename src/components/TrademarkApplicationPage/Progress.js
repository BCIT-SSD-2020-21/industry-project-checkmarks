import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';

const progressStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: checkmarksTheme.buttonTextPrimary,
        // padding: '12px',
        border: '1px solid black',
        padding: '20px',
        height: '34px',
        width: '100%',
        ['@media (min-height:735px)']: { padding: '12px' },
        ['@media (min-height:812px)']: { padding: '7px' },
    },
    container: {
        backgroundColor: checkmarksTheme.inputBackground,
        borderRadius: '25px',
        border: `1px solid ${checkmarksTheme.textLabel}`,
        height: '32px',
        position: 'relative',
        // margin: '2% auto',
        width: '80%',
    },
    progress: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        border: `0.5px solid ${checkmarksTheme.textLabel}`,
        borderRadius: '25px 0 0 25px',
        height: '30px',
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

export default function Progress({ step, steps }) {
    const progressValue = Math.round((step.num * 100) / steps.length);

    const classes = progressStyles();
    return (
        <Box className={classes.root} position="fixed">
            <Box className={classes.container}>
                <Box
                    className={classes.progress}
                    style={{
                        // animation: '$progressStep 1s',
                        transition: 'width 1s ease-in-out',
                        width: `${progressValue}%`,

                        // '@keyframes progressStep': {
                        //     from: {
                        //         width: `${
                        //             progressValue -
                        //             Math.round(100 / steps.length)
                        //         }%`,
                        //     },
                        //     to: { width: `${progressValue}%` },
                        // },
                    }}
                ></Box>
                <Typography
                    className={classes.value}
                    style={{
                        color: `${
                            progressValue > 55
                                ? checkmarksTheme.buttonTextPrimary
                                : checkmarksTheme.buttonTextSecondary
                        }`,
                        transition: 'color 1s ease-in-out',
                    }}
                >
                    {progressValue + '%'}
                </Typography>
            </Box>
        </Box>
    );
}
