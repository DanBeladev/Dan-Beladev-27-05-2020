import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { 
    AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';

import { HOME_ROUTE, FAVORITES_ROUTE } from '../constants';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'darkslategray'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppNavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  // Events
  const onButtonClick = (path) => {
      history.push(path);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Herolo Weather 
          </Typography>
          <Button color="inherit" onClick={()=> onButtonClick(HOME_ROUTE)}>Home</Button>
          <Button color="inherit" onClick={()=>onButtonClick(FAVORITES_ROUTE)}>Favorites</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppNavBar;