import produce from "immer";
import {
  MANGA_SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST_MANGA,
} from "../../__helper/constants";
const initialState = {
  selectedChoice: "manga",
  mangaList: null,
  loading: true,
};

export const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case MANGA_SELECTED_CATEGORY:
      return produce(state, (draftState) => {
        draftState.selectedChoice = action.payload;
      });
    case SELECTED_CATEGORY_LIST_MANGA:
      return produce(state, (draftState) => {
        draftState.mangaList = action.payload;
        draftState.loading = false;
      });
    default:
      return state;
  }
};
