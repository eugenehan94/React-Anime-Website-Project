export const fetchHeroInfo = (hero) => {
  return {
    type: "FETCH_HERO",
    payload: hero,
  };
};
