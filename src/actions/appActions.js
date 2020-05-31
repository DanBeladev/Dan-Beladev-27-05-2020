import {
  SET_LOCATION,
  SET_WEATHER_DETAILS,
  SET_WEEKLY_DATA,
  SET_SHOW_CELSIUS,
} from './types';
import {
  getCurrentWeather,
  getWeeklyForecast,
} from '../services/backendService';
import { getIconUrl } from '../utils';
import { DAYS } from '../constants';

export const setLoactionAction = (location) => (dispatch) => {
  dispatch({ type: SET_LOCATION, payload: location });
};

export const setWeatherDetailsAction = (locaionKey) => async (dispatch) => {
  const details = await getCurrentWeather(locaionKey);
  const weatherDetails = details.length > 0 ? details[0] : {};
  const { WeatherIcon, WeatherText, Temperature } = weatherDetails;
  const FixedWeatherIcon = getIconUrl(WeatherIcon);
  dispatch({
    type: SET_WEATHER_DETAILS,
    payload: { WeatherIcon: FixedWeatherIcon, WeatherText, Temperature },
  });
};

export const getWeeklyForecastAction = (locationKey) => async (dispatch) => {
  const weeklyForecast = await getWeeklyForecast(locationKey);
  if (weeklyForecast.Headline) {
    const weeklyData = {
      text: weeklyForecast.Headline.Text,
      dailyForecasts: setDailyForcasts(weeklyForecast.DailyForecasts),
    };
    dispatch({ type: SET_WEEKLY_DATA, payload: weeklyData });
  }
};

export const setCelsiusAction = (show) => (dispatch) => {
  dispatch({ type: SET_SHOW_CELSIUS, payload: show });
};

// Private fuctions
const setDailyForcasts = (dailyForecasts) => {
  const newDays = dailyForecasts.map((day) => {
    const name = DAYS[new Date(day.Date).getDay()];
    const { Temperature, Day, Night } = day;
    const dayIconUrl = getIconUrl(Day.Icon);
    Day.Icon = dayIconUrl;
    return { name, Temperature, Day, Night };
  });
  return newDays;
};
