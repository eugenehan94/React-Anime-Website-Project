import { combineReducers } from "redux";

import { fetchReducer } from "./fetchDataReducer";
import { animeReducer } from "./animeReducer";
import { mangaReducer } from "./mangaReducer";
import { searchReducer } from "./searchReducer";
const reducers = combineReducers({
  fetchReducer,
  animeReducer,
  mangaReducer,
  searchReducer
});

export default reducers;
