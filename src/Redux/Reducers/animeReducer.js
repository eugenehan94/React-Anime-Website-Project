import produce from "immer";
import {
  SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST,
} from "../../__helper/constants";
import { defaultState } from "./defaultState";

export const animeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return produce(state, (draftState) => {
        draftState.animeSelectedCategory = action.payload;
      });
    case SELECTED_CATEGORY_LIST:
      return produce(state, (draftState) => {
        draftState.animeList = action.payload;
        draftState.animeIsLoading = false;
      });
    default:
      return state;
  }
};
