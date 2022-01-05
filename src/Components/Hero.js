import React from "react";
import { Box} from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHeroInfo } from "../Redux/Actions/fetchData";
import demonSlayerHeroImage from "../Images/demonSlayerHeroImage.jpg";
import axios from "axios";
const Hero = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { loading } = data.fetchReducer;
  // const { heroInfo } = data.fetchReducer;

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
        style={{ width: "100%", height: "35rem"}}
      />
    </Box>
  );
};

export default Hero;
