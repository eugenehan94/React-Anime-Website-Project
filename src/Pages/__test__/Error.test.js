import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "../Error";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);
  return render(ui, { wrapper: BrowserRouter });
};

it("test that the 404 text is present", () => {
    renderWithRouter(<Error/>)
    expect(screen.getByText(/404/i)).toBeInTheDocument();
})
it("text that 'Sorry your page was not found' is present", () => {
    renderWithRouter(<Error/>)
    expect(screen.getByText(/Sorry your page was not found/i)).toBeInTheDocument();
});
it("test if the image for 404 is present", () => {
    renderWithRouter(<Error/>)
    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "animeCryingImage.png"
    );
    expect(screen.getByRole("img")).toHaveAttribute(
      "alt",
      "Anime Character Crying"
    );
})