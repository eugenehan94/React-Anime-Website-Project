import {mangaReducer} from "../mangaReducer"

import { selectedDropdown, selectedList } from "../../Actions/mangaActions";

it("return initial states of mangaReducer", () => {
    expect(mangaReducer(undefined, {})).toEqual({
      selectedChoice: "manga",
      mangaList: null,
      loading: true,
    });
})

it("it should handle the selected dropdown option", () => {
  const previousState = {
    selectedChoice: "manga",
    mangaList: null,
    loading: true,
  };
  expect(mangaReducer(previousState, selectedDropdown("anime"))).toEqual({
    selectedChoice: "anime",
    mangaList: null,
    loading: true,
  });
})

it("it should handle the list of manga", () => {
  const previousState = {
    selectedChoice: "manga",
    mangaList: null,
    loading: true,
  };
  expect(mangaReducer(previousState, selectedList("listOfAnime"))).toEqual({
    selectedChoice: "manga",
    mangaList: "listOfAnime",
    loading: false,
  });
})