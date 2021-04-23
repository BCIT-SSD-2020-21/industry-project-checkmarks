import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../src/layouts/Register';
import Login from '../src/components/Login';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/Register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}
