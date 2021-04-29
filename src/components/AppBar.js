import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import {
    AppBar,
    Box,
    Button,
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
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PlayCircleFilledTwoToneIcon from '@material-ui/icons/PlayCircleFilledTwoTone';
// import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // MENU
    menu: {
        // backgroundColor: holisticTheme.bgDrawer,
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
        // marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        backgroundColor: checkmarksTheme.bgDrawer,
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
    // buttonLogin: {
    //     backgroundColor: checkmarksTheme.buttonSecondary,
    //     '&:hover': {
    //         background: checkmarksTheme.hoverLight,
    //     },
    //     border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
    //     borderRadius: '5px',
    //     color: checkmarksTheme.buttonTextSecondary,
    //     padding: '5px 0',
    //     width: '40%',
    //     maxWidth: '100px',
    // },
    // buttonRegister: {
    //     backgroundColor: checkmarksTheme.buttonPrimary,
    //     '&:hover': {
    //         background: checkmarksTheme.hoverSoft,
    //     },
    //     border: `0.6px solid ${checkmarksTheme.buttonTextSecondary}`,
    //     borderRadius: '5px',
    //     color: checkmarksTheme.buttonTextPrimary,
    //     marginRight: '10px',
    //     padding: '5px 0',
    //     width: '55%',
    //     maxWidth: '130px',
    // },
}));

export default function MenuAppBar({
    authenticated,
    loggingIn,
    setLoggingIn,
    setSearching,
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

    // DRAWER
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const [switchState, setSwitchState] = useState({
        switchCheckedA: true,
        switchCheckedB: true,
    });
    const switchChange = (e) => {
        setSwitchState({ ...switchState, [e.target.name]: e.target.checked });
    };

    return (
        <div>
            <CssBaseline />
            <AppBar
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
                    <Typography className={classes.appBarTitle}>
                        Checkmarks
                    </Typography>
                    {/* <Link className={classes.appBarNavLink} to="/feed">
                        <AskALawyer />
                    </Link> */}
                    {/* <Link className={classes.appBarNavLink} to="/">
                        Dash
                    </Link> */}
                    {!authenticated && !loggingIn && (
                        <Box className={classes.buttons}>
                            {/* <Button
                                className={classes.buttonStart}
                                onClick={() => {
                                    setLoggingIn(false);
                                    setSearching(false);
                                    history.push('/register');
                                }}
                                boxShadow={2}
                            >
                                Start Trademark Application
                            </Button> */}
                            {/* <Button
                                className={classes.buttonRegister}
                                onClick={() => {
                                    setLoggingIn(false);
                                    setSearching(false);
                                    history.push('/register');
                                }}
                                boxShadow={2}
                            >
                                Register
                            </Button>
                            <Button
                                className={classes.buttonLogin}
                                onClick={() => {
                                    setSearching(false);
                                    setLoggingIn(!loggingIn);
                                }}
                                boxShadow={2}
                            >
                                Login
                            </Button> */}
                        </Box>
                    )}

                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            className={classes.menuButton}
                            color="inherit"
                        >
                            <AccountCircleTwoToneIcon />
                        </IconButton>
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
                            {authenticated ? (
                                <MenuItem
                                    className={classes.menuItem}
                                    onClick={() => {
                                        //   userSignOut()
                                        history.push('/');
                                    }}
                                >
                                    <ExitToAppIcon
                                        className={classes.menuItemIcon}
                                    />
                                    SignOut
                                </MenuItem>
                            ) : (
                                <Box>
                                    <MenuItem
                                        className={classes.menuItem}
                                        onClick={() => {
                                            setLoggingIn(false);
                                            setSearching(false);
                                            history.push('/register');
                                        }}
                                    >
                                        <PlayCircleFilledTwoToneIcon
                                            className={classes.menuItemIcon}
                                        />
                                        Start Trademark Application
                                    </MenuItem>
                                    {/* <MenuItem
                                        className={classes.menuItem}
                                        // onClick={() => toUserProfile(dataUser.id)}
                                    >
                                        <VpnKeyIcon
                                            className={classes.menuItemIcon}
                                        />
                                        Login
                                    </MenuItem>
                                    <MenuItem
                                        className={classes.menuItem}
                                        // onClick={() => toUserProfile(dataUser.id)}
                                    >
                                        <AccountBoxTwoToneIcon
                                            className={classes.menuItemIcon}
                                        />
                                        Register
                                    </MenuItem> */}
                                </Box>
                            )}

                            {/* <MenuItem className={classes.menuItem}>
                                <SettingsIcon
                                    className={classes.menuItemIcon}
                                />
                                Settings
                            </MenuItem> */}
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={drawerOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <Switch
                        checked={switchState.switchCheckedA}
                        onChange={switchChange}
                        name="switchCheckedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    {switchState.switchCheckedA ? (
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
                {/* <Divider /> */}
                {/* <SearchBox
                    label={'Search Connections: '}
                    onChange={setSearchConnectionsText}
                /> */}
                {/* <Divider /> */}
                <List>
                    {/* <Typography className={classes.drawerListItemTitle}>
                        Connections:{' '}
                    </Typography> */}
                    {/* {searchConnectionsText
                        ? searchResultUsers?.map((user, index) => (
                              <ListItem key={index}>
                                  <IconButton
                                      //   onClick={() =>
                                      //       removeUser(
                                      //           user.id,
                                      //           user.connectionUserIds
                                      //       )
                                      //   }
                                      className={classes.drawerRemoveButton}
                                  >
                                      <HighlightOffTwoToneIcon />
                                  </IconButton>
                                  <ListItemText
                                      className={classes.drawerListItemText}
                                      primary={user.username}
                                  />
                                  <IconButton
                                      //   onClick={() => toUserProfile(user.id)}
                                      className={classes.drawerListItemText}
                                  >
                                      <AccountCircleTwoToneIcon />
                                  </IconButton>
                              </ListItem>
                          ))
                        : userConnections?.map((user, index) => (
                              <ListItem key={index}>
                                  <IconButton
                                      //   onClick={() =>
                                      //       removeUser(
                                      //           user.id,
                                      //           user.connectionUserIds
                                      //       )
                                      //   }
                                      className={classes.drawerRemoveButton}
                                  >
                                      <HighlightOffTwoToneIcon />
                                  </IconButton>
                                  <ListItemText
                                      className={classes.drawerListItemText}
                                      primary={user.username}
                                  />
                                  <IconButton
                                      //   onClick={() => toUserProfile(user.id)}
                                      className={classes.drawerListItemText}
                                  >
                                      <AccountCircleTwoToneIcon />
                                  </IconButton>
                              </ListItem>
                          ))} */}
                </List>
                <Divider />
            </Drawer>
        </div>
    );
}
