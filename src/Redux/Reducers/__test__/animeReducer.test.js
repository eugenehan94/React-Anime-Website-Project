import {animeReducer} from "../animeReducer"
import { selectedDropdown, selectedList } from "../../Actions/animeActions";

it("should return the initial state for animeReducer", () => {
    expect(animeReducer(undefined, {})).toEqual({
      selectedChoice: "airing",
      animeList: null,
      loading: true,
    });
})

it("should handle a selected category added - movie", () => {
    const previousState = {
      selectedChoice: "airing",
      animeList: null,
      loading: true,
    };
    expect(animeReducer(previousState, selectedDropdown("movie"))).toEqual({
      selectedChoice: "movie",
      animeList: null,
      loading: true,
    });
})

it("should change state with action - selectedList", () => {
    expect(animeReducer(undefined, selectedList("list"))).toEqual({
      selectedChoice: "airing",
      animeList: "list",
      loading: false,
    });
});