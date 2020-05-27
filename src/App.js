import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Favorites from './components/Favorites';

import {ROOT_ROUTE, HOME_ROUTE, FAVORITES_ROUTE} from './constants';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing(4),
    backgroundColor: '#a5b5cf'
    //padding: 20,
  },
  appContent: {
    //marginTop: theme.spacing(10),
    //marginBottom: theme.spacing(10),
    width: '100%',
    height: '100%'
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Fragment>    
      <AppNavBar />
      <div className={classes.root}>       
        

        <main className={classes.appContent}>
        <Switch>
        <Route exact path={ROOT_ROUTE}>
            <Redirect to={HOME_ROUTE} />
          </Route>
          <Route exact path={HOME_ROUTE}><Home /></Route>
          <Route exact path={FAVORITES_ROUTE}><Favorites /></Route>
        </Switch>
        </main>
        </div>
        </Fragment>

  );
}

export default App;
