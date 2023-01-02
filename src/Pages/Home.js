import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import AnimeHero from "../Components/AnimeHero";
import AnimeDropdownBox from "../Components/AnimeDropdownBox";
import AnimeContent from "../Components/AnimeContent";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";

import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state);
  const { animeIsLoading } = data.animeReducer;

  return (
    <div>
      <Navbar />
      <AnimeHero />
      <Box
        sx={{
          paddingLeft: { xs: "1rem", sm: "4rem" },
          paddingRight: { xs: "1rem", sm: "4rem" },
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <AnimeDropdownBox />
        <AnimeContent />
      </Box>
      {animeIsLoading ? <></> : <Footer />}
      <ScrollToTop />
    </div>
  );
};

export default Home;
