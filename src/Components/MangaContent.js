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
import { selectedList } from "../Redux/Actions/mangaActions";
import axios from "axios";
const MangaContent = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { selectedChoice, mangaList, loading } = data.mangaReducer;

  useEffect(() => {
    const fetchChoice = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v3/top/manga/1/${selectedChoice}`
      );
      dispatch(selectedList(response.data.top));
    };
    fetchChoice();
  }, [selectedChoice, dispatch]);

  if (loading) {
    return <></>;
  }
  return (
    <Box sx={{ p: "1rem" }}>
      <Typography variant="h3" align="center" sx={{ paddingBottom: "2rem" }}>
        Manga - Top {selectedChoice}
      </Typography>
      <Grid container spacing={6}>
        {mangaList.map((item) => {
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
                      <Typography>{item.rank && <>Rank: {item.rank}</>}</Typography>
                      <Typography gutterBottom>
                        {item.score && <> Score: {item.score}/10 ✩</>}
                      </Typography>
                      <Typography>
                        {item.start_date && <>Start date: {item.start_date}</>}
                      </Typography>
                      <Typography>
                        {item.end_date && <>End date: {item.end_date}</>}
                      </Typography>
                      <Typography>
                        {item.volumes && <>Volume(s): {item.volumes}</>}
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

export default MangaContent;
