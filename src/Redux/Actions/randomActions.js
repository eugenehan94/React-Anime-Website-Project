import {
  STORE_RANDOM_ANIME,
  TOGGLE_RANDOM_ANIME_IS_LOADING,
} from "../../__helper/constants";

export const toggleRandomAnimeIsLoading = (isLoading) => {
  return {
    type: TOGGLE_RANDOM_ANIME_IS_LOADING,
    payload: isLoading,
  };
};

export const storeRandomAnime = (data) => {
  return {
    type: STORE_RANDOM_ANIME,
    payload: data,
  };
};
