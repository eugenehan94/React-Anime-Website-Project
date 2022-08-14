import { combineReducers } from "redux";

import { fetchDataReducer } from "./fetchDataReducer";
import { animeReducer } from "./animeReducer";
import { mangaReducer } from "./mangaReducer";
import { searchReducer } from "./searchReducer";
const reducers = combineReducers({
  fetchDataReducer,
  animeReducer,
  mangaReducer,
  searchReducer
});

export default reducers;
