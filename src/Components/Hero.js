import React from "react";
import { useEffect } from "react";
import axios from "axios";
const Hero = () => {
  const fetchHero = async () => {
    const response = await axios.get(
      "https://api.jikan.moe/v3/search/anime?q=demon%20slayer&limit=1"
    );

    console.log("Stuff: ", response.data);
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return <div></div>;
};

export default Hero;
