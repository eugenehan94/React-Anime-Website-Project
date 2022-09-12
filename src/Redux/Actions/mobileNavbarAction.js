import { SET_MOBILE_NAVBAR_STATE } from "../../__helper/constants";

export const setMobileNavbarState = (input) => {
    return {
        type: SET_MOBILE_NAVBAR_STATE,
        payload: input
    }
}