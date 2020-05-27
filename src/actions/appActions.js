import {
    SET_TEXT,
} from "./types";

export const setText = (text) => dispatch => {
    dispatch({
        type: SET_TEXT,
        payload: text
    })
};

