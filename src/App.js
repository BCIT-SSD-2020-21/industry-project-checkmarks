import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './layouts/Landing';
import TrademarkApplication from './layouts/TrademarkApplication';

export default function App() {
    return (
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
    );
}
