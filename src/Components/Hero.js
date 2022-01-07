import React from "react";
import { Box } from "@mui/material";

import demonSlayerHeroImage from "../Images/demonSlayerHeroImage.jpg";

const Hero = () => {
  return (
    <Box>
      <img
        src={demonSlayerHeroImage}
        alt="demon slayer poster"
        style={{ width: "100%", height: "30rem" }}
      />
    </Box>
  );
};

export default Hero;
