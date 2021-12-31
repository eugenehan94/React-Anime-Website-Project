export const fetchHeroInfo = (hero) => {
  return {
    type: "FETCH_HERO",
    payload: hero,
  };
};

export const searchQuery = (input) => {
  return {
    type: "SEARCH_QUERY",
    payload: input
  }
}