import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';
import { Box, IconButton, Button } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import bannerImage from '../assets/images/bg_landing-chris-brignola.jpg';
import MenuAppBar from '../components/AppBar';
import HeaderBanner from '../components/HeaderBanner';
import UserDashboard from '../components/UserDashboard';
import TrademarkSearch from '../components/LandingPage/TrademarkSearch';
import Login from '../components/LandingPage/Login';
import About from '../components/LandingPage/About';
import Pricing from '../components/LandingPage/Pricing';
import Footer from '../components/LandingPage/Footer';

// export const LandingContext = React.createContext();

export default function Landing() {
    const classes = useStyles();
    const history = useHistory();

    const [searching, setSearching] = useState(false);

    return (
        <Box className={classes.root}>
            <MenuAppBar setSearching={setSearching} />
            <Box className={classes.section}>
                <HeaderBanner searching={searching} />

                <Box className={classes.actions}>
                    <Box className={classes.search}>
                        {/* {infoDisplayToggle ? ( // idea */}
                        <TrademarkSearch
                            searching={searching}
                            setSearching={setSearching}
                        />
                        {/* ) : ( */}
                        {/* <IconButton
                                className={classes.buttonSearch}
                                onClick={() => {
                                    setSearching(!searching);
                                }}
                            >
                                <SearchTwoToneIcon />
                            </IconButton>
                        )} */}
                    </Box>
                    <Button
                        className={classes.buttonStart}
                        onClick={() => {
                            setSearching(false);
                            history.push('/application');
                        }}
                    >
                        <PlayArrowTwoToneIcon />
                        Start Trademark Application
                    </Button>
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
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // maxWidth: '100%',
    },
    actions: {
        // border: '1px solid black',
        // animation: '$shiftUp-actions 1s',
        // backgroundColor: 'red',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: (window.innerHeight * 3) / 4,
        ['@media (min-width:768px)']: { height: (window.innerHeight * 2) / 3 },
        ['@media (min-width:1280px)']: { height: (window.innerHeight * 2) / 3 },
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
        // animation: 'shiftUp-buttons 1s',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10% 0 5% 0',
        width: '100%',
        ['@media (min-width:768px)']: { justifyContent: 'flex-end' },
        ['@media (min-width:1280px)']: { display: 'none' },
    },
    buttonStart: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        '&:hover': {
            color: checkmarksTheme.buttonPrimary,
            background: checkmarksTheme.hoverSoft,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        borderRadius: '25px',
        color: checkmarksTheme.buttonTextPrimary,
        fontWeight: 'bold',
        margin: '10% auto 15% auto',
        ['@media (min-width:768px)']: { margin: '10% auto 15%  auto' },
        ['@media (min-width:1280px)']: { margin: '10% auto 12% auto' },
        opacity: 0.7,
        padding: '7px 0',
        minWidth: '300px',
        width: '50%',
        maxWidth: '320px',
    },
    buttonSearch: {
        backgroundColor: checkmarksTheme.buttonSecondary,
        '&:hover': {
            background: checkmarksTheme.hoverLight,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        color: checkmarksTheme.buttonTextSecondary,
        marginBottom: '2% auto',
        padding: '5px',
    },
    '@keyframes shiftUp-buttons': {
        from: { transform: 'translateY(20%)' },
        to: { transform: 'translateY(0px)' },
    },
    '@keyframes shiftUp-actions': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-20%)' },
    },
}));
