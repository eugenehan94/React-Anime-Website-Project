import React from "react";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroInfo } from "../Redux/Actions/fetchData";
import demonSlayerHeroImage from "../Images/demonSlayerHeroImage.jpg";
import axios from "axios";
const Hero = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data.fetchReducer);
  const { loading } = data.fetchReducer;
  const { heroInfo } = data.fetchReducer;

  useEffect(() => {
    const fetchHero = async () => {
      const response = await axios.get(
        "https://api.jikan.moe/v3/search/anime?q=demon%20slayer&limit=1"
      );
      dispatch(fetchHeroInfo(response.data.results[0]));
    };
    fetchHero();
  }, [dispatch]);

  if (loading) {
    return <div></div>;
  }
  return (
    <Box>
      <img
        src={demonSlayerHeroImage}
        alt="demon slayer poster"
        style={{ width: "100%", position: "relative" }}
      />

      <Box sx={{ position: "absolute", top: "10rem", left: "2rem" }}>
        <Typography>{heroInfo.title}</Typography>
        <Typography>{heroInfo.synopsis}</Typography>
      </Box>
    </Box>
  );
};

export default Hero;
