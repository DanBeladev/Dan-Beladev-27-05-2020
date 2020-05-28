import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import debounce from 'lodash.debounce';
import { searchAction, setLoactionAction } from '../actions/appActions';
import { DEBOUNCE_TIMEOUT_MS } from '../constants';

const Search = () => {
  const dispatch = useDispatch();
  const searchResults = useSelector((state) => state.app.searchResults);

  // Set functions
  const search = (text) => dispatch(searchAction(text));
  const setLocation = (location) => dispatch(setLoactionAction(location));

  // Events
  const onTyping = (event, value) => {
    // Set debounce function to be called after 1 second
    let toDebounce = debounce(() => {
      // Prevent
      if (value.length > 0) {
        search(value);
      }
    }, DEBOUNCE_TIMEOUT_MS);

    // Execute the debounce function
    toDebounce();
  };

  const onOptionSelect = (event, value) => {
    if (value) {
      const location = {
        key: value.Key,
        name: value.LocalizedName,
      };
      console.log(location);
      setLocation(location);
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
        <TextField {...params} label='Search here' variant='outlined' />
      )}
    />
  );
};

export default Search;
