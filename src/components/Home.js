import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core';
import Search from './Search';
import LocationCard from './LocationCard/LocationCard';
import ForcastList from './ForecastList';
import DayCard from './DayCard';
import ForecastList from './ForecastList';

const useStyles = makeStyles((theme) => ({
  root: {
    //flexGrow: 1,
    backgroundColor: '#dde3ed',
    // padding: 20,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container minWidth='md' className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Search />
        </Grid>

        <Grid item xs={6}>
          <LocationCard />
        </Grid>
        <Grid item xs={6}>
          {/* <LocationCard /> */}
        </Grid>

        <Grid item xs={12}>
          <ForecastList allDays={[1,1,1,1,1]}/>
        </Grid>
        {/* {[1, 2, 3, 4, 5].map((dayCard) => (
          <Grid item xs={2}>
            <DayCard />
          </Grid>
        ))} */}
      </Grid>
    </Container>
  );
};
export default Home;
