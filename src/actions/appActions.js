import {
    SET_TEXT,
} from "./types";

export const setTextAction = (text) => dispatch => {
        dispatch({
        type: SET_TEXT,
        payload: text
    })
};
