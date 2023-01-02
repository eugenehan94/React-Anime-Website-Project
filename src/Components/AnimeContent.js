import React, { useEffect } from "react";
import { ANIME_CATEGORY_TITLE } from "../__helper/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { selectedList } from "../Redux/Actions/animeActions";
import axios from "axios";

const AnimeContent = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { animeSelectedCategory, animeList, animeIsLoading } =
    data.animeReducer;

  useEffect(() => {
    // Link to handling errors in axios async/await setup
    // https://rapidapi.com/guides/axios-async-await
    const fetchChoice = async () => {
      try {
        let response;
        // New version of API (V4) separated categories into specific API calls base on query parameters.
        if (
          animeSelectedCategory === "tv" ||
          animeSelectedCategory === "movie"
        ) {
          response = await axios.get(
            `https://api.jikan.moe/v4/top/anime?type=${animeSelectedCategory}`
          );
        }
        if (
          animeSelectedCategory === "airing" ||
          animeSelectedCategory === "upcoming"
        ) {
          response = await axios.get(
            `https://api.jikan.moe/v4/top/anime?filter=${animeSelectedCategory}`
          );
        }
        // const response = await axios.get(
        //   `https://api.jikan.moe/v4/top/anime`
        // );
        dispatch(selectedList(response.data.data));
      } catch (errors) {
        console.log("errors: ", errors);
      }
    };
    fetchChoice();
  }, [animeSelectedCategory, dispatch]);

  if (animeIsLoading) {
    return <></>;
  }
  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        sx={{ paddingBottom: "2rem", paddingTop: { xs: "1.5rem", lg: "0rem" } }}
        data-testid="animeContentHeading"
      >
        {ANIME_CATEGORY_TITLE} {animeSelectedCategory}
      </Typography>
      <Grid container spacing={6}>
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
                <CardActionArea
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="movie">
                    <CardMedia
                      component="img"
                      // image={item.image_url}
                      image={item.images.jpg.image_url}
                      alt={item.title}
                      height="325"
                      sx={{
                        position: "relative",
                        objectFit: "fill",
                      }}
                    />
                    <div className="movie-info">
                      <Typography gutterBottom>
                        {item.title.toUpperCase()}
                      </Typography>
                      <Typography>Rank: {item.rank}</Typography>
                      <Typography gutterBottom>
                        Score:{" "}
                        {item.score === 0 ? (
                          " N/A"
                        ) : (
                          <>
                            {item.score}/10 <StarRateIcon fontSize="small" />
                          </>
                        )}
                      </Typography>
                      <Typography>
                        Start Date:{" "}
                        {item.aired.string === null ? (
                          " Unknown"
                        ) : (
                          <>{item.aired.string}</>
                        )}
                      </Typography>
                      <Typography>
                        Episodes:{" "}
                        {item.episodes === null ? (
                          " Unknown"
                        ) : (
                          <>{item.episodes}</>
                        )}
                      </Typography>
                    </div>
                  </div>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default AnimeContent;
