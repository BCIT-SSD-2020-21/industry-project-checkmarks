import React, { useEffect, useState } from 'react';
import logo from '../images/checkmark logo.PNG';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import { Box, Typography, Tabs, Tab, Card } from '@material-ui/core';
import IndividualForm from '../components/RegisterPage/IndividualForm';
import OrganizationForm from '../components/RegisterPage/OrganizationForm';
import HeaderBanner from '../components/HeaderBanner';
import TrademarkSearch from '../components/LandingPage/TrademarkSearch';
import Login from '../components/LandingPage/Login';

export default function Landing() {
    const [loggingIn, setLoggingIn] = useState(false);

    return (
        <Box>
            <HeaderBanner />
            <TrademarkSearch />
            <Login />
        </Box>
    );
}
