import React from "react";
import Navbar from "../components/header/Navbar";
import AnimeHero from "../components/home/AnimeHero";
import PagesPadding from "../components/_shared/PagesPadding";
import AnimeDropdownBox from "../components/home/AnimeDropdownBox";
import AnimeContent from "../components/home/AnimeContent";
import ScrollToTop from "../components/_shared/ScrollToTop";
import Footer from "../components/footer/Footer";

const Home = () => {

  return (
    <div>
      <Navbar />
      <AnimeHero />
      <PagesPadding>
        <AnimeDropdownBox />
        <AnimeContent />
      </PagesPadding>
      <Footer/>
      <ScrollToTop />
    </div>
  );
};

export default Home;
