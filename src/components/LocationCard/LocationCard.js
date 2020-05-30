import React, { useEffect } from 'react';
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
    maxWidth: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const LocationCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //TODO: Check if to useSelector once and destructering
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

  // Set functions
  const setCelsius = (newValue) => dispatch(setCelsiusAction(newValue));
  const setWeather = () => dispatch(setWeatherDetailsAction(locationKey));
  const removeFromFavorites = () =>
    dispatch(removeFromFavoritesAction(locationKey));
  const addToFavorites = () => dispatch(addToFavoritesAction(locationKey));
  // Events
  const onTempUnitClick = (event) => {
    setCelsius(!showCelsius);
  };

  const removeCity = () =>{
    removeFromFavorites();
    M.toast({html: `${locationName.city} ${REMOVED_FROM_FAVORITES}`})
  }
  const addCity = () =>{
    addToFavorites();
    M.toast({html: `${locationName.city} ${ADDED_TO_FAVORITES}`})
  }
  const onFavoriteClick = (event) => {
    isFavorite ? removeCity() : addCity();
  };

  // Functions
  const fetchLocationData = () => {
    setWeather(locationKey);
  };

  // Use effect
  useEffect(() => {
    fetchLocationData();
  }, [locationKey]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {locationName.city}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {locationName.country}
        </Typography>
        <Typography variant='body2' component='p'>
          <Typography variant='h6' component='p'>
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
          {locationIcon && <img src={locationIcon} alt='' />}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          className={favoriteBtnClass}
          onClick={onFavoriteClick}
        />
        <Button
          size='small'
          className={TemperatureBtnClass}
          onClick={onTempUnitClick}
        />
      </CardActions>
    </Card>
  );
};
export default LocationCard;
