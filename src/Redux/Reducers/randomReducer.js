import produce from "immer";
import {
  TOGGLE_RANDOM_ANIME_IS_LOADING,
  STORE_RANDOM_ANIME,
  STORE_RANDOM_MANGA,
  TOGGLE_RANDOM_MANGA_IS_LOADING,
} from "../../__helper/constants";
import { defaultState } from "./defaultState";

export const randomReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_RANDOM_ANIME_IS_LOADING:
      return produce(state, (draftState) => {
        draftState.randomAnimeIsLoading = action.payload;
      });
    case STORE_RANDOM_ANIME:
      return produce(state, (draftState) => {
        draftState.randomAnimeData = action.payload;
      });
    case STORE_RANDOM_MANGA:
      return produce(state, (draftState) => {
        draftState.randomMangaData = action.payload;
      });
    case TOGGLE_RANDOM_MANGA_IS_LOADING:
      return produce(state, (draftState) => {
        draftState.randomMangaIsLoading = action.payload;
      });
    default:
      return state;
  }
};
