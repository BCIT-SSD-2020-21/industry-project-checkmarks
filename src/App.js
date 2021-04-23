import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../src/layouts/Register';
import TrademarkApplication from '../src/layouts/TrademarkApplication';
import Login from '../src/components/Login';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/application">
                    <TrademarkApplication />
                </Route>
            </Switch>
        </Router>
    );
}
