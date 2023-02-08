import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import AnimeHero from "../components/AnimeHero";
import AnimeDropdownBox from "../components/AnimeDropdownBox";
import AnimeContent from "../components/AnimeContent";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";

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
