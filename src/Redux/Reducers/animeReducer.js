import produce from "immer";
import {
  SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST,
} from "../../__helper/constants";
const initialState = {
  selectedChoice: "airing",
  animeList: null,
  loading: true,
};

export const animeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_CATEGORY:
      return produce(state, (draftState) => {
        draftState.selectedChoice = action.payload;
      });
    case SELECTED_CATEGORY_LIST:
      return produce(state, (draftState) => {
        draftState.animeList = action.payload;
        draftState.loading = false;
      });
    default:
      return state;
  }
};
