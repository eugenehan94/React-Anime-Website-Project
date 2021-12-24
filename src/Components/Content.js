import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { selectedList } from "../Redux/Actions/animeActions";
import axios from "axios";
const Content = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { selectedChoice, animeList, loading } = data.animeReducer;
  console.log("selectedChoice: ", selectedChoice);

  useEffect(() => {
    const fetchChoice = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v3/top/anime/1/${selectedChoice}`
      );
      // console.log(response.data.top);
      dispatch(selectedList(response.data.top));
    };
    fetchChoice();
  }, [selectedChoice]);

  if (loading) {
    return <>Loading</>;
  }

  return (
    <Box sx={{ p: "1rem" }}>
      <Typography sx={{ mb: "1rem" }}>Anime - Top {selectedChoice}</Typography>
      <Grid container spacing={4}>
        {animeList.map((item) => {
          return (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={item.mal_id}>
              <Card
                sx={{
                  backgroundColor: "#1a202c",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <div className="movie">
                  <CardMedia
                    component="img"
                    image={item.image_url}
                    alt={item.title}
                    height="350"
                    sx={{
                      position: "relative",
                      objectFit: "fill",
                    }}
                  />
                  <div className="movie-info">{item.title}</div>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Content;
