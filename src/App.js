import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './layouts/Landing';
import Register from '../src/layouts/Register';
import TrademarkApplication from './layouts/TrademarkApplication';
import Good from '../src/components/TrademarkApplicationPage/GoodsAndServices';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/register">
                    <Register />
                </Route>
                <Route exact path="/">
                    <Landing />
                </Route>
                <Route path="/application">
                    <TrademarkApplication />
                </Route>
                <Route path="/good">
                    <Good />
                </Route>
            </Switch>
        </Router>
    );
}
