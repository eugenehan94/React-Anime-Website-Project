import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import DropdownBox from "../Components/DropdownBox";
import Content from "../Components/Content"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <DropdownBox />
      <Content/>
    </div>
  );
};

export default Home;
