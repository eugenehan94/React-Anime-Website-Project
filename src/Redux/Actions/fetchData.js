export const fetchHeroInfo = (hero) => {
  return {
    type: "FETCH_HERO",
    payload: hero,
  };
};

export const searchQuery = (inputs) => {
  return {
    type: "SEARCH_QUERY",
    payload: inputs
  }
}

export const queryResultsUpdate = (inputs) => {
  return {
    type: "QUERY_RESULTS_UPDATE",
    payload: inputs
  }
}

export const queryTypeSelection = (selection) => {
  return {
    type: "QUERY_TYPE_SELECTION",
    payload: selection
  }
}