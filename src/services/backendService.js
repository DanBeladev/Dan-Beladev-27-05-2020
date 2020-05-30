import axios from 'axios';
import {KEY,LANGUAGE,AUTO_COMPLETE_API,CURRENT_CONDITIONS_API, FIVE_DAY_FORECAST_API, SEARCH_BY_LOCATION_KEY} from '../config';
import {getIconUrl} from '../utils';

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

export const getFavoriteData = async (locationKey) => {
  const locationUrl = `${SEARCH_BY_LOCATION_KEY}${locationKey}?apikey=${KEY}&${LANGUAGE}`;
  const locationData = await sendGetRequest(locationUrl,{});
  const locationWeatherList = await getCurrentWeather(locationKey);
  const locationWeather = locationWeatherList[0];
  console.log(locationWeather,locationData);
  const favoriteData = {
    key: locationKey,
    cityName: locationData.LocalizedName,
    country: locationData.Country.LocalizedName,
    iconUrl: getIconUrl(locationWeather.WeatherIcon),
    description:locationWeather.WeatherText,
    temperature:locationWeather.Temperature  
  }
  return favoriteData;
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
