import React, { useState, useEffect, useRef } from 'react';
import {
    Box,
    Button,
    Card,
    FormControl,
    IconButton,
    Input,
    InputLabel,
    InputAdornment,
    Typography,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Fade from '@material-ui/core/Fade';
import SearchTwoToneIcon from '@material-ui/icons/SearchTwoTone';
import PlayArrowTwoToneIcon from '@material-ui/icons/PlayArrowTwoTone';
import LoopIcon from '@material-ui/icons/Loop';
import { checkmarksTheme } from '../styles/Themes';
import { makeStyles } from '@material-ui/core/styles';
import SearchResults from './LandingPage/SearchResults';
import { searchTrademarks } from '../services/checkmarks';

export default function SearchField({ loading, placeholder, setInputTo }) {
    const classes = searchBoxStyles();
    const history = useHistory();

    return (
        <FormControl className={classes.form}>
            <Input
                className={classes.input}
                onChange={(e) => setInputTo(e.target.value)}
                id="searchBox"
                placeholder={placeholder}
                style={{ position: 'relative' }}
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
                                loading ? classes.iconLoading : classes.hidden
                            }
                        />
                    </InputAdornment>
                }
            />
        </FormControl>
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
        // '&:hover': {
        //     backgroundColor: checkmarksTheme.hoverLight,
        // },
    },
    edgeButton: {
        animation: '1s $edgeButtonFadeIn',
        width: '10px',
        height: '54px',
        // height: '100%',
        color: 'white',
        opacity: 0.6,
        borderRadius: '0 100px 100px 0',
        backgroundColor: 'red',
        position: 'absolute',
        right: -30,
        top: 0,
        // opacity: 1,
        // transitionDelay: '1s',
        // transitionTimingFunction: 'linear',
        transition: 'opacity 1s linear',
    },
    searchBoxShifted: {
        animation: '$shiftUp-searchBox-mobile 1s',
        transform: 'translateY(-360%)',
        ['@media (min-width:768px)']: {
            animation: '$shiftUp-searchBox-tablet 1s',
            transform: 'translateY(-300%)',
        },
        ['@media (min-width:1280px)']: {
            animation: '$shiftUp-searchBox-generic 1s',
            transform: 'translateY(-200%)',
        },
    },
    searchResultsShifted: {
        // flex: 1,
        // width: '100%',
        // animation: '$shiftUp-results 1s',
        // transform: 'translateY(-20%)',
    },
    results: {
        animation: '$shiftUp-results-mobile 1s',
        transform: 'translateY(-48%)',
        ['@media (min-width:768px)']: {
            animation: '$shiftUp-results-tablet 1s',
            transform: 'translateY(-40%)',
        },
        ['@media (min-width:1280px)']: {
            animation: '$shiftUp-results-generic 1s',
            transform: 'translateY(-20%)',
        },
        // flexGrow: 1,
        // flexShrink: 0,
        // height: (window.innerHeight * 2) / 3,
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
        to: { transform: 'translateY(-360%)' },
    },
    '@keyframes shiftUp-searchBox-tablet': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-300%)' },
    },
    '@keyframes shiftUp-searchBox-generic': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-200%)' },
    },
    '@keyframes shiftDown-searchBox-mobile': {
        from: { transform: 'translateY(-360%)' },
        to: { transform: 'translateY(0px)' },
    },
    '@keyframes shiftDown-searchBox-tablet': {
        from: { transform: 'translateY(-300%)' },
        to: { transform: 'translateY(0px)' },
    },
    '@keyframes shiftDown-searchBox-generic': {
        from: { transform: 'translateY(-200%)' },
        to: { transform: 'translateY(0px)' },
    },
    // SearchResults Table Animations
    '@keyframes shiftUp-results-mobile': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-48%)' },
    },
    '@keyframes shiftUp-results-tablet': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-40%)' },
    },
    '@keyframes shiftUp-results-generic': {
        from: { transform: 'translateY(0px)' },
        to: { transform: 'translateY(-20%)' },
    },
}));
