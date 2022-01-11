import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import {createStore} from "redux";
import { Provider } from "react-redux";
import reducer from "../../Redux/Reducers/animeReducer"
function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
  };
}

test("Footer text present", () => {
  renderWithRedux(<Footer />);
  const text = screen.getByRole("text");
  expect(text).toBeInTheDocument;
});
