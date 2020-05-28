import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DayCard from './DayCard';
import { Grid, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        borderRadius: 15
    }
}));

const ForecastList = ({ allDays }) => {
    const classes = useStyles()
  return (
      <Paper className={classes.container}>    
          <Grid item container spacing={1}>
      <Grid item xs={12}>
        <Typography align="center" variant="h2">Cloudy</Typography>
      </Grid>
      {allDays.map((day, index) => (
        <Grid item key={'day_' + index} xs={2}>
          <DayCard />
        </Grid>
      ))}
    </Grid>
    </Paper>
  );
};

export default ForecastList;
