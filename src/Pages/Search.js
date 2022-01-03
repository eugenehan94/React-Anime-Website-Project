import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import ScrollToTop from "../Components/ScrollToTop";
import SearchBar from "../Components/SearchBar";
const Search = () => {
  const data = useSelector((state) => state);
  const { queryResults } = data.fetchReducer;
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Box sx={{ p: "1rem" }}>
        <Grid container spacing={6}>
          {queryResults.map((result) => {
            return (
              <Grid
                item
                xl={2}
                lg={3}
                md={4}
                sm={6}
                xs={12}
                key={result.mal_id}
              >
                <Card
                  sx={{
                    backgroundColor: "#1a202c",
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <CardActionArea
                    href={result.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="movie">
                      <CardMedia
                        component="img"
                        image={result.image_url}
                        alt={result.title}
                        height="325"
                        sx={{
                          position: "relative",
                          objectFit: "fill",
                        }}
                      />
                      <div className="movie-info">
                        <Typography gutterBottom>{result.title}</Typography>
                        <Typography>Rank: {result.rank}</Typography>
                        <Typography gutterBottom>
                          Score:
                          {result.score === 0 ? (
                            " N/A"
                          ) : (
                            <> {result.score}/10 ✩</>
                          )}
                        </Typography>
                        <Typography>
                          Start Date:{" "}
                          {result.start_date === null ? (
                            " Unknown"
                          ) : (
                            <>{result.start_date}</>
                          )}
                        </Typography>
                        <Typography>
                          Episodes:{" "}
                          {result.episodes === null ? (
                            " Unknown"
                          ) : (
                            <>{result.episodes}</>
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
      <ScrollToTop />
    </div>
  );
};

export default Search;
