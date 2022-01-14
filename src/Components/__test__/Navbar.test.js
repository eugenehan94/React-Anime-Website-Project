import React from "react";
import {render, screen} from "./test-utils";
import Navbar from "../Navbar"

test("Navbar", () => {
    render(<Navbar/>) 
    screen.debug();
})