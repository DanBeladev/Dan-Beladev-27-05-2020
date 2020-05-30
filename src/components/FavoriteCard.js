import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getFavoriteData } from '../services/backendService';
import { HOME_ROUTE } from '../constants';
import { setLoactionAction, setWeatherDetailsAction } from '../actions/appActions'

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


const FavoriteCard = (props) => {
    const dispatch = useDispatch();
    
    // set functions
    const setLocation = (location) => dispatch(setLoactionAction(location));
    const setWeatherDetails = (locationKey) => dispatch(setWeatherDetailsAction(locationKey));
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
      <div>
        <p>
          {value} <i>° {unit}</i>
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
}
    console.log('data: ', data);
  return (
    <Card className={classes.root} onClick={cardOnClick}>
      <CardContent>
        <Typography variant='h4' component='h2'>
          {data.cityName}
        </Typography>
        <Typography variant='h5' component='h2'>
          {data.country}
        </Typography>
        <Typography variant='subtitle1' component='h2'>
          {data.description}
        </Typography>
        <img
          src={data.iconUrl}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        {data.temperature ? getTemp() : <i>Undefined</i>}        
      </CardContent>
    </Card>
  );
};

export default FavoriteCard;
