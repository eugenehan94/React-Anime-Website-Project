import React from "react";
import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Navbar from "../Navbar";
import AnimeContent from "../AnimeContent";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { getByTestId } from "@testing-library/react";


const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

describe("Navbar links present", () => {
  it("Home button AniMan is present", () => {
    render(<Navbar />, { wrapper: MemoryRouter });
    expect(screen.getByText(/Animan/i)).toBeInTheDocument();
  });
  it("Manga button is present", () => {
      render(<Navbar/>, {wrapper: MemoryRouter});
      expect(screen.getByText(/manga/i)).toBeInTheDocument();
  })
  it("Search button is present", () => {
      render(<Navbar/>, {wrapper: MemoryRouter});
      expect(screen.getByText(/search/i)).toBeInTheDocument();
  })
});

test("full app rendering/navigating", () => {
  // renderWithRouter(<Navbar />);
  render(<AnimeContent />);
  // expect(screen.getByText(/animan/i)).toBeInTheDocument();
  // expect(screen.getByTestId(/animeContentHeading/i));
  const test = screen.getByTestId("animeContentHeading");
  console.log(test)


});