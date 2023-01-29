// Initial states for all reducers

export const defaultState = {
  // for animeReducer.js
  animeSelectedCategory: "airing",
  animeList: null,
  animeIsLoading: true,
  animeApiError: false,
  // for fetchDataReducer
  loading: true,
  queryResults: [],
  typeSelection: "anime",
  // for mangaReducer.js
  mangaSelectedCategory: "manga",
  mangaList: null,
  mangaIsLoading: true,
  mangaApiError: false,
  // for mobileNavbarReducer.js
  mobileNavbarState: false,
  // for searchReducer.js
  searchComponentIsLoading: true,
  searchedData: [],
  searchPending: false,
  searchErrorMessage: "",
  // for randomReducer.js
  randomAnimeIsLoading: true,
  randomAnimeData: undefined,
  randomMangaData: undefined,
  randomMangaIsLoading: true,
};
