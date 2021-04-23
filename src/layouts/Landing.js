import React, { useState } from 'react';
import logo from '../images/checkmark logo.PNG';
import { makeStyles } from '@material-ui/core/styles';
import HelpIcon from '@material-ui/icons/Help';
import { Box, Typography, Tabs, Tab, Card } from '@material-ui/core';
import IndividualForm from '../components/RegisterPage/IndividualForm';
import OrganizationForm from '../components/RegisterPage/OrganizationForm';
import Login from '../components/LandingPage/Login';

export default function Landing() {
    return (
        <Box>
            <Login />
        </Box>
    );
}
