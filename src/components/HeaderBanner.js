import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/checkmark logo.PNG';
import { Box, Typography, Tabs, Tab, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function HeaderBanner() {
    const classes = makeStyles();
    const history = useHistory();

    const toLanding = () => {
        history.push('/');
    };

    return (
        <Box className={classes.logo}>
            <img onClick={() => toLanding()} src={logo} alt="Logo" />
        </Box>
    );
}
