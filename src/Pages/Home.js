import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import Hero from "../Components/AnimeHero";
import DropdownBox from "../Components/AnimeDropdownBox";
import Content from "../Components/AnimeContent";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";

import { useSelector } from "react-redux";

const Home = () => {
  const data = useSelector((state) => state);
  const { loading } = data.animeReducer;

  return (
    <div>
      <Navbar />
      <Hero />
      <Box
        sx={{
          paddingLeft: { xs: "1rem", sm: "4rem" },
          paddingRight: { xs: "1rem", sm: "4rem" },
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <DropdownBox />
        <Content />
      </Box>
      {loading ? <></> : <Footer />}
      <ScrollToTop />
    </div>
  );
};

export default Home;
