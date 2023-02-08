import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import MangaHero from "../components/MangaHero";
import MangaDropdownBox from "../components/MangaDropdownBox";
import MangaContent from "../components/MangaContent";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
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
