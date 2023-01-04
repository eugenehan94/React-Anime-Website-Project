import { SELECTED_CATEGORY, SELECTED_CATEGORY_LIST, TOGGLE_ANIME_API_ERROR} from "../../__helper/constants";

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
}
export const toggleAnimeApiError = (state) => {
  return {
    type: TOGGLE_ANIME_API_ERROR,
    payload: state
  }
}