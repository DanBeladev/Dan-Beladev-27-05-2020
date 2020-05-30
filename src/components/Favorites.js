import React from 'react';
import { FAV_KEY } from '../constants';
import {useSelector} from 'react-redux';
import { Grid, Typography, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import FavoriteCard from './FavoriteCard';
import LocationCard from './LocationCard/LocationCard';

const useStyles = makeStyles((theme) => ({
    container: {
      padding: theme.spacing(2),
      borderRadius: 15,
      background:'floralwhite'

    },
  }));

const Favorites = () => {
    const classes = useStyles();
    const favoriteKeys = useSelector((state) => state.app.favoriteKeys);
    // const dispatch = useDispatch();
  return (
    <Paper justify='center' align='center' elevation={4} className={classes.container}>
      <Grid container justify="center" spacing={3}>
        {favoriteKeys.map((favKey,index) => {
            console.log(favKey);
            return(
            <Grid item align='center' key={index} xs={2}>
              <FavoriteCard locationKey={favKey} />
              {/* <LocationCard key={favKey} locationKey={favKey} /> */}
            </Grid>
          )})}
      </Grid>
    </Paper>
  );
};

export default Favorites;
