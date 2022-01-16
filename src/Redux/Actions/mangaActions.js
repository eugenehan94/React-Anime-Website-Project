import { MANGA_SELECTED_CATEGORY, SELECTED_CATEGORY_LIST_MANGA } from "../../__helper/constants";

export const selectedDropdown = (selected) => {
    return {
        type: MANGA_SELECTED_CATEGORY,
        payload: selected
    }
}

export const selectedList = (list) => {
  return {
    type: SELECTED_CATEGORY_LIST_MANGA,
    payload: list,
  };
};