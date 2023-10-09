import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import history from '../hooks/history';
import Page404 from '../pages/404/page404';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import CustomRoute from './CustomRoute';
const RoutesApp = () => {
  return (
    <Router history={history}>
      <Switch>
        <CustomRoute exact path="/login" isPrivate={false}>
          <Login />
        </CustomRoute>
        <CustomRoute exact path="/home" isPrivate={true}>
          <Home />
        </CustomRoute>
        <Route path="*">
          {() => {
            return <Page404 />;
          }}
        </Route>
      </Switch>
    </Router>
  );
};

export default RoutesApp;
