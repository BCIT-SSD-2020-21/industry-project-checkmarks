import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/checkmark logo.PNG';
import { Box, Typography, Tabs, Tab, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default function HeaderBanner() {
    const classes = useStyles();
    const history = useHistory();

    const toLanding = () => {
        history.push('/');
    };

    return (
        <Box className={classes.container}>
            <img
                className={classes.image}
                onClick={() => toLanding()}
                src={logo}
                alt="Logo"
            />
        </Box>
    );
}

const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: (window.innerHeight * 1) / 3,
        // width: (window.innerWidth * 1) / 4,
    },
    image: {
        paddingTop: '15%',
        // padding: '0 20% 0 15%',
        // padding: '0 10%',
        width: '85%',
    },
}));
