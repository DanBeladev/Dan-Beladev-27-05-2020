import axios from 'axios';
import {KEY,LANGUAGE,AUTO_COMPLETE_API} from '../config';

export const getSearchList = async (searchString) => {
  const url = `${AUTO_COMPLETE_API}?apikey=${KEY}&q=${searchString}&${LANGUAGE}`;
  const list = await sendGetRequest(url, []);
  return list;
};

// Private functions
const sendGetRequest = async (url, errResponse) => {
  try {
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    return errResponse;
  }
};
