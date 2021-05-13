import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../../styles/Themes';

const progressStyles = makeStyles((theme) => ({
    root: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // padding: '12px',
        height: '34px',
        width: '100%',
    },
    container: {
        backgroundColor: checkmarksTheme.bgDrawer,
        // borderRadius: '25px',
        border: `1px solid ${checkmarksTheme.textLabel}`,
        height: '32px',
        position: 'relative',
        opacity: 0.85,
        width: '100%',
    },
    progress: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        // borderRadius: '25px 0 0 25px',
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
        zIndex: 1,
    },
}));

export default function Progress({ progressValue, drawerOpen }) {
    const progressPercentage = Math.round((progressValue * 100) / 2900);

    console.log('Progress, drawerOpen: ', drawerOpen);

    const classes = progressStyles();
    return (
        <Box
            className={classes.root}
            style={{
                justifyContent: drawerOpen ? 'flex-end' : 'center',
                // padding: drawerOpen ? '0' : '12px',
                // width: drawerOpen ? '35%' : '100%',
                transition: 'width 0.25s ease-in 0.3s ease-out',
            }}
            position="fixed"
            zIndex="modal"
        >
            <Box
                className={classes.container}
                style={{
                    // borderRadius: drawerOpen ? '0' : '25px',
                    justifyContent: drawerOpen ? 'flex-end' : 'center',
                    width: drawerOpen ? window.innerWidth - 240 : '100%',
                    transition: 'width 0.25s ease-in 0.3s ease-out',
                }}
            >
                <Box
                    className={classes.progress}
                    style={{
                        // borderRadius:
                        //     progressPercentage > 96 ? '25px' : '25px 0 0 25px',
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
