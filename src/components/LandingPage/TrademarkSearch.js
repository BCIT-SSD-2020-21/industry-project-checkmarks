import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Card, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import { checkmarksTheme } from '../../styles/Themes';
import { makeStyles } from '@material-ui/core/styles';
import SearchResults from './SearchResults';
import SearchField from '../SearchField';
import { searchTrademarks } from '../../services/checkmarks';

export default function TrademarkSearch({ searching, setSearching }) {
    const classes = searchBoxStyles();
    const history = useHistory();

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
        if (searchTerm.length > 0) {
            setSearching(true);
        } else {
            setSearching(false);
        }
    }, [searchTerm]);

    // Loading Indicator
    const { current: instance } = useRef({});
    const [loading, setLoading] = useState(false);
    const [numberOfRepeatSearches, setNumberOfRepeatSearches] = useState(0);
    useEffect(() => {
        if (instance.delayTimer) {
            clearTimeout(instance.delayTimer);
        }
        if (
            searchTerm !== '' &&
            searchResults?.length === 0 &&
            numberOfRepeatSearches < 3
        ) {
            setLoading(true);
            instance.delayTimer = setTimeout(() => {
                (async () => {
                    const result = await searchTrademarks(searchTerm);
                    if (result.length > 0) {
                        setSearchResults(result);
                        setNumberOfRepeatSearches(0);
                        setLoading(false);
                    } else {
                        setNumberOfRepeatSearches(numberOfRepeatSearches + 1);
                    }
                })();
                setLoading(false); // after 3 seconds, stop Loading Indicator
            }, 3000);
        } else if (searchTerm === '') {
            setLoading(false);
            setNumberOfRepeatSearches(0);
        } else {
            setLoading(false);
        }
    }, [searchTerm, searchResults, numberOfRepeatSearches]);

    useEffect(() => {}, [searchResults]);

    return (
        <Box className={classes.containerTMSearch}>
            <Box
                boxShadow={2}
                className={`${classes.searchBox} ${
                    searchTerm.length > 0 && classes.searchBoxShifted
                }`}
            >
                <SearchField
                    loading={loading}
                    placeholder="Check if your Trademark exists..."
                    setInputTo={searchTrademark}
                />
                <Button
                    style={{
                        display: searching ? 'block' : 'none',
                    }}
                    className={classes.edgeButton}
                    onClick={() => history.push('/application')}
                >
                    <Box>
                        <PlayArrowTwoToneIcon />
                        <PlayArrowTwoToneIcon />
                        <PlayArrowTwoToneIcon />
                    </Box>
                    <Typography className={classes.edgeButtonText}>
                        Start
                    </Typography>
                </Button>
            </Box>
            {searchTerm.length > 2 && (
                <Box
                    className={`${classes.results} ${
                        searchTerm.length > 0 && classes.searchResultsShifted
                    }`}
                >
                    {searchResults?.length > 0 ? (
                        <SearchResults data={searchResults} />
                    ) : (
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
                    )}
                </Box>
            )}
        </Box>
    );
}

export const searchBoxStyles = makeStyles(() => ({
    //
    hidden: {
        opacity: 0,
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
        animation: '$shiftDown-searchBox-mobile 1s',
        ['@media (min-width:768px)']: {
            animation: '$shiftDown-searchBox-tablet 1s',
        },
        ['@media (min-width:1280px)']: {
            animation: '$shiftDown-searchBox-generic 1s',
        },
    },
    edgeButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        animation: '1s $edgeButtonFadeIn',
        width: '120px',
        fontSize: '12px',
        height: '100%',
        color: 'white',
        opacity: 0.9,
        borderRadius: '0 100px 100px 0',
        backgroundColor: 'red',
        position: 'absolute',
        right: -30,
        top: 0,

        transition: 'opacity 1s linear',
        transitionDelay: '3s',
        '&:hover': {
            background: checkmarksTheme.hoverSoft,
        },
    },
    searchBoxShifted: {
        animation: '$shiftUp-searchBox-mobile 1s',
        transform: 'translateY(-100px)',
    },
    searchResultsShifted: {},
    results: {
        animation: '$shiftUp-results-mobile 1s',
        transform: 'translateY(-100px)',
        width: '100%',
    },
    form: {
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
        padding: '25px 50px',
        margin: '0 auto',
        minWidth: 320,
        width: '90%',
        maxWidth: 500,
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
        width: '70%',
        maxWidth: '200px',
    },
    '@keyframes rotationAnimation': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(359deg)' },
    },
    '@keyframes edgeButtonFadeIn': {
        from: { opacity: 0 },
        to: { opacity: 0.5 },
    },
    // SearchBox Animations
    '@keyframes shiftUp-searchBox-mobile': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-100px)' },
    },
    '@keyframes shiftUp-searchBox-tablet': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-50%)' },
    },
    '@keyframes shiftUp-searchBox-generic': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-50%)' },
    },
    '@keyframes shiftDown-searchBox-mobile': {
        from: { transform: 'translateY(-100px)' },
        to: { transform: 'translateY(0px)' },
    },
    '@keyframes shiftDown-searchBox-tablet': {
        from: { transform: 'translateY(-50%)' },
        to: { transform: 'translateY(0px)' },
    },
    '@keyframes shiftDown-searchBox-generic': {
        from: { transform: 'translateY(-50%)' },
        to: { transform: 'translateY(0px)' },
    },
    // SearchResults Table Animations
    '@keyframes shiftUp-results-mobile': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-100px)' },
    },
    '@keyframes shiftUp-results-tablet': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-20%)' },
    },
    '@keyframes shiftUp-results-generic': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-20%)' },
    },
}));
