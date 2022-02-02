import React from "react";
import { Box,Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import animeCryingImage from "../Images/animeCryingImage.png"
import Footer from "../Components/Footer"
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
      <Box sx={{display: "flex", justifyContent: "center"}}>
        <img src={animeCryingImage} alt="Anime Character Crying" />
      </Box>
      <Footer/>
    </div>
  );
};

export default Error;
