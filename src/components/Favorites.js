import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import FavoriteCard from './FavoriteCard';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    borderRadius: 15,
    background: 'linen',
  },
}));

const Favorites = () => {
  const classes = useStyles();
  const favoriteKeys = useSelector((state) => state.app.favoriteKeys);
  return (
    <Paper
      justify='center'
      align='center'
      elevation={4}
      className={classes.container}
    >
      <Grid container justify='center' spacing={3}>
        {favoriteKeys.map((favKey, index) => {
          console.log(favKey);
          return (
            <Grid item align='center' key={index} xs={2}>
              <FavoriteCard locationKey={favKey} />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Favorites;
