import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import MenuAppBar from './components/AppBar';
import Landing from './layouts/Landing';
import TrademarkApplication from './layouts/TrademarkApplication';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const darkTheme = createMuiTheme({
        palette: {
            type: 'dark',
        },
    });
    const lightTheme = createMuiTheme({
        palette: {
            type: 'light',
        },
    });

    // DRAWER
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerOpen = () => {
        setDrawerOpen(true);
        // setProgressBarPosition(1)
    };
    const handleDrawerClose = () => {
        setDrawerOpen(false);
        // setProgressBarPosition(0)
    };

    console.log('App, drawerOpen: ', drawerOpen);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper>
                <Router>
                    <MenuAppBar
                        darkMode={darkMode}
                        setDarkMode={setDarkMode}
                        drawerOpen={drawerOpen}
                        handleDrawerOpen={handleDrawerOpen}
                        handleDrawerClose={handleDrawerClose}
                    />
                    <Switch>
                        <Route exact path="/">
                            <Landing darkMode={darkMode} />
                        </Route>
                        <Route path="/application">
                            <TrademarkApplication
                                darkMode={darkMode}
                                drawerOpen={drawerOpen}
                            />
                        </Route>
                    </Switch>
                </Router>
            </Paper>
        </ThemeProvider>
    );
}
