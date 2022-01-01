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

export const updateQuery = (inputs) => {
  
}