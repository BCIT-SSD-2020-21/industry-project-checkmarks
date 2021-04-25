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
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import LoopIcon from '@material-ui/icons/Loop';
import { checkmarksTheme } from '../../styles/Themes';
import { makeStyles } from '@material-ui/core/styles';
import SearchResults from './SearchResults';

const checkmarksWebAPIbaseUrl =
    'https://checkmarkswebapi.azurewebsites.net/api/trademark/';

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
                await fetch(checkmarksWebAPIbaseUrl + searchTerm)
                    .then((response) => response.json())
                    .then((results) => {
                        // Formatting
                        const formattedResultsData = [];
                        results.data.forEach((item) => {
                            // FORMAT DATE HERE
                            let formattedItem = {
                                ...item,
                                fileDateFormatted: item.fileDate.substring(
                                    0,
                                    10
                                ),
                            };
                            formattedResultsData.push(formattedItem);
                        });
                        setSearchResults(formattedResultsData);
                        // setSearchResults(results.data)
                    })
                    .catch((error) => console.log('Error: ', error));
            })();
        }
    }, [searchTerm]);
    // console.log('searchResults: ', searchResults);

    // Loading Indicator
    const { current: instance } = useRef({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (instance.delayTimer) {
            clearTimeout(instance.delayTimer);
        }
        if (searchTerm !== '' && searchResults.length === 0) {
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
            <Box boxShadow={2} className={classes.searchBox}>
                <FormControl className={classes.form}>
                    {/* <InputLabel className={classes.label}>
                        {'Search for a Trademark...'}
                    </InputLabel> */}
                    <Input
                        className={classes.input}
                        onChange={(e) => searchTrademark(e.target.value)}
                        id="searchBox"
                        placeholder={'Enter Text...'}
                        disableUnderline={true}
                        startAdornment={
                            <InputAdornment
                                className={classes.adornment}
                                position="start"
                            >
                                <SearchTwoToneIcon className={classes.icon} />
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
            {searchTerm.length > 2 && (
                <Box className={classes.results}>
                    {searchResults.length > 2 ? (
                        // Table; TableRows = { Trademark=title, OwnedBy=owner, CIPO Status=statusDescEn, Image=images[x], NICE Classes = niceClasses[], Date Filed = fileDate }
                        <SearchResults data={searchResults} />
                    ) : (
                        <Card className={classes.noResultContainer}>
                            <Typography className={classes.noResultText}>
                                {
                                    'No match found, so this Trademark may not be registered yet.'
                                }
                            </Typography>
                            <Typography className={classes.noResultText}>
                                {`"${searchTerm}" may be available. Would you like to start an application?`}
                            </Typography>
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
        margin: '2% auto',
        '&:hover': {
            backgroundColor: checkmarksTheme.hoverLight,
        },
    },
    results: {
        width: '100%',
    },
    form: {
        // margin: '5px auto',
        width: '90%',
        padding: '10px',
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
        textAlign: 'left',
        width: '100%',
        padding: '0 8px',
        borderRadius: '15px',
    },
    adornment: {},
    icon: {
        // margin: '2%',
        color: checkmarksTheme.inputIcon,
    },
    noResultContainer: {
        borderRadius: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: '5% 10%',
        height: '100%',
    },
    noResultText: {
        textAlign: 'center',
    },
    iconLoading: {
        animation: '$rotationAnimation 2s infinite',
        color: checkmarksTheme.inputIcon,
    },
    '@keyframes rotationAnimation': {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(359deg)' },
    },
}));
