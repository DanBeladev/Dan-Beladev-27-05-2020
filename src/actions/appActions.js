import {
    UPDATE_SEARCH_RESULTS,
} from "./types";
import { getSearchList } from '../services/backendService';

export const setTextAction = (text) => async (dispatch) => {
    const list = await getSearchList(text);  
    dispatch({
        type: UPDATE_SEARCH_RESULTS,
        payload: list
    })
};
