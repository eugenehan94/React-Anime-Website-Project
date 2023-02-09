import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/header/Navbar";
import AnimeHero from "../components/home/AnimeHero";
import AnimeDropdownBox from "../components/home/AnimeDropdownBox";
import AnimeContent from "../components/home/AnimeContent";
import ScrollToTop from "../components/_shared/ScrollToTop";
import Footer from "../components/footer/Footer";

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
