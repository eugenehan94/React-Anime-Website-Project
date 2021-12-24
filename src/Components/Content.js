import React from "react";

import { Card, CardMedia, CardContent, Grid, Typography } from "@mui/material";

const Content = () => {
  return (
    <div>
      <Typography>Anime - Top {age} </Typography>
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={item.mal_id}>
              <Card sx={{ backgroundColor: "#1a202c", height: "100%" }}>
                <CardMedia
                  component="img"
                  image={item.image_url}
                  alt={item.title}
                  height="300"
                  sx={{ objectFit: "fill" }}
                />
                <CardContent>
                  <Typography>{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Content;
