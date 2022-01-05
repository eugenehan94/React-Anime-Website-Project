import React from "react";

import Navbar from "../Components/Navbar";
import MangaHero from "../Components/MangaHero";
import MangaDropdownBox from "../Components/MangaDropdownBox"


const Manga = () => {
  return (
    <div>
      <Navbar />
      <MangaHero />
      <MangaDropdownBox/>


    </div>
  );
};

export default Manga;
