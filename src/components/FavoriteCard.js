import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getFavoriteData } from '../services/backendService';
import { HOME_ROUTE } from '../constants';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
  setLoactionAction,
  setWeatherDetailsAction,
} from '../actions/appActions';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    height: 370,
    background: 'lightslategray',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  temp: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'monospace',
    textAlign: 'center'
  },
  icon: {
    width: 170,
    height: 100,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'cursive',
    textAlign: 'center',
    margin:10,
    marginTop: 30
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
    data
      ? setData(data)
      : M.toast({ html: `Error with fetching favorites Data` });
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
    <div
      className='card blue-grey darken-1 col-xs-12 col-sm-6'
      style={{ minWidth: 180, maxWidth: 350, margin: 10 }}
      onClick={cardOnClick}
    >
      <div className='card-content white-text'>
        <div className='card-title'>{data.cityName}</div>
        <div className='card-secondary'>{data.country}</div>
        <div className={classes.description}>{data.description}</div>
        <img src={data.iconUrl} alt='' className={classes.icon} />
        <div className={classes.temp}>{data.temperature ? getTemp() : <i>0</i>}</div>
      </div>
    </div>
  );
};

FavoriteCard.propType = {
  locationKey: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
  cityName: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default FavoriteCard;
