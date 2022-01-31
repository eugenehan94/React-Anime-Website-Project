import React from "react";
import { render, screen } from "./test-utils";
import Footer from "../Footer";
import { store } from "../../Redux/store";
import { SELECTED_CATEGORY_LIST } from "../../__helper/constants";
import * as reactRedux from "react-redux";
// https://medium.com/@szpytfire/react-redux-testing-mocking-useselector-and-usedispatch-e004c3f2b2e0
// https://schneide.blog/2021/05/20/flexible-react-redux-hook-mocks-in-jest-react-testing-library/
// https://www.albertgao.xyz/2019/11/05/how-to-test-react-redux-hooks-via-jest/
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
beforeEach(() => {
  useSelectorMock.mockClear();
  useDispatchMock.mockClear();
});
// We have to find a way to change our loading state to false in Footer.js
// for now if we comment out the if statement in Footer.js - this test will pass
it("Footer text present", () => {
  useSelectorMock.mockReturnValue({ loading: true });
  render(<Footer />);
  expect(screen.getByText(/developed by/i)).toBeInTheDocument;
});
