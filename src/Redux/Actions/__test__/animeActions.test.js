import { selectedDropdown, selectedList } from "../animeActions";
import {
  SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST,
} from "../../../__helper/constants";

import {createAction} from "@reduxjs/toolkit"

// Synchronous action creator test
describe ("Synchronous test for action creator", () => {
    it("testing if selectedDropdown action is called", () => {
        const data = { selectedChoice: "Manga"};
        const expectedAction = { type: SELECTED_CATEGORY, payload: {selectedChoice: "Manga"} };
        expect(selectedDropdown(data)).toEqual(expectedAction)
    })
    it("testing if selectedDropdown action is called - using creatAction", () => {
      const actionCreator = createAction(SELECTED_CATEGORY);
      expect(actionCreator({ selectedChoice: "Manga" })).toEqual({
        type: SELECTED_CATEGORY,
        payload: { selectedChoice: "Manga" },
      });
    });  
    it ("testing if selectedList action is called", () => {
        const data = {animeList: [], loading: false}
        const expectedAction = { type: SELECTED_CATEGORY_LIST, payload: {animeList:[], loading: false}};
        expect(selectedList(data)).toEqual(expectedAction);
    });
    it("testing if selectedList action is called - using createAction", () => {
        const actionCreator = createAction(SELECTED_CATEGORY_LIST);
        expect(actionCreator({ animeList: [], loading: false })).toEqual({
          type: SELECTED_CATEGORY_LIST,
          payload: { animeList: [], loading: false },
        });
    } );
})