/*This actions is for the Search.js*/

import { SEARCH_LOADER } from "../../__helper/constants";
// This is for loading the Footer in the Search.js
// after the anime/manga loaded
export const searchLoader = (input) => {
    return {
      type: SEARCH_LOADER,
      payload: input
    };
}