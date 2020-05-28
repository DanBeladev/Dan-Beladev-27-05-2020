import {
    UPDATE_SEARCH_RESULTS, SET_LOCATION
} from "./types";
import { getSearchList } from '../services/backendService';

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
