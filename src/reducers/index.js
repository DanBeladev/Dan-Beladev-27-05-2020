import { combineReducers } from 'redux';
import appReducer from './appReducer';
import searchReducer from './searchReducer';
import favoritesReducer from './favoritesReducer';

export default combineReducers({
    app: appReducer,
    search: searchReducer,
    favorites: favoritesReducer,
});