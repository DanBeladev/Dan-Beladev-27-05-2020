import {
    SET_TEXT,
} from "../actions/types";

const initialState = {
    text: '',
    locationKey: '215854',
    defaultLocation: 'Tel Aviv',
    location: 'Tel Aviv',
    cities: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TEXT:
            return {
              ...state,
              text: action.payload
            };
        default:
            return state
    }
}