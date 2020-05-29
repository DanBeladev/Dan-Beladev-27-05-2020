import axios from 'axios';
import {KEY,LANGUAGE,AUTO_COMPLETE_API,CURRENT_CONDITIONS_API, FIVE_DAY_FORECAST_API} from '../config';

export const getSearchList = async (searchString) => {
  const url = `${AUTO_COMPLETE_API}?apikey=${KEY}&q=${searchString}&${LANGUAGE}`;
  const list = await sendGetRequest(url, []);
  return list;
};

export const getCurrentWeather = async (locationKey) => {
  const url = `${CURRENT_CONDITIONS_API}${locationKey}?apikey=${KEY}&${LANGUAGE}&details=false`;
  const list = await sendGetRequest(url, []);
  return list;
};

export const getWeeklyForecast = async (locationKey) => {
  const url = `${FIVE_DAY_FORECAST_API}${locationKey}?apikey=${KEY}&metric=true&${LANGUAGE}`;
  const weeklyForecast = await sendGetRequest(url, {});
  return weeklyForecast;
}

// Private functions
const sendGetRequest = async (url, errResponse) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return errResponse;
  }
};
