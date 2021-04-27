import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Button,
    Card,
    FormControl,
    Input,
    InputLabel,
    InputAdornment,
    Typography,
} from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LoopIcon from '@material-ui/icons/Loop';
import { checkmarksTheme } from '../../styles/Themes';
import { makeStyles } from '@material-ui/core/styles';
import SearchResults from './SearchResults';
import { searchTrademarks } from '../../services/checkmarks';

export default function TrademarkSearch() {
    const classes = searchBoxStyles();

    // user input search term
    const [searchTerm, setSearchTerm] = useState('');
    const searchTrademark = (text) => {
        if (text.length > 2) {
            setSearchTerm(text);
        } else {
            setSearchTerm('');
        }
    };

    // webAPI search results
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        if (searchTerm) {
            (async () => {
                const result = await searchTrademarks(searchTerm);
                setSearchResults(result);
            })();
        }
    }, [searchTerm]);

    // Loading Indicator
    const { current: instance } = useRef({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (instance.delayTimer) {
            clearTimeout(instance.delayTimer);
        }
        if (searchTerm !== '' && searchResults?.length === 0) {
            setLoading(true);
            instance.delayTimer = setTimeout(() => {
                setLoading(false); // after 3 seconds, stop Loading Indicator
            }, 3000);
        } else {
            setLoading(false);
        }
    }, [searchTerm, searchResults]);
    console.log(searchResults);
    console.log('loading: ', loading);

    return (
        <Box className={classes.containerTMSearch}>
            <Fade in={true} exit={true} timeout={2000}>
                <Box
                    boxShadow={2}
                    className={`${classes.searchBox} ${
                        searchTerm.length > 0 && classes.searchBoxShifted
                    }`}
                >
                    <FormControl className={classes.form}>
                        {/* <InputLabel className={classes.label}>
                        {'Search for a Trademark...'}
                    </InputLabel> */}
                        <Input
                            className={classes.input}
                            // onClick={(e) => console.log(e.target)}
                            onChange={(e) => searchTrademark(e.target.value)}
                            id="searchBox"
                            placeholder={'Check if your Trademark exists...'}
                            disableUnderline={true}
                            startAdornment={
                                <InputAdornment
                                    className={classes.adornment}
                                    position="start"
                                >
                                    <SearchTwoToneIcon
                                        className={classes.icon}
                                    />
                                </InputAdornment>
                            }
                            endAdornment={
                                <InputAdornment
                                    className={classes.adornment}
                                    position="end"
                                >
                                    <LoopIcon
                                        className={
                                            loading
                                                ? classes.iconLoading
                                                : classes.hidden
                                        }
                                    />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Box>
            </Fade>
            {searchTerm.length > 2 && (
                <Fade in={true} exit={true}>
                    <Box
                        className={`${classes.results} ${
                            searchTerm.length > 0 &&
                            classes.searchResultsShifted
                        }`}
                    >
                        {searchResults?.length > 0 ? (
                            // Table; TableRows = { Trademark=title, OwnedBy=owner, CIPO Status=statusDescEn, Image=images[x], NICE Classes = niceClasses[], Date Filed = fileDate }

                            <SearchResults data={searchResults} />
                        ) : (
                            // <Fade in={true} exit={true}>
                            <Card className={classes.noResultContainer}>
                                <Typography className={classes.noResultText}>
                                    {`No match found for "${searchTerm}", so this text may not be registered yet as a Trademark.`}
                                </Typography>
                                <Typography className={classes.noResultText}>
                                    {'Would you like to start an application?'}
                                </Typography>
                                <Button className={classes.startButton}>
                                    Absolutely!
                                </Button>
                            </Card>
                            // </Fade>
                        )}
                    </Box>
                </Fade>
            )}
        </Box>
    );
}

export const searchBoxStyles = makeStyles(() => ({
    //
    hidden: {
        display: 'none',
    },
    containerTMSearch: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '160px',
    },
    searchBox: {
        alignItems: 'center',
        backgroundColor: checkmarksTheme.bgPrimary,
        borderRadius: '22px',
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        maxWidth: '768px',
        margin: '2% auto',
        animation: '$shiftDown-searchBox 1s',
        // '&:hover': {
        //     backgroundColor: checkmarksTheme.hoverLight,
        // },
    },
    searchBoxShifted: {
        animation: '$shiftUp-searchBox 1s',
        transform: 'translateY(-200%)',
    },
    searchResultsShifted: {
        // animation: '$shiftUp-results 1s',
        // transform: 'translateY(-20%)',
    },

    results: {
        height: (window.innerHeight * 2) / 3,
        width: '100%',
    },
    form: {
        // margin: '5px auto',
        boxSizing: 'border-box',
        padding: '10px',
        width: '90%',
    },
    label: {
        color: checkmarksTheme.inputLabel,
        fontSize: 18,
        fontStyle: 'italic',
        padding: '0 22px',
        textAlign: 'left',
        width: '100%',
    },
    input: {
        backgroundColor: checkmarksTheme.inputBackground,
        color: checkmarksTheme.inputValue,
        textAlign: 'left',
        fontSize: '0.7rem',
        ['@media (min-width:768px)']: { fontSize: '0.9rem' },
        ['@media (min-width:1280px)']: { fontSize: '1.1rem' },
        fontWeight: 'bold',
        width: '100%',
        padding: '2px 12px',
        borderRadius: '15px',
        boxSizing: 'border-box',
        margin: '1px',
        border: '0.5px solid #FFFFFF00',
        '&.Mui-focused': {
            border: '0.5px solid red',
            // animation: '$shiftUp-searchBox 1s',
            // transform: 'translateY(-200%)'
        },
    },
    adornment: {},
    icon: {
        color: checkmarksTheme.inputIcon,
    },
    iconLoading: {
        animation: '$rotationAnimation 2s infinite',
        color: checkmarksTheme.inputIcon,
    },
    noResultContainer: {
        backgroundColor: checkmarksTheme.bgPrimary,
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: '5% 10%',
        margin: '0 auto',
        minWidth: 320,
        width: '60%',
        maxWidth: 500,
        // height: '100%',
    },
    noResultText: {
        textAlign: 'center',
        marginBottom: '5%',
    },
    startButton: {
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
    '@keyframes rotationAnimation': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(359deg)' },
    },
    '@keyframes shiftUp-results': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-20%)' },
    },
    '@keyframes shiftUp-searchBox': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-200%)' },
    },
    '@keyframes shiftDown-searchBox': {
        from: { transform: 'translateY(-200%)' },
        to: { transform: 'translateY(0px)' },
    },
}));
