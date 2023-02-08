import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import ScrollToTop from "../components/ScrollToTop";
import SearchBar from "../components/SearchBar";
import SearchContent from "../components/SearchContent";
import Footer from "../components/Footer";
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
