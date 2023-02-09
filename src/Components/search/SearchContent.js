import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
const SearchContent = () => {
  const data = useSelector((state) => state);
  const { queryResults } = data.fetchDataReducer;
  return (
    <Box>
      <Grid container spacing={6}>
        {queryResults.map((result, i) => {
          return (
            // key={i} because API of same Manga and Anime will give same key errors
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={i}>
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
                      image={result.images.jpg.image_url}
                      alt={result.title}
                      height="325"
                      sx={{
                        position: "relative",
                        objectFit: "fill",
                      }}
                    />
                    <div className="movie-info">
                      <Typography gutterBottom>
                        {result.title.toUpperCase()}
                      </Typography>
                      <Typography>Type: {result.type}</Typography>
                      <Typography gutterBottom>
                        Score:
                        {result.score === 0 ? (
                          " N/A"
                        ) : (
                          <>
                            {" "}
                            {result.score}/10 <StarRateIcon fontSize="small" />
                          </>
                        )}
                      </Typography>
                      <Typography>
                        {result.volumes && <>Volume(s): {result.volumes}</>}
                      </Typography>
                      <Typography>
                        {result.episodes && <>Episode(s): {result.episodes}</>}
                        {result.chapters && <>Chapter(s): {result.chapters}</>}
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

export default SearchContent;
