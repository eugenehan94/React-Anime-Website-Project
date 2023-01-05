import {
  SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST,
  TOGGLE_ANIME_API_ERROR,
  TOGGLE_ANIME_IS_LOADING,
} from "../../__helper/constants";

export const selectedDropdown = (selected) => {
  return {
    type: SELECTED_CATEGORY,
    payload: selected,
  };
};

export const selectedList = (list) => {
  return {
    type: SELECTED_CATEGORY_LIST,
    payload: list,
  };
};
export const toggleAnimeIsLoading = (state) => {
  return {
    type: TOGGLE_ANIME_IS_LOADING,
    payload: state,
  };
};
export const toggleAnimeApiError = (state) => {
  return {
    type: TOGGLE_ANIME_API_ERROR,
    payload: state,
  };
};
