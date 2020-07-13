import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { cToF } from '../utils';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    maxHeight: 235,
    background: 'lightslategray',
    margin:10,
    textAlign: 'center'
  },
  pos: {
    marginBottom: 12,
  },
  temp: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace',
   },
  icon: {
    width: 160,
    height: 80,
  },
  value :{
    margin: 0
  }
});

const DayCard = (props) => {
  const classes = useStyles();
  const { name, Temperature, Day } = props.day;
  const showCelsius = useSelector((state) => state.app.showCelsius);

  const getTemp = () => {
    const minValue = showCelsius
      ? Temperature.Minimum.Value
      : cToF(Temperature.Minimum.Value);
    const maxValue = showCelsius
      ? Temperature.Maximum.Value
      : cToF(Temperature.Maximum.Value);
    const unit = showCelsius ? Temperature.Maximum.Unit : 'F';

    return (
      <div className={classes.temp}>
        <p className={classes.value}>
          {minValue}<i>° {unit}</i>
        </p>
        <p className={classes.value}>
          {maxValue}<i>° {unit}</i>
        </p>
      </div>
    );
  };

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography variant='h5' component='h2'>
          {name}
        </Typography>
        <img src={Day.Icon} alt='' className={classes.icon} />
        {getTemp()}
      </CardContent>
    </Card>
  );
};

DayCard.propType = {
  name: PropTypes.string.isRequired,
  day: PropTypes.object.isRequired,
  Temperature: PropTypes.object.isRequired
}

export default DayCard;
