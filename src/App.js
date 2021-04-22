import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from '../src/layouts/Register';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}
