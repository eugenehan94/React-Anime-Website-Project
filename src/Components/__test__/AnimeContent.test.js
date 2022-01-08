import {render, screen} from "@testing-library/react";
import AnimeContent from "../AnimeContent"

test("Title is present", () => {
    render(<AnimeContent/>)
    const header = screen.getByRole("heading");
    expect(header).toBeInTheDocument
})