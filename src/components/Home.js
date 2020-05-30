import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import Search from './Search';
import LocationCard from './LocationCard/LocationCard';
import ForecastList from './ForecastList';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#dde3ed',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container minwidth='md' className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Search />
        </Grid>

        <Grid item xs={6}>
          <LocationCard />
        </Grid>
        <Grid item xs={6}>
        </Grid>

        <Grid item xs={12}>
          <ForecastList allDays={[1,1,1,1,1]}/>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Home;
