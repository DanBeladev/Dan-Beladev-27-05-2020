import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
  setWeatherDetailsAction,
  setCelsiusAction,
  addToFavoritesAction,
  removeFromFavoritesAction,
} from '../../actions/appActions';
import './LocationCard.css';
import { REMOVED_FROM_FAVORITES, ADDED_TO_FAVORITES } from '../../constants';

const useStyles = makeStyles({
  root: {
    borderRadius: 15,
    maxwidth: '70%',
    background: 'linen',
    marginBottom: 25,
    marginTop: 25,
  },
  pos: {
    marginBottom: 12,
  },
  weatherContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  icon: {
    width: 160,
    height: 70,
  },
});

const LocationCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const locationKey = useSelector((state) => state.app.locationKey);
  const locationName = useSelector((state) => state.app.locationName);
  const currentWeather = useSelector((state) => state.app.currentWeather);
  const showCelsius = useSelector((state) => state.app.showCelsius);
  const favoriteKeys = useSelector((state) => state.app.favoriteKeys);
  const locationIcon = useSelector(
    (state) => state.app.currentWeather.WeatherIcon
  );
  const TemperatureBtnClass = showCelsius ? 'imperial_unit' : 'metric_unit';
  const isFavorite = favoriteKeys.includes(locationKey);
  const favoriteBtnClass = isFavorite ? 'remove-fav' : 'add-fav';

  const setCelsius = (newValue) => dispatch(setCelsiusAction(newValue));
  const setWeather = () => dispatch(setWeatherDetailsAction(locationKey));
  const removeFromFavorites = () =>
    dispatch(removeFromFavoritesAction(locationKey));
  const addToFavorites = () => dispatch(addToFavoritesAction(locationKey));

  const onTempUnitClick = (event) => {
    setCelsius(!showCelsius);
  };

  const removeCity = () => {
    removeFromFavorites();
    M.toast({ html: `${locationName.city} ${REMOVED_FROM_FAVORITES}` });
  };

  const addCity = () => {
    addToFavorites();
    M.toast({ html: `${locationName.city} ${ADDED_TO_FAVORITES}` });
  };

  const onFavoriteClick = (event) => {
    isFavorite ? removeCity() : addCity();
  };

  const fetchLocationData = () => {
    setWeather(locationKey);
  };

  useEffect(() => {
    fetchLocationData();
  }, [locationKey]);

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography variant={'h5'} component={'span'}>
          {locationName.city}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {locationName.country}
        </Typography>
        <Typography
          className={classes.weatherContainer}
          alignright='true'
          variant={'body2'}
          component={'span'}
        >
          <Typography variant={'h4'} component={'span'}>
            {currentWeather.Temperature && (
              <i>
                {showCelsius
                  ? `${currentWeather.Temperature['Metric'].Value}°
              ${currentWeather.Temperature['Metric'].Unit}`
                  : `${currentWeather.Temperature['Imperial'].Value}°
            ${currentWeather.Temperature['Imperial'].Unit}`}
              </i>
            )}
          </Typography>
          {locationIcon && (
            <img className={classes.icon} src={locationIcon} alt='' />
          )}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          className={favoriteBtnClass}
          onClick={onFavoriteClick}
          children={<Fragment></Fragment>}
        />
        <Button
          size='small'
          className={TemperatureBtnClass}
          onClick={onTempUnitClick}
          children={<Fragment></Fragment>}
        />
      </CardActions>
    </Card>
  );
};
export default LocationCard;
