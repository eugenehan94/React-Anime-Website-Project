import { combineReducers } from "redux";

import { fetchReducer } from "./fetchDataReducer";
import { animeReducer } from "./animeReducer";
import { mangaReducer } from "./mangaReducer";
const reducers = combineReducers({
  fetchReducer,
  animeReducer,
  mangaReducer,
});

export default reducers;
