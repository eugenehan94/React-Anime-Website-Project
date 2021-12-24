import { combineReducers } from "redux";

import { fetchReducer } from "./fetchDataReducer";
import { animeReducer } from "./animeReducer";
const reducers = combineReducers({
  fetchReducer,
  animeReducer
});

export default reducers;
