import { fetchDataReducer } from "../fetchDataReducer";
import {
  searchQuery,
  queryResultsUpdate,
  queryTypeSelection,
} from "../../Actions/fetchData";

it("return initial state of fetchDataReducer", () => {
  expect(fetchDataReducer(undefined, {})).toEqual({
    loading: true,
    query: "Naruto",
    queryResults: [],
    typeSelection: "anime",
  });
});

it("should handle a search query added to query field", () => {
  const previousState = {
    loading: true,
    query: "Naruto",
    queryResults: [],
    typeSelection: "anime",
  };
  expect(fetchDataReducer(previousState, searchQuery("Berserk"))).toEqual({
    loading: true,
    query: "Berserk",
    queryResults: [],
    typeSelection: "anime",
  });
});
it("should handle an update to the query search", () => {
  const previousState = {
    loading: true,
    query: "Naruto",
    queryResults: [],
    typeSelection: "anime",
  };
  expect(fetchDataReducer(previousState, queryResultsUpdate([{ id: 1 }]))).toEqual({
    loading: true,
    query: "Naruto",
    queryResults: [{ id: 1 }],
    typeSelection: "anime",
  });  
});

it("should handle the query type selection ", () => {
    const previousState = {
      loading: true,
      query: "Naruto",
      queryResults: [],
      typeSelection: "anime",
    };
    expect(fetchDataReducer(previousState, queryTypeSelection("manga"))).toEqual({
      loading: true,
      query: "Naruto",
      queryResults: [],
      typeSelection: "manga",
    });
})