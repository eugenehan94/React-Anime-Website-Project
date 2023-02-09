import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../components/header/Navbar";
import animeCryingImage from "../Images/animeCryingImage.png";
import Footer from "../components/footer/Footer";
const Error = () => {
  return (
    <div>
      <Navbar />
      <Typography align="center" variant="h1">
        404
      </Typography>
      <Typography align="center" variant="h5">
        Sorry your page was not found
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <img
          src={animeCryingImage}
          alt="Anime Character Crying"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Footer />
    </div>
  );
};

export default Error;
