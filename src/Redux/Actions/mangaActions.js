import {
  MANGA_SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST_MANGA,
  TOGGLE_MANGA_IS_LOADING,
  TOGGLE_MANGA_API_ERROR,
} from "../../__helper/constants";

export const selectedDropdown = (selected) => {
  return {
    type: MANGA_SELECTED_CATEGORY,
    payload: selected,
  };
};

export const selectedList = (list) => {
  return {
    type: SELECTED_CATEGORY_LIST_MANGA,
    payload: list,
  };
};

export const toggleMangaIsLoading = (state) => {
  return {
    type: TOGGLE_MANGA_IS_LOADING,
    payload: state,
  };
};
export const toggleMangaApiError = (state) => {
  return {
    type: TOGGLE_MANGA_API_ERROR,
    payload: state,
  };
};
