import {
  searchQuery,
  queryResultsUpdate,
  queryTypeSelection,
} from "../fetchData";

import {
  SEARCH_QUERY,
  QUERY_RESULTS_UPDATE,
  QUERY_TYPE_SELECTION,
} from "../../../__helper/constants";

import { createAction } from "@reduxjs/toolkit";

describe ("testing fetchData actions - seeing if call to action works", () => {
    it ("test if searchQuery action is called in fetchData.js", () => {
        const data = {query: "Naruto"}
        const expectedAction = { type: SEARCH_QUERY, payload: {query: "Naruto"}};
        expect(searchQuery(data)).toEqual(expectedAction)
    });
    it("test if searchQuery action is called in fetchData.js with createAction", () => {
        const actionCreator = createAction(SEARCH_QUERY);
        const expectedAction = {
          type: SEARCH_QUERY,
          payload: { query: "Naruto" },
        };
        expect(actionCreator({ query: "Naruto" })).toEqual(expectedAction);
    });
    it("test if queryResultsUpdate action is called in fetchData.js", () => {
        const data = { queryResults: [] };
        const expectedAction = {
          type: QUERY_RESULTS_UPDATE,
          payload: { queryResults: [] },
        };
        expect(queryResultsUpdate(data)).toEqual(expectedAction);
    });
    it("test if queryResultsUpdate action is called in fetchData.js with createAction", () => {
        const actionCreator = createAction(QUERY_RESULTS_UPDATE);
        expect(queryResultsUpdate({ queryResults: [] })).toEqual({
          type: QUERY_RESULTS_UPDATE,
          payload: { queryResults: [] },
        });
    });
    it("test if queryTypeSelection action is called in fetchData.js", () => {
        const data = { typeSelection: "anime" };
        expect(queryTypeSelection(data)).toEqual({
          type: QUERY_TYPE_SELECTION,
          payload: { typeSelection: "anime" },
        });
    });
    it("test if queryTypeSelection action is called in fetchData.js with createAction", () => {
        const actionCreator = createAction(QUERY_TYPE_SELECTION);
        expect(queryTypeSelection({ typeSelection: "anime" })).toEqual({
          type: QUERY_TYPE_SELECTION,
          payload: {typeSelection: "anime"}
        });
    });
})