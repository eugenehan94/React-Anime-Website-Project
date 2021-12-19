import produce from "immer";

const initialState = {
  heroInfo: null,
  loading: true,
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HERO":
      return produce(state, (draftState) => {
        draftState.heroInfo = action.payload;
        draftState.loading = false;
      });

    default:
      return state;
  }
};
