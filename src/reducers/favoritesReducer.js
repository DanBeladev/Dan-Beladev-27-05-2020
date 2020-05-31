import {
    ADD_FAVORITES,
    REMOVE_FAVORITES,
  } from '../actions/types';
  
  import { FAV_KEY } from '../constants';
  
  const initialState = {
    favoriteKeys: JSON.parse(localStorage.getItem(FAV_KEY)) || [],
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case REMOVE_FAVORITES:
        const newFavorites = state.favoriteKeys.filter(
          (favId) => favId !== action.payload
        );
        localStorage.setItem(FAV_KEY, JSON.stringify(newFavorites));
        return {
          ...state,
          favoriteKeys: newFavorites,
        };
  
      case ADD_FAVORITES:
        const newFavs = [...state.favoriteKeys, action.payload];
        localStorage.setItem(FAV_KEY, JSON.stringify(newFavs));
        return {
          ...state,
          favoriteKeys: newFavs,
        };
      default:
        return state;
    }
  };
  