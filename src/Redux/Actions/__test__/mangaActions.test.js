import { selectedDropdown, selectedList } from "../mangaActions";
import {
  MANGA_SELECTED_CATEGORY,
  SELECTED_CATEGORY_LIST_MANGA,
} from "../../../__helper/constants";

import { createAction } from "@reduxjs/toolkit";

describe("testing mangaActions actions - seeing if call to action works", () => {
    it("test if selectedDropdown action is called in mangaActions.js", () => {
        const data = {selectedChoice: "manga"}
        const expectedAction = {
          type: MANGA_SELECTED_CATEGORY,
          payload: {selectedChoice: "manga"},
        };
        expect(selectedDropdown(data)).toEqual(expectedAction);
    });
    it("test if selectedDropdown action is called in mangaActions.js with createAction", () =>{
        const actionCreator = createAction(MANGA_SELECTED_CATEGORY);
        expect(actionCreator({ selectedChoice: "manga" })).toEqual({
          type: MANGA_SELECTED_CATEGORY,
          payload: { selectedChoice: "manga" },
        });
    });
    it("test if selectedList action is called in mangaActions.js", () => {
        expect(selectedList({ mangaList: [], loading: false })).toEqual({
          type: SELECTED_CATEGORY_LIST_MANGA,
          payload: { mangaList: [], loading: false },
        });
    });
    it("test if selectedList action is called in mangaActions.js", () => {
        const actionCreator = createAction(SELECTED_CATEGORY_LIST_MANGA);
        expect(actionCreator({ mangaList: [], loading: false })).toEqual({
          type: SELECTED_CATEGORY_LIST_MANGA,
          payload: { mangaList: [], loading: false },
        });
    });
});