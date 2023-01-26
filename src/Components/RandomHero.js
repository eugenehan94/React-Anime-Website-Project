import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const RandomHero = () => {
  const data = useSelector((state) => state);
  console.log("RandomHero data: ", data);
  const { randomAnimeData } = data.randomReducer;
  const {
    aired,
    duration,
    episodes,
    title,
    title_japanese,
    genres,
    images,
    rank,
    rating,
    source,
    synopsis,
    trailer,
  } = randomAnimeData;
  console.log("randomAnimeData: ", randomAnimeData);
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item md={3}>
          <Card>
            <CardMedia
              component="img"
              alt=""
              height="400px"
              image={images.jpg.image_url}
            />
          </Card>
        </Grid>
        <Grid item md={9}>
          <Typography>{title}</Typography>
          <Typography>{title_japanese}</Typography>
          <Typography>Synopsis</Typography>
          <Typography>{synopsis}</Typography>
          <Typography>More Information</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} lg={2}>
              <Card sx={{ backgroundColor: "#363846" }}>
                <CardContent>
                  <Typography>Rank</Typography>
                  <Typography>{rank}</Typography>
                </CardContent>
              </Card>
            </Grid>
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

            <Grid item xs={12} sm={6} lg={2}>
              <Card sx={{ backgroundColor: "#363846" }}>
                <CardContent>
                  <Typography>Episode(s)</Typography>
                  <Typography>{episodes}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
              <Card sx={{ backgroundColor: "#363846" }}>
                <CardContent>
                  <Typography>Duration</Typography>
                  <Typography>{duration}</Typography>
                </CardContent>
              </Card>
            </Grid>
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

            <Grid item xs={12} sm={6} lg={2}>
              <Card sx={{ backgroundColor: "#363846" }}>
                <CardContent>
                  <Typography>Source</Typography>
                  <Typography>{source}</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Grid container>
          <Grid item>
            <Typography>Trailer</Typography>
            {/* https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2 */}
            <iframe
              width="100%"
              style={{maxWidth: "500px"}}
              height="100%"
              src={`https://www.youtube.com/embed/${trailer.youtube_id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
            <Typography>
              Information compiled from AniList and MyAnimeList. Episode count
              includes sequel seasons and movies. Trailer may be unavailable in
              certain regions. Streaming availability determined based of United
              States Licensing.
            </Typography>
          </Grid>
          </Grid>
     
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </Box>
  );
};

export default RandomHero;
