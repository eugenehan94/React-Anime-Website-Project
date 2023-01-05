import produce from "immer";
import {
  MANGA_SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST_MANGA,
  TOGGLE_MANGA_IS_LOADING
} from "../../__helper/constants";
import { defaultState } from "./defaultState";

export const mangaReducer = (state = defaultState, action) => {
  switch (action.type) {
    case MANGA_SELECTED_CATEGORY:
      return produce(state, (draftState) => {
        draftState.mangaSelectedCategory = action.payload;
      });
    case SELECTED_CATEGORY_LIST_MANGA:
      return produce(state, (draftState) => {
        draftState.mangaList = action.payload;
        draftState.mangaIsLoading = false;
      });
    case TOGGLE_MANGA_IS_LOADING:
      return produce(state, (draftState) => {
        draftState.mangaIsLoading = action.payload;
      })
    default:
      return state;
  }
};
