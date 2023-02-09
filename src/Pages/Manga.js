import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/header/Navbar";
import MangaHero from "../components/manga/MangaHero";
import MangaDropdownBox from "../components/manga/MangaDropdownBox";
import MangaContent from "../components/manga/MangaContent";
import ScrollToTop from "../components/_shared/ScrollToTop";
import Footer from "../components/footer/Footer";
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
