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

const RandomManga = () => {
  const data = useSelector((state) => state);
  const { randomMangaData } = data.randomReducer;
  const {
    authors,
    images,
    title,
    title_japanese,
    synopsis,
    rank,
    published,
    volumes,
    status,
    type,
    url,
  } = randomMangaData;
  console.log("randomMangaData: ", randomMangaData);
  return (
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
            {title}{" "}
            {title_japanese ? <span>{`(${title_japanese})`}</span> : null}
          </Typography>
          <Typography variant="h4" gutterBottom>
            Author(s): {authors.map((author) => author.name)}
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
            {published ? (
              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Published</Typography>
                    <Typography>{published.string.substring(0, 12)}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ) : null}
            {volumes ? (
              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Volume(s)</Typography>
                    <Typography>{volumes}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ) : null}
            {status ? (
              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Status</Typography>
                    <Typography>{status}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ) : null}
            {type ? (
              <Grid item xs={12} sm={6} lg={2}>
                <Card sx={{ backgroundColor: "#363846" }}>
                  <CardContent>
                    <Typography>Type</Typography>
                    <Typography>{type}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ) : null}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default RandomManga;
