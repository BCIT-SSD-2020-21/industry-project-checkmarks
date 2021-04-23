import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './layouts/Landing';
import Register from '../src/layouts/Register';
import Login from './components/LandingPage/Login';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                {/* <Route path="/login">
                    <Login />
                </Route> */}
                <Route path="/">
                    <Landing />
                </Route>
            </Switch>
        </Router>
    );
}
