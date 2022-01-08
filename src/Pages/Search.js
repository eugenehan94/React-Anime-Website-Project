import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import SearchBar from "../Components/SearchBar";
import SearchContent from "../Components/SearchContent"

const Search = () => {

  return (
    <div>
      <Navbar />
      <SearchBar />
      <Box
        sx={{
          paddingLeft: { xs: "1rem", sm: "4rem" },
          paddingRight: { xs: "1rem", sm: "4rem" },
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <SearchContent />
      </Box>
      <ScrollToTop />
    </div>
  );
};

export default Search;
