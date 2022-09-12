import produce from "immer";
import { SET_MOBILE_NAVBAR_STATE } from "../../__helper/constants";
import { defaultState } from "./defaultState";

export const mobileNavbarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_MOBILE_NAVBAR_STATE:
      return produce(state, (draftState) => {
        draftState.mobileNavbarState = action.payload;
      });
    default:
      return state;
  }
};
