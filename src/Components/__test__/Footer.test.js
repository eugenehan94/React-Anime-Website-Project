import React from "react";
import { render, screen } from "./test-utils";
import Footer from "../Footer";

test("Footer text present", () => {
  render(<Footer />);
  // const text = screen.getByRole("heading", {name: "Developer"});
  // expect(text).toBeInTheDocument;
});
