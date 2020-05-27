import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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

const DayCard =()=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Tuesday
        </Typography>
        <img src={require('../assets/celsius.png')}
                             alt=""
                             className="round-img"
                             style={{width: '60px'}}/>
                                                     <div>
                            <p>25 <i> °C</i></p>
                            <p>32 <i> °C</i></p>
                        </div>
      </CardContent>
    </Card>
  );
}
export default DayCard;