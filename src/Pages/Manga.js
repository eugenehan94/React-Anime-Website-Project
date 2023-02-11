import React from "react";
import Navbar from "../components/header/Navbar";
import MangaHero from "../components/manga/MangaHero";
import PagesPadding from "../components/_shared/PagesPadding";
import MangaDropdownBox from "../components/manga/MangaDropdownBox";
import MangaContent from "../components/manga/MangaContent";
import ScrollToTop from "../components/_shared/ScrollToTop";
import Footer from "../components/footer/Footer";
const Manga = () => {
  return (
    <div>
      <Navbar />
      <MangaHero />
      <PagesPadding>
        <MangaDropdownBox />
        <MangaContent />
      </PagesPadding>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Manga;
