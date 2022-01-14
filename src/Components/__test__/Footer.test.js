import React from "react";
import { render, screen } from "./test-utils";
import Footer from "../Footer";

test("Footer text present", () => {
  render(<Footer />);
  screen.debug();
  // const text = screen.getByRole("heading", { name: /hello world/i });
  // expect(text).toBeInTheDocument;
});
