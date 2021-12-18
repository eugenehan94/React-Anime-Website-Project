const initialState = {
  heroInfo: null,
  loading: true,
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_HERO":
      return {
        heroInfo: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
