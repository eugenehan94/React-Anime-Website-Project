/*This actions is for the Search.js*/

import {
  SEARCH_LOADER,
  SEARCH_PENDING,
  SET_SEARCH_ERROR_MESSAGE,
} from "../../__helper/constants";
// This is for loading the Footer in the Search.js
// after the anime/manga loaded
export const searchLoader = (input) => {
  return {
    type: SEARCH_LOADER,
    payload: input,
  };
};

export const setSearchPending = (input) => {
  return {
    type: SEARCH_PENDING,
    payload: input,
  };
};

export const setSearchErrorMessage = (input) => {
  return {
    type: SET_SEARCH_ERROR_MESSAGE,
    payload: input
  };
};
