import { ICON_SHORTER_URL, ICON_EXTENSION, ICON_URL } from './config';

export const cToF = (celsius) => {
  const number = parseInt((celsius * 9) / 5 + 32);
  return Math.round(number * 10) / 10;
};

// TODO: Refactor
export const getIconUrl = (weatherIcon) => {
  const length = weatherIcon.toString().length;
  return length > 1
    ? `${ICON_SHORTER_URL}${weatherIcon}${ICON_EXTENSION}`
    : `${ICON_URL}${weatherIcon}${ICON_EXTENSION}`;
};
