// Initial states for all reducers

export const defaultState = {
  // for animeReducer.js
  animeSelectedCategory: "airing",
  animeList: null,
  animeIsLoading: true,
  // for fetchDataReducer
  loading: true,
  queryResults: [],
  typeSelection: "anime",
  // for mangaReducer.js
  mangaSelectedCategory: "manga",
  mangaList: null,
  mangaIsLoading: true,
  // for searchReducer.js
  searchIsLoading: true,
  searchedData: [],
  searchPending: false,
};
