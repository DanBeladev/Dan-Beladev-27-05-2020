import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Favorites from './components/Favorites';

import { ROOT_ROUTE, HOME_ROUTE, FAVORITES_ROUTE } from './constants';

const useStyles = makeStyles((theme) => ({
  appContent: {
    marginTop: theme.spacing(4),
    //backgroundColor: '#a5b5cf',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>

      <AppNavBar />

      <Box height="100%" width="100%" className={classes.appContent}>
        <Switch>
          <Route exact path={ROOT_ROUTE}>
            <Redirect to={HOME_ROUTE} />
          </Route>
          <Route exact path={HOME_ROUTE}><Home /></Route>
          <Route exact path={FAVORITES_ROUTE}><Favorites /></Route>
        </Switch>
      </Box>

    </Fragment>
  );
}

export default App;
