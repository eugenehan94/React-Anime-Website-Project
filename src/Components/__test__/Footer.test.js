import { render, screen } from "@testing-library/react";
import Footer from "../Footer"

test("Footer text present", () => {
    render(<Footer/>)
    const text = screen.getByRole("text")
    expect(text).toBeInTheDocument;
})