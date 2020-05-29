import {
  UPDATE_SEARCH_RESULTS,
  SET_LOCATION,
  SET_WEATHER_DETAILS,
  SET_WEEKLY_DATA,
  SET_SHOW_CELSIUS,
  ADD_FAVORITES,
  REMOVE_FAVORITES 
} from '../actions/types';

import {FAV_KEY} from '../constants' ;

const initialState = {
  searchResults: [],
  locationKey: '215854',
  defaultLocation: 'Tel Aviv',
  locationName: { city: 'Tel Aviv', country: 'Israel' },
  currentWeather: {},
  weeklyData: {},
  showCelsius: true,
  favoriteKeys: JSON.parse(localStorage.getItem(FAV_KEY)) || []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload,
      };

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
        case REMOVE_FAVORITES:
          const newFavorites  = state.favoriteKeys.filter(favId => favId !== action.payload);
          localStorage.setItem(FAV_KEY, JSON.stringify(newFavorites));
          return {
            ...state,
            favoriteKeys: newFavorites,
          };

        case ADD_FAVORITES:
          const newFavs  = [...state.favoriteKeys, action.payload];
          localStorage.setItem(FAV_KEY, JSON.stringify(newFavs));
          return {
            ...state,
            favoriteKeys: newFavs,
          };
    default:
      return state;
  }
};
