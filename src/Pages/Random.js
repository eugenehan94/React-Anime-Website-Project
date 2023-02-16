import React from "react";
import Navbar from "../components/header/Navbar";
import PagesPadding from "../components/_shared/PagesPadding";
import RandomEntry from "../components/random/Random";
import Footer from "../components/footer/Footer";

const Random = () => {
  return (
    <div>
      <Navbar />
      <PagesPadding>
        <RandomEntry />
      </PagesPadding>
      <Footer />
    </div>
  );
};

export default Random;
