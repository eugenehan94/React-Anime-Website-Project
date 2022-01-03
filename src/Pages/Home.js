import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import DropdownBox from "../Components/DropdownBox";
import Content from "../Components/Content";
import ScrollToTop from "../Components/ScrollToTop";
import Footer from "../Components/Footer"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DropdownBox />
      <Content />
      <Footer/>
      <ScrollToTop />
    </div>
  );
};

export default Home;
