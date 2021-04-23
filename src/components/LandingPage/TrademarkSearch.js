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
import { standardTheme } from '../../styles/Themes';
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
        <Box>
            <FormControl className={classes.container}>
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
            {searchTerm.length > 2 && (
                <Box>
                    {searchResults.length > 2 ? (
                        // Table; TableRows = { Trademark=title, OwnedBy=owner, CIPO Status=statusDescEn, Image=images[x], NICE Classes = niceClasses[], Date Filed = fileDate }
                        <SearchResults data={searchResults} />
                    ) : (
                        <Typography>{'No Results'}</Typography>
                    )}
                </Box>
            )}
        </Box>
    );
}

export const searchBoxStyles = makeStyles(() => ({
    //
    container: {
        backgroundColor: standardTheme.bgPrimary,
        borderRadius: '22px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '5px auto',
        padding: '10px',
        width: '95%',
        maxWidth: '320px',
    },
    label: {
        color: standardTheme.textLabel,
        fontSize: 20,
        fontStyle: 'italic',
        padding: '5px 17px',
        textAlign: 'left',
        width: '100%',
    },
    input: {
        backgroundColor: standardTheme.bgSecondary,
        textAlign: 'left',
        width: '100%',
        padding: '0 8px',
        borderRadius: '15px',
    },
    adornment: {},
    icon: {
        // margin: '2%',
        color: standardTheme.textPlaceholder,
    },
}));
