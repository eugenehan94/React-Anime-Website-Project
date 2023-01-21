import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import demonSlayerHeroImage from "../Images/demonSlayerHeroImage.jpg";

import axios from "axios";
const Random = () => {
  useEffect(() => {
    const fetchRandomAnime = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/random/anime`
        );
        console.log("response: ", response);
      } catch (errors) {
        console.log("fetchRandomAnime error: ", errors);
      }
    };
    const fetchRandomManga = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/random/manga`
        );
        console.log("manga response: ", response);
      } catch (errors) {
        console.log("fetchRandomManga error: ", errors);
      }
    };
    fetchRandomAnime();
    fetchRandomManga();
  }, []);

  return (
    <div>
      <Navbar />
      <ImageList sx={{ width: "100%", height: "100%" }} cols={1}>
        <ImageListItem>
          <img
            src={demonSlayerHeroImage}
            // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            // alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title="Title"
            subtitle="Subtitle"
          />
        </ImageListItem>
      </ImageList>
    </div>
  );
};

export default Random;
