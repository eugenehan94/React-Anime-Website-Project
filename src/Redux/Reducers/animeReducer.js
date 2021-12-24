import produce from "immer";

const initialState = {
    selectedChoice: "airing",
};

export const animeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SELECTED_CATEGORY": 
             return produce(state, (draftState) => {
                    draftState.selectedChoice = action.payload
                });
        default: return state
    }
};