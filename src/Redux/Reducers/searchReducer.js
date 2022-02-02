/*This actions is for the Search.js*/
import produce from "immer"
import {SEARCH_LOADER} from "../../__helper/constants"

const initialState = {
    loading: true
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_LOADER:
        return produce(state, (draftState) => {
          draftState.loading = action.payload;
        });
      default:
        return state;
    }
}