import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getFavoriteData } from '../services/backendService';
import { HOME_ROUTE } from '../constants';
import {
  setLoactionAction,
  setWeatherDetailsAction,
} from '../actions/appActions';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background: 'lightslategray',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  temp: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  icon: {
    width: 170,
    height: 100,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'cursive',
  },
  pos: {
    marginBottom: 12,
  },
});

const FavoriteCard = (props) => {
  const dispatch = useDispatch();

  const setLocation = (location) => dispatch(setLoactionAction(location));
  const setWeatherDetails = (locationKey) =>
    dispatch(setWeatherDetailsAction(locationKey));
  const classes = useStyles();
  const [data, setData] = useState({});
  const history = useHistory();
  const { locationKey } = props;
  const showCelsius = useSelector((state) => state.app.showCelsius);

  const fetchFavoriteData = async (locationKey) => {
    const data = await getFavoriteData(locationKey);
    setData(data);
  };

  useEffect(() => {
      fetchFavoriteData(locationKey);
  }, [locationKey]);

  const getTemp = () => {
    const value = showCelsius
      ? data.temperature.Metric.Value
      : data.temperature.Imperial.Value;
    const unit = showCelsius
      ? data.temperature.Metric.Unit
      : data.temperature.Imperial.Unit;

    return (
      <div className={classes.temp}>
        <p>
          {value}
          <i>° {unit}</i>
        </p>
      </div>
    );
  };

  const cardOnClick = () => {
    const location = {
      key: data.key,
      name: {
        city: data.cityName,
        country: data.country.LocalizedName,
      },
    };
    setLocation(location);
    setWeatherDetails(location.key);
    history.push(HOME_ROUTE);
  };
  return (
    <Card className={classes.root} onClick={cardOnClick} elevation={4}>
      <CardContent>
        <Typography variant='h4' component='h2'>
          {data.cityName}
        </Typography>
        <Typography
          variant='h5'
          component='h2'
          color='textSecondary'
          className={classes.pos}
        >
          {data.country}
        </Typography>
        <Typography
          className={classes.description}
          variant='subtitle1'
          component='h2'
        >
          {data.description}
        </Typography>
        <img src={data.iconUrl} alt='' className={classes.icon} />
        {data.temperature ? getTemp() : <i>Undefined</i>}
      </CardContent>
    </Card>
  );
};

export default FavoriteCard;
