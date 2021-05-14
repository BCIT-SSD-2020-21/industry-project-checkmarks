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
        height: '34px',
        width: '100%',
    },
    container: {
        backgroundColor: checkmarksTheme.bgDrawer,
        height: '32px',
        position: 'relative',
        opacity: 0.85,
    },
    progress: {
        backgroundColor: checkmarksTheme.buttonPrimary,
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
                transition: 'width 0.25s ease-in 0.3s ease-out',
            }}
            position="fixed"
            zIndex="modal"
        >
            <Box
                className={classes.container}
                style={{
                    justifyContent: drawerOpen ? 'flex-end' : 'center',
                    width: drawerOpen ? `calc(100% - 240px)` : '100%',
                    transition: 'width 0.25s ease-in 0.3s ease-out',
                }}
            >
                <Box
                    className={classes.progress}
                    style={{
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
