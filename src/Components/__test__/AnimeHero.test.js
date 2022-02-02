import React from "react"
import { render, screen } from "./test-utils";
import AnimeHero from "../AnimeHero"

it("test if image is present and must have a specific src and alt", () => {
    render (<AnimeHero/>)
    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", "demonSlayerHeroImage.jpg");
    expect(image).toHaveAttribute("alt", "demon slayer poster");
})