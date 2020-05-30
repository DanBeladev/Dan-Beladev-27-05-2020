import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Favorites from './components/Favorites';

import { ROOT_ROUTE, HOME_ROUTE, FAVORITES_ROUTE } from './constants';

const useStyles = makeStyles((theme) => ({
  appContent: {
    padding: 30,
    height: '100%',
    width: '100%',
    // backgroundColor: 'blue'
  },
}));

function App() {
  const classes = useStyles();
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <Fragment>
      <AppNavBar />

      <Box  className={classes.appContent}>
        <Switch>
          <Route exact path={ROOT_ROUTE}>
            <Redirect to={HOME_ROUTE} />
          </Route>
          <Route exact path={HOME_ROUTE}>
            <Home />
          </Route>
          <Route exact path={FAVORITES_ROUTE}>
            <Favorites />
          </Route>
        </Switch>
      </Box>
    </Fragment>
  );
}

export default App;
