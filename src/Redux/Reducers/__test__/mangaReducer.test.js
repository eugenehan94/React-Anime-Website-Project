import {mangaReducer} from "../mangaReducer"

import {selectedDropdown} from "../../Actions/mangaActions"

it("return initial states of mangaReducer", () => {
    expect(mangaReducer(undefined, {})).toEqual({
      selectedChoice: "manga",
      mangaList: null,
      loading: true,
    });
})