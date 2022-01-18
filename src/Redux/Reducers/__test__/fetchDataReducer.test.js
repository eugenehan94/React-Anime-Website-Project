import { fetchReducer } from "../fetchDataReducer";
import {
  searchQuery,
  queryResultsUpdate,
  queryTypeSelection,
} from "../../Actions/fetchData";

it("return initial state of fetchDataReducer", () => {
  expect(fetchReducer(undefined, {})).toEqual({
    heroInfo: null,
    loading: true,
    query: "Naruto",
    queryResults: [],
    typeSelection: "anime",
  });
});

it("should handle a search query added to query field", () => {
  const previousState = {
    heroInfo: null,
    loading: true,
    query: "Naruto",
    queryResults: [],
    typeSelection: "anime",
  };
  expect(fetchReducer(previousState, searchQuery("Berserk"))).toEqual({
    heroInfo: null,
    loading: true,
    query: "Berserk",
    queryResults: [],
    typeSelection: "anime",
  });
});
it("should handle an update to the query search", () => {
  const previousState = {
    heroInfo: null,
    loading: true,
    query: "Naruto",
    queryResults: [],
    typeSelection: "anime",
  };
  expect(fetchReducer(previousState, queryResultsUpdate([{ id: 1 }]))).toEqual({
    heroInfo: null,
    loading: true,
    query: "Naruto",
    queryResults: [{ id: 1 }],
    typeSelection: "anime",
  });  
});

it("should handle the query type selection ", () => {
    const previousState = {
      heroInfo: null,
      loading: true,
      query: "Naruto",
      queryResults: [],
      typeSelection: "anime",
    };
    expect(fetchReducer(previousState, queryTypeSelection("manga"))).toEqual({
      heroInfo: null,
      loading: true,
      query: "Naruto",
      queryResults: [],
      typeSelection: "manga",
    });
})