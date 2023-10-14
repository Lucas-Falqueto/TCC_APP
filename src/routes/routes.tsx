import { AppBar } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from '../components/NavBar/NavBar';
import { AuthContext } from '../hooks/Context/AuthContext';
import history from '../hooks/history';
import Page404 from '../pages/404/Page404';
// import Page404 from '../pages/404/page404';
import Home from '../pages/Home/Home';
import Ficha from '../pages/InfoStudent/Ficha/Ficha';
import Login from '../pages/Login/Login';
import RegisterStudent from '../pages/RegisterStudent/RegisterStudent';
import CustomRoute from './CustomRoute';
const RoutesApp = () => {
  const { authenticated, loading } = useContext(AuthContext);

  return (
    <Router history={history}>
      {!loading && authenticated && <NavBar />}

      <Switch>
        <CustomRoute exact path="/login" isPrivate={false}>
          <Login />
        </CustomRoute>
        <CustomRoute exact path="/home" isPrivate={true}>
          <Home />
        </CustomRoute>
        <CustomRoute exact path="/cadastrarAluno" isPrivate={true}>
          <RegisterStudent></RegisterStudent>
        </CustomRoute>
        <CustomRoute exact path="/infoAlunos/ficha" isPrivate={true}>
          <Ficha />
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
