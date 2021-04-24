import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';
import { Box, IconButton, Button } from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import HeaderBanner from '../components/HeaderBanner';
import UserDashboard from '../components/UserDashboard';
import TrademarkSearch from '../components/LandingPage/TrademarkSearch';
import Login from '../components/LandingPage/Login';
import About from '../components/LandingPage/About';
import Pricing from '../components/LandingPage/Pricing';
import Footer from '../components/LandingPage/Footer';

export default function Landing() {
    const classes = useStyles();
    const history = useHistory();

    const [authenticated, setAuthenticated] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [searching, setSearching] = useState(false);

    console.log(window.innerHeight);
    return (
        <Box className={classes.root}>
            <Box className={classes.section}>
                {authenticated ? <UserDashboard /> : <HeaderBanner />}

                <Box className={classes.actions}>
                    <Box className={classes.search}>
                        {searching ? (
                            <TrademarkSearch />
                        ) : (
                            <IconButton
                                className={classes.buttonSearch}
                                onClick={() => {
                                    setSearching(!searching);
                                    setLoggingIn(false);
                                }}
                            >
                                <SearchTwoToneIcon />
                            </IconButton>
                        )}
                    </Box>
                    {loggingIn ? (
                        <Login />
                    ) : (
                        <Box className={classes.buttons}>
                            <Button
                                className={classes.buttonRegister}
                                onClick={() => {
                                    setSearching(false);
                                    setLoggingIn(false);
                                    history.push('/register');
                                }}
                                boxShadow={2}
                            >
                                Register
                            </Button>
                            <Button
                                className={classes.buttonLogin}
                                onClick={() => {
                                    setSearching(false);
                                    setLoggingIn(!loggingIn);
                                }}
                                boxShadow={2}
                            >
                                Login
                            </Button>
                        </Box>
                    )}
                </Box>
            </Box>
            <About />
            <Pricing />
            <Footer />
        </Box>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: window.innerHeight,
        width: window.innerWidth,
    },
    actions: {
        display: 'flex',
        flexDirection: 'column',
        justifySelf: 'space-around',
    },
    search: {
        margin: 'auto',
        minHeight: '100px',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '60%',
        // margin: '0 auto',
    },
    buttonLogin: {
        backgroundColor: checkmarksTheme.buttonSecondary,
        '&:hover': {
            background: checkmarksTheme.hoverLight,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        color: checkmarksTheme.buttonTextSecondary,
        padding: '5px 0',
        width: '39%',
    },
    buttonRegister: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        '&:hover': {
            background: checkmarksTheme.hoverSoft,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        color: checkmarksTheme.buttonTextPrimary,
        padding: '5px 0',
        width: '58%',
    },
    buttonSearch: {
        backgroundColor: checkmarksTheme.buttonSecondary,
        '&:hover': {
            background: checkmarksTheme.bgGradientLight,
        },
        color: checkmarksTheme.buttonTextSecondary,
        padding: '10px',
    },
}));
