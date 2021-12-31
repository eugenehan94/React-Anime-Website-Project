import produce from "immer";

const initialState = {
  heroInfo: null,
  loading: true,
  query: ""
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
          draftState.query = action.input
        })
    default:
      return state;
  }
};
