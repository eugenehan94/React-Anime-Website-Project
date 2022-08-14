/*This actions is for the Search.js*/
import produce from "immer";
import { SEARCH_LOADER, SEARCH_PENDING } from "../../__helper/constants";
import { defaultState } from "./defaultState";

export const searchReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SEARCH_LOADER:
      return produce(state, (draftState) => {
        draftState.searchIsLoading = action.payload;
        draftState.searchPending = false;
      });
    case SEARCH_PENDING:
      return produce(state, (draftState) => {
        draftState.searchPending = action.payload;
      });
    default:
      return state;
  }
};
