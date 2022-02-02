import React from "react";
import { Box } from "@mui/material";
import Navbar from "../Components/Navbar";
import ScrollToTop from "../Components/ScrollToTop";
import SearchBar from "../Components/SearchBar";
import SearchContent from "../Components/SearchContent"
import Footer from "../Components/Footer"
import { useSelector } from "react-redux";
const Search = () => {
  const data = useSelector((state) => state);
  const { loading } = data.searchReducer;
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
      {loading ? <></> : <Footer/>}
      <ScrollToTop />
    </div>
  );
};

export default Search;
