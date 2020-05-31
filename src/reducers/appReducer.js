import {
  SET_LOCATION,
  SET_WEATHER_DETAILS,
  SET_WEEKLY_DATA,
  SET_SHOW_CELSIUS,
} from '../actions/types';

const initialState = {
  locationKey: '215854',
  defaultLocation: 'Tel Aviv',
  locationName: { city: 'Tel Aviv', country: 'Israel' },
  currentWeather: {},
  weeklyData: {},
  showCelsius: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        locationKey: action.payload.key,
        locationName: action.payload.name,
      };

    case SET_WEATHER_DETAILS:
      return {
        ...state,
        currentWeather: action.payload,
      };

    case SET_WEEKLY_DATA:
      return {
        ...state,
        weeklyData: action.payload,
      };

    case SET_SHOW_CELSIUS:
      return {
        ...state,
        showCelsius: action.payload,
      };
    default:
      return state;
  }
};
