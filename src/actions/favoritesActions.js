import {
    ADD_FAVORITES,
    REMOVE_FAVORITES,
  } from './types';
  
  export const addToFavoritesAction = (locationKey) => (dispatch) => {
    dispatch({ type: ADD_FAVORITES, payload: locationKey });
  };
  export const removeFromFavoritesAction = (locationKey) => (dispatch) => {
    dispatch({ type: REMOVE_FAVORITES, payload: locationKey });
  };
  
  