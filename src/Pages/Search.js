import React from "react";

import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import SearchBar from "../Components/SearchBar";
import SearchContent from "../Components/SearchContent"

const Search = () => {

  return (
    <div>
      <Navbar />

      <SearchBar />
      <SearchContent />
      <ScrollToTop />
    </div>
  );
};

export default Search;
