import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { cToF } from '../utils';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    background: 'cornsilk',
    borderColor: 'darkgrey',
    borderWidth: 1,
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
  temp: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'monospace'
  },
  icon: {
    width: 170,
    height: 100
  }
});

const DayCard = (props) => {
  const classes = useStyles();
  const { name, Temperature, Day } = props.day;
  const showCelsius = useSelector((state) => state.app.showCelsius);

  // Functions
  const getTemp = () => {
    const minValue = showCelsius ? Temperature.Minimum.Value : cToF(Temperature.Minimum.Value);
    const maxValue = showCelsius ? Temperature.Maximum.Value : cToF(Temperature.Maximum.Value);
    const unit = showCelsius ? Temperature.Maximum.Unit : 'F';

    return ( 
      <div className={classes.temp}>
        <p>
          {minValue} <i> °{unit}</i>
        </p>
        <p>
          {maxValue} <i> °{unit}</i>
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
        <img
          src={Day.Icon}
          alt=''
          className={classes.icon}
        />
        {
          getTemp()
        }
      </CardContent>
    </Card>
  );
};

export default DayCard;
