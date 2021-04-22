import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../src/layouts/Register';
import TrademarkApplication from '../src/layouts/TrademarkApplication';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route path="/Application">
                    <TrademarkApplication />
                </Route>
            </Switch>
        </Router>
    );
}
