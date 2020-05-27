import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FreeSolo from './Search';
import LocationCard from './LocationCard/LocationCard';
import DayCard from './DayCard';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={10}>
        <Grid item xs={12}>
          <FreeSolo />
          {/* <Paper className={classes.paper}>xs=12</Paper> */}
        </Grid>
        <Grid item xs={6}>
          <LocationCard />
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
        </Grid>
        <Grid item xs={2}>
          <DayCard />
          {/* <Paper className={classes.paper}>xs=2</Paper> */}
        </Grid>
        <Grid item xs={2}>
          <DayCard />
          {/* <Paper className={classes.paper}>xs=2</Paper> */}
        </Grid>
        <Grid item xs={2}>
          <DayCard />
          {/* <Paper className={classes.paper}>xs=2</Paper> */}
        </Grid>
        <Grid item xs={2}>
          <DayCard />
          {/* <Paper className={classes.paper}>xs=2</Paper> */}
        </Grid>
        <Grid item xs={2}>
          <DayCard />
          {/* <Paper className={classes.paper}>xs=2</Paper> */}
        </Grid>
      </Grid>
    </div>
  );
};
export default Home;
