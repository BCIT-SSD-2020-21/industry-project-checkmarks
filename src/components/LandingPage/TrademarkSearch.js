import React, { useState, useEffect } from 'react';
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
                    .then((results) => setSearchResults(results.data))
                    .catch((error) => console.log('Error: ', error));
            })();
        }
    }, [searchTerm]);
    console.log('searchResults: ', searchResults);

    return (
        <Box className={classes.container}>
            <Box boxShadow={2} className={classes.searchBox}>
                <FormControl className={classes.form}>
                    <InputLabel className={classes.label}>
                        {'Search for a Trademark...'}
                    </InputLabel>
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
    container: {
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
}));
