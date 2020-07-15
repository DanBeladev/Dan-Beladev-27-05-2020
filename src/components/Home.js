import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Search from './Search';
import LocationCard from './LocationCard/LocationCard';
import ForecastList from './ForecastList/ForecastList';
import FullLoaderPage from './FullLoaderPage';
import { useSelector } from 'react-redux';

const Home = (props) => {
  const loading = useSelector((state) => state.app.loading);
  return loading ? (
    <FullLoaderPage />
  ) : (
    <Container minwidth='md'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Search />
        </Grid>

        <Grid item xs={6}>
          <LocationCard />
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={12}>
          <ForecastList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
