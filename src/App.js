import React, { useState } from 'react';
import { Paper, Switch as ClickSwitch } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
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

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Paper style={{ width: window.innerWidth }}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Landing />
                        </Route>
                        <Route path="/application">
                            <TrademarkApplication />
                        </Route>
                    </Switch>
                </Router>
                <ClickSwitch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                />
            </Paper>
        </ThemeProvider>
    );
}
