import produce from "immer";

const initialState = {
  selectedChoice: "manga",
};

export const mangaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MANGA_SELECTED_CATEGORY":
      return produce(state, (draftState) => {
        draftState.selectedChoice = action.payload;
      });
    default:
      return state;
  }
};
