import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";

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
    </div>
  );
};

export default Random;
