import React, { useState } from 'react';
import { checkmarksTheme } from '../styles/Themes';
import { Box, IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    icon: {
        fontSize: '20px',
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: { fontSize: '14px' },
    sublabel: { fontSize: '10px' },
}));
