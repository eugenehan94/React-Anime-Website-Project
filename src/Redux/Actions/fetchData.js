export const fetchHero = (hero) => {
  return {
    type: "FETCH_HERO",
    payload: hero,
  };
};
