import produce from "immer";
import {
  SEARCH_QUERY,
  QUERY_RESULTS_UPDATE,
  QUERY_TYPE_SELECTION,
} from "../../__helper/constants";
import { defaultState } from "./defaultState";

export const fetchDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    // TODO: See whether we can remove this case
    case SEARCH_QUERY:
      return produce(state, (draftState) => {
        draftState.query = action.payload;
      });
    case QUERY_RESULTS_UPDATE:
      return produce(state, (draftState) => {
        draftState.queryResults = action.payload;
      });
    case QUERY_TYPE_SELECTION:
      return produce(state, (draftState) => {
        draftState.typeSelection = action.payload;
      });
    default:
      return state;
  }
};
