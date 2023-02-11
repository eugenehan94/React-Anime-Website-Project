import React from "react";
import Navbar from "../components/header/Navbar";
import ScrollToTop from "../components/_shared/ScrollToTop";
import SearchBar from "../components/search/SearchBar";
import PagesPadding from "../components/_shared/PagesPadding";
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
          <PagesPadding>
            <SearchContent />
          </PagesPadding>
          <Footer />
        </>
      )}
      <ScrollToTop />
    </div>
  );
};

export default Search;
