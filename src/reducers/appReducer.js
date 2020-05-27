import {
    UPDATE_SEARCH_RESULTS,
} from "../actions/types";

const initialState = {
    //text: '',
    searchResults: [],
    locationKey: '215854',
    defaultLocation: 'Tel Aviv',
    location: 'Tel Aviv',
    test:'Rami',
    //cities: []
};


export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_RESULTS:
            return {
              ...state,
              searchResults: action.payload
            };
        default:
            return state
    }
}