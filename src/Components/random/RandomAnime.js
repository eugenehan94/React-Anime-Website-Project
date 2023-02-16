import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const RandomHero = () => {
  const data = useSelector((state) => state);
  const { randomAnimeData } = data.randomReducer;
  const {
    aired,
    duration,
    episodes,
    title,
    title_japanese,
    images,
    rank,
    rating,
    source,
    synopsis,
    trailer,
    url
  } = randomAnimeData;

  return (
    <Box>
      <Box>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          Anime
        </Typography>
        <Grid container spacing={1}>
          <Grid item md={3}>
            <Card>
              <CardActionArea href={url} target="_blank" rel="noreferrer">
                <CardMedia
                  component="img"
                  alt=""
                  height="400px"
                  image={images.jpg.image_url}
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={9}>
            <Typography variant="h4" gutterBottom>
              {title} ( {title_japanese})
            </Typography>
            {synopsis && (
              <Box>
                <Typography variant="h4">Synopsis</Typography>
                <Typography gutterBottom>{synopsis}</Typography>
              </Box>
            )}

            <Typography variant="h4">More Information</Typography>
            <Grid container spacing={2} sx={{ marginBottom: "0.8rem" }}>
              {rank ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Rank</Typography>
                      <Typography>{rank}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null}

              {aired.string ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Aired</Typography>
                      <Typography>{aired.string.substring(0, 12)}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null}
              {episodes ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Episode(s)</Typography>
                      <Typography>{episodes}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null}
              {duration ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Duration</Typography>
                      <Typography>{duration}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null}

              {rating ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Rating</Typography>
                      <Typography>{rating.substring(0, 5)}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null}
              {source ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Source</Typography>
                      <Typography>{source}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null}
            </Grid>
            {trailer.youtube_id ? (
              <Grid container>
                <Grid item xs={12}>
                  <Typography variant="h4">Trailer</Typography>
                  <Box>
                    {/* https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 */}
                    <iframe
                      width="100%"
                      // style={{ maxWidth: "500px" }}
                      height="100%"
                      src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </Box>
                  <Typography sx={{ fontStyle: "italic" }}>
                    **Information compiled from Jikan API. Episode count
                    includes sequel seasons and movies. Trailer may be
                    unavailable in certain regions. Streaming availability
                    determined based of United States Licensing.**
                  </Typography>
                </Grid>
              </Grid>
            ) : null}
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Box>
    </Box>
  );
};

export default RandomHero;
