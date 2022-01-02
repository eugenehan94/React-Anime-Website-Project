import produce from "immer";

const initialState = {
  heroInfo: null,
  loading: true,
  query: "Naruto",
  queryResults: [],
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HERO":
      return produce(state, (draftState) => {
        draftState.heroInfo = action.payload;
        draftState.loading = false;
      });
    case "SEARCH_QUERY":
      return produce(state, (draftState) => {
        draftState.query = action.payload;
      });
    case "QUERY_RESULTS_UPDATE":
      return produce(state, (draftState) => {
        draftState.queryResults = action.payload;
      });
    default:
      return state;
  }
};
