import { combineReducers } from "redux";

import { fetchDataReducer } from "./fetchDataReducer";
import { animeReducer } from "./animeReducer";
import { mangaReducer } from "./mangaReducer";
import { searchReducer } from "./searchReducer";
import { mobileNavbarReducer } from "./mobileNavbarReducer";
import { randomReducer } from "./randomReducer";
const reducers = combineReducers({
  fetchDataReducer,
  animeReducer,
  mangaReducer,
  searchReducer,
  mobileNavbarReducer,
  randomReducer
});

export default reducers;
