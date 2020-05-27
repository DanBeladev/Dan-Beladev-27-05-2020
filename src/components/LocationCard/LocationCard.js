import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './LocationCard.css'

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

const LocationCard =()=> {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Tel Aviv
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Israel
        </Typography>
        <Typography variant="body2" component="p">
        <Typography variant="body2" component="p">17</Typography>
            here will be icon of weather
        </Typography>
      </CardContent>
      <CardActions>
          {/* <image src={require('../assets/celsius.png')} /> */}
          {/* <div><image src={require('../assets/heart.png')} /></div> */}
        <Button size="small" className="add-fav"/>
        <Button size="small" className="temp_unit"/>
        {/* <Button size="small">Celsius</Button> */}
      </CardActions>
    </Card>
  );
}
export default LocationCard;