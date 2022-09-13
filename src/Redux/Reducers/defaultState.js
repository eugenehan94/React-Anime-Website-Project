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
  // for mobileNavbarReducer.js
  mobileNavbarState: false,
  // for searchReducer.js
  searchComponentIsLoading: true,
  searchedData: [],
  searchPending: false,
  searchErrorMessage: ""
};