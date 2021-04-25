import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';
import { Box, IconButton, Button } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import bannerImage from '../images/bg_landing-chris-brignola.jpg';
import MenuAppBar from '../components/AppBar';
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
    const [searching, setSearching] = useState(true);

    console.log(window.innerHeight);
    return (
        <Box className={classes.root}>
            <MenuAppBar />
            <Fade in={true} timeout={6000}>
                <Box className={classes.section}>
                    {/* <Fade in={true} exit={true} timeout={1000}> */}
                    {authenticated ? <UserDashboard /> : <HeaderBanner />}
                    {/* </Fade> */}

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
            </Fade>
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
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // maxWidth: '100%',
    },
    actions: {
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: (window.innerHeight * 2) / 3,
        width: '90%',
    },
    search: {
        alignItems: 'center',
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        width: '100%',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10% 0 5% 0',
        width: '100%',
    },
    buttonLogin: {
        backgroundColor: checkmarksTheme.buttonSecondary,
        '&:hover': {
            background: checkmarksTheme.hoverLight,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        borderRadius: '25px',
        color: checkmarksTheme.buttonTextSecondary,
        padding: '5px 0',
        width: '40%',
        maxWidth: '120px',
    },
    buttonRegister: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        '&:hover': {
            background: checkmarksTheme.hoverSoft,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        borderRadius: '25px',
        color: checkmarksTheme.buttonTextPrimary,
        padding: '5px 0',
        width: '55%',
        maxWidth: '200px',
    },
    buttonSearch: {
        backgroundColor: checkmarksTheme.buttonSecondary,
        '&:hover': {
            background: checkmarksTheme.hoverLight,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        color: checkmarksTheme.buttonTextSecondary,
        padding: '5px',
    },
}));
