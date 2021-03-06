import React from "react";
import { render, screen } from "./test-utils";
import Navbar from "../Navbar";
import { MemoryRouter } from "react-router-dom";

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

