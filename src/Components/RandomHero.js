import React from "react";
import { Box, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import demonSlayerHeroImage from "../Images/demonSlayerHeroImage.jpg";

const RandomHero = () => {
  const data = useSelector((state) => state);
  console.log("RandomHero data: ", data);
  const { randomAnimeData } = data.randomReducer;
  const { title, genres, images, synopsis } = randomAnimeData;
  console.log("randomAnimeData: ", randomAnimeData);
  return (
    <Box>
      <Card>TEST</Card>
      <Typography>Synopsis</Typography>
      <Typography>{synopsis}</Typography>
    </Box>
    // <Box sx={{ position: "relative", height: "350px", width: "400px"}}>
    /* <img
        src={images.jpg.image_url}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "fill" }}
      />
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "#2a2c37",
          color: "white",
          top: 0,
          left: 0,
          padding: "0.5rem",
        }}
      >
        {title}
      </Box>
      {genres.length > 0 ? (
        <Box
          sx={{
            position: "absolute",
            backgroundColor: "#2a2c37",
            color: "white",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "0.5rem",
          }}
        >
          {genres.map((genre) => genre.name + " ")}
        </Box>
      ) : null} */
    // </Box>
  );
};

export default RandomHero;
