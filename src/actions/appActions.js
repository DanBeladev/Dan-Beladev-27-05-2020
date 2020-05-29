import {
    UPDATE_SEARCH_RESULTS, SET_LOCATION, SET_WEATHER_DETAILS,
    SET_WEEKLY_DATA,
    SET_SHOW_CELSIUS,
    ADD_FAVORITES,
    REMOVE_FAVORITES
} from "./types";
import { getSearchList, getCurrentWeather, getWeeklyForecast } from '../services/backendService';
import { getIconUrl } from '../utils';
import { DAYS } from "../constants";

export const searchAction = (text) => async (dispatch) => {
    const list = await getSearchList(text);
    dispatch({
        type: UPDATE_SEARCH_RESULTS,
        payload: list
    })
};

export const setLoactionAction = (location) => dispatch => {
    dispatch({ type: SET_LOCATION, payload: location });
}

export const setWeatherDetailsAction = (locaionKey) => async dispatch => {
    const details = await getCurrentWeather(locaionKey)
    const weatherDetails = details.length> 0 ? details[0]: {};
    const {WeatherIcon, WeatherText, Temperature} = weatherDetails;
    const FixedWeatherIcon = getIconUrl(WeatherIcon);
    dispatch({ type: SET_WEATHER_DETAILS, payload: {WeatherIcon: FixedWeatherIcon, WeatherText, Temperature} });
}

export const getWeeklyForecastAction = (locationKey) => async (dispatch) => {
    const weeklyForecast = await getWeeklyForecast(locationKey);
    
    // TODO: Decide what to return in case of an error
    if (weeklyForecast.Headline) {
        const weeklyData = {
            text: weeklyForecast.Headline.Text,
            dailyForecasts: setDailyForcasts(weeklyForecast.DailyForecasts)
        }
        dispatch({ type: SET_WEEKLY_DATA, payload: weeklyData })
    }
}

export const setCelsiusAction = (show) => dispatch => {
    dispatch({ type: SET_SHOW_CELSIUS, payload: show })
}

export const addToFavoritesAction = (locationKey) => dispatch => {
    dispatch({ type: ADD_FAVORITES, payload: locationKey })
}
export const removeFromFavoritesAction = (locationKey) => dispatch => {
    dispatch({ type: REMOVE_FAVORITES, payload: locationKey })
}

// Private fuctions
const setDailyForcasts = (dailyForecasts) => {
    const newDays = dailyForecasts.map(day => {
        const name = DAYS[new Date(day.Date).getDay()];
        const { Temperature, Day, Night } = day;
        const dayIconUrl = getIconUrl(Day.Icon);
        Day.Icon = dayIconUrl;
        return { name, Temperature, Day, Night }      
    })
    return newDays;
}