import {
  SEARCH_QUERY,
  QUERY_RESULTS_UPDATE,
  QUERY_TYPE_SELECTION,
} from "../../__helper/constants";

export const searchQuery = (inputs) => {
  return {
    type: SEARCH_QUERY,
    payload: inputs
  }
}

export const queryResultsUpdate = (inputs) => {
  return {
    type: QUERY_RESULTS_UPDATE,
    payload: inputs
  }
}

export const queryTypeSelection = (selection) => {
  return {
    type: QUERY_TYPE_SELECTION,
    payload: selection
  }
}