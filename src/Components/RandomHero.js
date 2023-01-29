import React from "react";
import Footer from "./Footer";
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
  const { randomAnimeData, randomMangaData } = data.randomReducer;
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
  } = randomAnimeData;
  const {
    authors,
    images: mangaImages,
    title: mangaTitle,
    title_japanese: mangaJapaneseTitle,
    synopsis: mangaSynopsis,
    rank: mangaRank,
    published,
    volumes,
    status,
    type
  } = randomMangaData;
  console.log("randomMangaData: ", randomMangaData);
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
              <CardMedia
                component="img"
                alt=""
                height="400px"
                image={images.jpg.image_url}
              />
            </Card>
          </Grid>
          <Grid item md={9}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h4" gutterBottom>
              {title_japanese}
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
                  **Information compiled from Jikan API. Episode count includes
                  sequel seasons and movies. Trailer may be unavailable in
                  certain regions. Streaming availability determined based of
                  United States Licensing.**
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Box>
      <Box>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ textDecoration: "underline" }}
        >
          Manga
        </Typography>
        <Grid container spacing={1}>
          <Grid item md={3}>
            <Card>
              <CardMedia
                component="img"
                alt=""
                height="400px"
                image={mangaImages.jpg.image_url}
              />
            </Card>
          </Grid>
          <Grid item md={9}>
            <Typography variant="h4">{mangaTitle}</Typography>
            <Typography variant="h4" gutterBottom>
              {mangaJapaneseTitle}
            </Typography>
            <Typography variant="h4" gutterBottom>
              Author(s): {authors.map((author) => author.name)}
            </Typography>
            {mangaSynopsis && (
              <Box>
                <Typography variant="h4">Synopsis</Typography>
                <Typography gutterBottom>{mangaSynopsis}</Typography>
              </Box>
            )}

            <Typography variant="h4">More Information</Typography>
            <Grid container spacing={2} sx={{ marginBottom: "0.8rem" }}>
              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Rank</Typography>
                    <Typography>{mangaRank}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              {aired.string ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Published</Typography>
                      <Typography>
                        {published.string.substring(0, 12)}
                      </Typography>
                      {/* <Typography>{aired.string.substring(0, 12)}</Typography> */}
                    </CardContent>
                  </Card>
                </Grid>
              ) : null}

              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Volume(s)</Typography>
                    <Typography>{volumes}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Status</Typography>
                    <Typography>{status}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              {/* {rating ? (
                <Grid item xs={12} sm={6} lg={2}>
                  <Card sx={{ backgroundColor: "#363846" }}>
                    <CardContent>
                      <Typography>Rating</Typography>
                      <Typography>{rating.substring(0, 5)}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ) : null} */}

              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Type</Typography>
                    <Typography>{type}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
};

export default RandomHero;
