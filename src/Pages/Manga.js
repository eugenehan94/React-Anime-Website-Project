import React from "react";

import Navbar from "../Components/Navbar";
import MangaHero from "../Components/MangaHero";
import MangaDropdownBox from "../Components/MangaDropdownBox"
import MangaContent from "../Components/MangaContent"
import ScrollToTop from "../Components/ScrollToTop"
import Footer from "../Components/Footer"
const Manga = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <MangaHero />
      <MangaDropdownBox/>
      <MangaContent/>
      <Footer/>
    </div>
  );
};

export default Manga;
