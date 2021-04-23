import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
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

    return (
        <Box className={classes.root}>
            {authenticated ? <UserDashboard /> : <HeaderBanner />}
            {searching ? (
                <TrademarkSearch />
            ) : (
                <IconButton
                    onClick={() => {
                        setSearching(!searching);
                        setLoggingIn(false);
                    }}
                >
                    <SearchTwoToneIcon />
                </IconButton>
            )}
            {loggingIn ? (
                <Login />
            ) : (
                <Box>
                    <Button
                        onClick={() => {
                            setSearching(false);
                            setLoggingIn(!loggingIn);
                        }}
                    >
                        LOGIN
                    </Button>
                    <Button
                        onClick={() => {
                            setSearching(false);
                            setLoggingIn(false);
                            history.push('/register');
                        }}
                    >
                        Sign Up
                    </Button>
                </Box>
            )}
            <About />
            <Pricing />
            <Footer />
        </Box>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));
