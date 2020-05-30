import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import DayCard from './DayCard';
import { Grid, Typography, Paper } from '@material-ui/core';
import { getWeeklyForecastAction } from '../actions/appActions';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    borderRadius: 15,
    background: 'linen',
    maxHeight: 260,
  },
  dayItem: {
    justify: 'center',
  },
}));

const ForecastList = ({ allDays }) => {
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
    <Paper className={classes.container} elevation={3}>
      <Grid item container justify='center' spacing={2}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            {weeklyData.text}
          </Typography>
        </Grid>
        {weeklyData.dailyForecasts &&
          weeklyData.dailyForecasts.map((day, index) => (
            <Grid item align='center' key={'day_' + index} xs={2}>
              <DayCard key={'dayCard_' + index} day={day} />
            </Grid>
          ))}
      </Grid>
    </Paper>
  );
};

export default ForecastList;
