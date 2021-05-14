import React, { useState } from 'react';
import clsx from 'clsx';
import { Link, useHistory } from 'react-router-dom';
import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    Switch,
    Toolbar,
    Typography,
} from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import GavelIcon from '@material-ui/icons/Gavel';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import WbSunnyTwoToneIcon from '@material-ui/icons/WbSunnyTwoTone';
import NightsStayTwoToneIcon from '@material-ui/icons/NightsStayTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import { checkmarksTheme } from '../styles/Themes';
// import { userSignOut } from '../firebase/services';
import { useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

export const navbarStyles = makeStyles((theme) => ({
    // APPBAR
    appBarContainer: {
        flexGrow: 1,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // MENU
    menu: {
        backgroundColor: checkmarksTheme.bgPrimaryDark,
    },
    menuItem: {
        color: checkmarksTheme.inputIcon,
        // fontSize: '1.125renm',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 14,
        justifyContent: 'space-between',
        padding: '5px 20px',
        textDecoration: 'none',
    },
    askALawyer: {
        fontSize: '11px',
    },
    menuItemIcon: {
        marginRight: '6px',
    },
    // DRAWER
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarTitle: {
        color: checkmarksTheme.inputValue,
        fontSize: '24px',
        fontWeight: 'bold',
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        color: checkmarksTheme.buttonTextSecondary,
        height: '80px',
        padding: 0,
        width: '80px',
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: checkmarksTheme.bgAppBarOpq70,
        width: drawerWidth,
    },
    drawerPaperDark: {
        backgroundColor: checkmarksTheme.bgAppBarOpq70Dark,
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    },
    drawerListItemTitle: {
        marginLeft: '5%',
        fontStyle: 'italic',
    },
    drawerListItemText: {
        fontSize: '42px',
    },
    drawerRemoveButton: {
        padding: '5px',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    themeIcon: {},
    // AUTH Buttons - only visible on Laptop screens and above
    buttons: {
        display: 'none',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // margin: '10% 0 5% 0',
        width: '100%',
        // ['@media (min-width:768px)']: { justifyContent: 'flex-end' },
        ['@media (min-width:1280px)']: { display: 'flex' },
    },
    buttonStart: {
        backgroundColor: checkmarksTheme.buttonPrimary,
        '&:hover': {
            background: checkmarksTheme.hoverSoft,
        },
        border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
        borderRadius: '5px',
        color: checkmarksTheme.buttonTextPrimary,
        padding: '5px 0',
        minWidth: '250px',
        width: '40%',
        maxWidth: '300px',
    },
}));

export default function MenuAppBar({
    darkMode,
    setDarkMode,
    drawerOpen,
    handleDrawerOpen,
    handleDrawerClose,
}) {
    const classes = navbarStyles();
    const theme = useTheme();
    const history = useHistory();

    // MENU
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar
                style={{
                    backgroundColor: darkMode
                        ? checkmarksTheme.bgAppBarDark
                        : checkmarksTheme.bgAppBar,
                }}
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: drawerOpen,
                })}
            >
                <Toolbar className={classes.appBarContainer}>
                    {/* DRAWER */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(
                            classes.menuButton,
                            drawerOpen && classes.hide
                        )}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography
                            style={{
                                color: checkmarksTheme.inputValue,
                                fontSize: drawerOpen ? '20px' : '24px',
                                fontWeight: 'bold',
                                padding: '5px',
                            }}
                        >
                            Checkmarks
                        </Typography>
                    </Link>

                    <Box
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        {/* Ask a Lawyer Button     */}
                        <IconButton
                            className={classes.menuButton}
                            size="large"
                            // variant="contained"
                            // color="secondary"

                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            target="blank"
                            // component="a"
                            // href="https://golbey.com/contact/"
                        >
                            <Box
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <HelpOutlineIcon fontSize={'default'} />
                                <Typography className={classes.askALawyer}>
                                    Ask a Lawyer
                                </Typography>
                            </Box>
                        </IconButton>
                    </Box>

                    <Menu
                        PaperProps={{
                            style: {
                                backgroundColor: darkMode
                                    ? checkmarksTheme.bgOpaque90Dark
                                    : checkmarksTheme.bgOpaque90,
                                borderRadius: '10px',
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
                        <MenuItem
                            className={classes.menuItem}
                            target="blank"
                            component="a"
                            href="https://calendly.com/golbey_justin/checkmarks"
                        >
                            <EventIcon className={classes.menuItemIcon} />
                            Book Appointment
                        </MenuItem>
                        <MenuItem
                            className={classes.menuItem}
                            target="blank"
                            component="a"
                            href="https://golbey.com/contact/"
                        >
                            <GavelIcon className={classes.menuItemIcon} />
                            Contact Golbey Law
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
            <Drawer
                // className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                // style={{
                //     backgroundColor: darkMode
                //         ? checkmarksTheme.bgOpaque70Dark
                //         : checkmarksTheme.bgOpaque70,
                // }}
                classes={{
                    paper: darkMode
                        ? classes.drawerPaperDark
                        : classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Switch
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        name="switchCheckedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    {darkMode ? (
                        <NightsStayTwoToneIcon className={classes.themeIcon} />
                    ) : (
                        <WbSunnyTwoToneIcon className={classes.themeIcon} />
                    )}

                    <IconButton
                        className={classes.drawerListItemText}
                        onClick={handleDrawerClose}
                    >
                        {theme.direction === 'ltr' ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </div>
                <List>
                    <ListItem>
                        {/* <IconButton className={classes.drawerRemoveButton}>
                            <PlayCircleFilledTwoToneIcon />
                        </IconButton>
                        <ListItemText
                            className={classes.drawerListItemText}
                            primary={'Start Trademark Application'}
                        />
                        <IconButton
                            // onClick={() => {
                            //     history.push('/application');
                            // }}
                            className={classes.drawerListItemText}
                        >
                            <PlayCircleFilledTwoToneIcon />
                        </IconButton> */}
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}
