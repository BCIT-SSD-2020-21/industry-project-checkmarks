import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { checkmarksTheme } from '../../styles/Themes';
import {
    Box,
    Button,
    Card,
    Fade,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    TableCell,
    Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { withStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ResultDetail from './ResultDetail';
import FilterListIcon from '@material-ui/icons/FilterList';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

export default function FilterMenu({ dataKey, label }) {
    const classes = headerStyles();
    // MENU
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
        label[2](e);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Box className={classes.container}>
                {(dataKey === 'tmTypeDescriptions' ||
                    dataKey === 'statusDescEn' ||
                    dataKey === 'fileDateFormatted') && (
                    <IconButton
                        className={classes.button}
                        value={label[0]}
                        onClick={(e) => handleMenu(e)}
                    >
                        {anchorEl === null ? (
                            <FilterListIcon
                                className={classes.icon}
                                value={label[0]}
                            />
                        ) : (
                            <HighlightOffTwoToneIcon
                                className={classes.icon}
                                value={label[0]}
                            />
                        )}
                    </IconButton>
                )}

                <Box className={classes.textBox}>
                    <Typography className={classes.label} children={label[0]} />
                    <Typography
                        className={classes.sublabel}
                        children={label[1]}
                    />
                </Box>
            </Box>
            <Menu
                PaperProps={{
                    style: {
                        backgroundColor: checkmarksTheme.bgPrimary,
                        marginTop: '40px',
                    },
                }}
                className={classes.menu}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                {label[3].map((item, index) => {
                    return <MenuItem key={index}>{item}</MenuItem>;
                })}
            </Menu>
        </Box>
    );
}

const headerStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {},
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: { fontSize: '14px' },
    sublabel: { fontSize: '10px' },
}));
