import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';
import { Box, Button, Paper } from '@material-ui/core';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import bannerImage from '../assets/images/bg-landing-chris-brignola.jpg';
import bannerImageDark from '../assets/images/bg-dark-landing-nicolas-hoizey.jpg';
import HeaderBanner from '../components/HeaderBanner';
import TrademarkSearch from '../components/LandingPage/TrademarkSearch';
import About from '../components/LandingPage/About';
import Faq from '../components/LandingPage/Faq';
import Pricing from '../components/LandingPage/Pricing';
import Cta from '../components/LandingPage/Cta';
import Footer from '../components/LandingPage/Footer';

export default function Landing(darkMode) {
    const classes = useStyles();
    const history = useHistory();

    const [searching, setSearching] = useState(false);
    return (
        <Paper className={classes.root}>
            <Paper
                className={classes.section}
                style={{
                    backgroundImage: `url(${bannerImage})`,
                    // backgroundImage: `url(${
                    //     darkMode.darkMode ? bannerImageDark : bannerImage
                    // })`,
                }}
            >
                <Paper
                    className={classes.sectionOverlay}
                    style={{
                        backgroundColor: darkMode.darkMode
                            ? checkmarksTheme.bgOpaque70Dark
                            : checkmarksTheme.transparent,
                        width: '100%',
                    }}
                >
                    <HeaderBanner searching={searching} />

                    <Box className={classes.actions}>
                        <Box className={classes.search}>
                            <TrademarkSearch
                                searching={searching}
                                setSearching={setSearching}
                            />
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
                </Paper>
            </Paper>
            <About />
            <Faq />
            <Pricing />
            <Cta />
            <Box className={classes.footerContainer}>
                <Footer />
            </Box>
        </Paper>
    );
}

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    section: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: window.innerHeight,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    },
    sectionOverlay: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: window.innerHeight,
        width: '100%',
    },
    actions: {
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
        ['@media (min-width:768px)']: { justifyContent: 'flex-end' },
        ['@media (min-width:1280px)']: { display: 'none' },
    },
    buttonStart: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
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
        fontSize: '12px',
        ['@media (min-width:768px)']: {
            margin: '10% auto 15%  auto',
            fontSize: '16px',
        },
        ['@media (min-width:1280px)']: {
            margin: '10% auto 12% auto',
            fontSize: '18px',
        },
        opacity: 0.7,
        padding: '7px 8px',
        minWidth: '260px',
        width: '60%',
        maxWidth: '380px',
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
    footerContainer: {
        backgroundColor: checkmarksTheme.bgTertiary,
        marginTop: '10%',
        width: '100%',
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
