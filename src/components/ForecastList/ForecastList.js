import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DayCard from '../DayCard';
import { getWeeklyForecastAction } from '../../actions/appActions';
import PropTypes from 'prop-types';
import './ForecastList.css'

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    borderRadius: 15,
    background: 'linen',
    maxHeight: 230,
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },
  text:{
    fontSize: 50,
    fontFamily:'cursive',
  },
  daysCards:{
    display:'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  dayItem: {
    justify: 'center',
  },
}));

const ForecastList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const locationKey = useSelector((state) => state.app.locationKey);
  const weeklyData = useSelector((state) => state.app.weeklyData);

  const getWeeklyForecast = () =>
    dispatch(getWeeklyForecastAction(locationKey));

  useEffect(() => {
    getWeeklyForecast();
  }, [locationKey]);

  return (
    <div className={classes.container}>
          <span className="text">

            {weeklyData.text}
          </span>
        <div className={classes.daysCards}>
        {weeklyData.dailyForecasts &&
          weeklyData.dailyForecasts.map((day, index) => (
              <DayCard key={'dayCard_' + index} day={day} />
          ))}
          </div>
    </div>  

  );
};

ForecastList.propTypes = {
day: PropTypes.object,
locationKey: PropTypes.string,
weeklyData: PropTypes.object,
}
export default ForecastList;
