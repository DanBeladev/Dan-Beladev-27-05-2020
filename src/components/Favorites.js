import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteCard from './FavoriteCard';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  empty: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 60,
    fontWeight: 800,
  },
}));

const Favorites = () => {
  const classes = useStyles();
  const favoriteKeys = useSelector((state) => state.favorites.favoriteKeys);
  return favoriteKeys.length > 0 ? (
    <div className={classes.container}>
      {favoriteKeys.map((favKey, index) => {
        return <FavoriteCard locationKey={favKey} key={index} />;
      })}
    </div>
  ) : (
    <div className={classes.empty}>There Are No Favorites Yet</div>
  );
};

export default Favorites;
