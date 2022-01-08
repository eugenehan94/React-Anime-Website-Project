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
const SearchContent = () => {
  const data = useSelector((state) => state);
  const { queryResults } = data.fetchReducer;
  return (
    <Box>
      <Grid container spacing={6}>
        {queryResults.map((result) => {
          return (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={result.mal_id}>
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
                      <Typography>Type: {result.type}</Typography>
                      <Typography>{result.rated && <>{result.rated}</>}</Typography>
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
