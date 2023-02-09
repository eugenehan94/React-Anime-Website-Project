import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/header/Navbar";
import ScrollToTop from "../components/_shared/ScrollToTop";
import SearchBar from "../components/search/SearchBar";
import SearchContent from "../components/search/SearchContent";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
const Search = () => {
  const data = useSelector((state) => state);
  const { searchComponentIsLoading } = data.searchReducer;
  return (
    <div>
      <Navbar />
      <SearchBar />
      {searchComponentIsLoading ? (
        <></>
      ) : (
        <>
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
          <Footer />
        </>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Search;
