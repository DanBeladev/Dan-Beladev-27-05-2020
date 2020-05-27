import React, {Fragment} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppNavBar from './components/AppNavBar';
import Home from './components/Home';
import Favorites from './components/Favorites';

import {ROOT_ROUTE, HOME_ROUTE, FAVORITES_ROUTE} from './constants';

function App() {
  return (
    <Fragment>
        <AppNavBar />
      
        <Switch>
        <Route exact path={ROOT_ROUTE}>
            <Redirect to={HOME_ROUTE} />
          </Route>
          <Route exact path={HOME_ROUTE}><Home /></Route>
          <Route exact path={FAVORITES_ROUTE}><Favorites /></Route>
        </Switch>
    
    </Fragment>
  );
}

export default App;
