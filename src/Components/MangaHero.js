import React from "react"
import { Box } from "@mui/material";
import soloLevelingImage from "../Images/soloLevelingHeroImage.jpg";

const MangaHero = () => {
    return (
        <Box>
          <img
            src={soloLevelingImage}
            alt="solo leveling"
            style={{ width: "100%" }}
          />
        </Box>
    );
}
export default MangaHero