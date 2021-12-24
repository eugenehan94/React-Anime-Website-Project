import React from "react";
import { Box } from "@mui/material";
import soloLevelingHeroImage from "../Images/soloLevelingHeroImage.jpg";

const MangaHero = () => {
  return (
    <Box>
      <img
        src={soloLevelingHeroImage}
        alt="Solo Leveling"
        style={{ width: "100%", height: "30rem" }}
      />
    </Box>
  );
};

export default MangaHero;
