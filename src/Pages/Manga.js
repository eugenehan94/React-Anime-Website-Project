import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import MangaHero from "../Components/MangaHero";
import MangaDropdownBox from "../Components/MangaDropdownBox";
import MangaContent from "../Components/MangaContent";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer";
const Manga = () => {
  return (
    <div>
      <Navbar />
      <MangaHero />
      <Box
        sx={{
          paddingLeft: { xs: "1rem", sm: "4rem" },
          paddingRight: { xs: "1rem", sm: "4rem" },
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <MangaDropdownBox />
        <MangaContent />
      </Box>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Manga;
