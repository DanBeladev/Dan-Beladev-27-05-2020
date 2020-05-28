import {
    UPDATE_SEARCH_RESULTS, SET_LOCATION
} from "../actions/types";

const initialState = {
    //text: '',
    searchResults: [],
    locationKey: '215854',
    defaultLocation: 'Tel Aviv',
    locationName: 'Tel Aviv',
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

            case SET_LOCATION:
                return {
                  ...state,
                  locationKey: action.payload.key,
                  locationName: action.payload.name
                };
        default:
            return state
    }
}