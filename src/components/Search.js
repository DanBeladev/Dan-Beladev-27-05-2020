import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import debounce from 'lodash.debounce';
import M from 'materialize-css/dist/js/materialize.min.js';
import {
  searchAction,
  setLoactionAction,
  setWeatherDetailsAction,
} from '../actions/appActions';
import { DEBOUNCE_TIMEOUT_MS } from '../constants';

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.app.searchResults);

  const search = (text) => dispatch(searchAction(text));
  const setLocation = (location) => dispatch(setLoactionAction(location));
  const setWeatherDetails = (locationKey) =>
    dispatch(setWeatherDetailsAction(locationKey));

  const onTyping = (event, value) => {
    let toDebounce = debounce(() => {
        if (value.length > 0) {
          search(value);
        }
        else{
          M.toast({html: 'Error with seraching results'})
        }
      }, DEBOUNCE_TIMEOUT_MS);
      
      toDebounce();
  };

  const onOptionSelect = (event, value) => {
    if (value) {
      const location = {
        key: value.Key,
        name: {
          city: value.LocalizedName,
          country: value.Country.LocalizedName,
        },
      };
      setLocation(location);
      setWeatherDetails(location.key);
    }
  };

  return (
    <Autocomplete
      id='auto-complete'
      clearOnEscape
      options={searchResults}
      onChange={onOptionSelect}
      onInputChange={onTyping}
      getOptionLabel={(option) => option.LocalizedName}
      renderInput={(params) => (
        <TextField
          {...params}
          id='filled-search'
          label='Search Locations'
          type='search'
          variant='outlined'
        />
      )}
    />
  );
};

export default Search;
