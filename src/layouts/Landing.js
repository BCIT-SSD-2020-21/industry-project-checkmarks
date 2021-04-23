import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/checkmark logo.PNG';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Card,
    IconButton,
    Button,
} from '@material-ui/core';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import IndividualForm from '../components/RegisterPage/IndividualForm';
import OrganizationForm from '../components/RegisterPage/OrganizationForm';
import HeaderBanner from '../components/HeaderBanner';
import UserDashboard from '../components/UserDashboard';
import TrademarkSearch from '../components/LandingPage/TrademarkSearch';
import Login from '../components/LandingPage/Login';

export default function Landing() {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);
    const [loggingIn, setLoggingIn] = useState(false);
    const [searching, setSearching] = useState(false);

    return (
        <Box>
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
        </Box>
    );
}
