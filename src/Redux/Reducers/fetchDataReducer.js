import produce from "immer";
import {
  SEARCH_QUERY,
  QUERY_RESULTS_UPDATE,
  QUERY_TYPE_SELECTION,
} from "../../__helper/constants";

const initialState = {
  heroInfo: null,
  loading: true,
  query: "Naruto",
  queryResults: [],
  typeSelection: "anime",
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
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
