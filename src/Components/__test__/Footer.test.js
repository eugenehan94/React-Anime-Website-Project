import React from "react"
import { render, screen } from "./test-utils";
import Footer from "../Footer";

it("Footer text present", () => {
    render(<Footer/>)
    expect(screen.getByText(/Developed by/i)).toBeInTheDocument();
})