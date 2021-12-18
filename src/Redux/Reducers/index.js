import { combineReducers } from "redux";

import { fetchReducer } from "./fetchDataReducer";

const reducers = combineReducers({
  fetchReducer,
});

export default reducers;
