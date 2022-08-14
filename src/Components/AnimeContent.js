import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { selectedList } from "../Redux/Actions/animeActions";
import axios from "axios";
const Content = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { animeSelectedCategory, animeList, animeIsLoading } = data.animeReducer;

  useEffect(() => {
    const fetchChoice = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v3/top/anime/1/${animeSelectedCategory}`
      );
      dispatch(selectedList(response.data.top));
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
        sx={{ paddingBottom: "2rem", paddingTop: {xs: "1.5rem", lg: "0rem"}  }}
        data-testid="animeContentHeading"
      >
        Anime - Top {animeSelectedCategory}
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
                      image={item.image_url}
                      alt={item.title}
                      height="325"
                      sx={{
                        position: "relative",
                        objectFit: "fill",
                      }}
                    />
                    <div className="movie-info">
                      <Typography gutterBottom>{item.title}</Typography>
                      <Typography>Rank: {item.rank}</Typography>
                      <Typography gutterBottom>
                        Score:
                        {item.score === 0 ? " N/A" : <> {item.score}/10 ✩</>}
                      </Typography>
                      <Typography>
                        Start Date:{" "}
                        {item.start_date === null ? (
                          " Unknown"
                        ) : (
                          <>{item.start_date}</>
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

export default Content;
