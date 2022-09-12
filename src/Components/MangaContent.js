import React, { useEffect } from "react";
import { MANGA_CATEGORY_TITLE } from "../__helper/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";
import { selectedList } from "../Redux/Actions/mangaActions";
import axios from "axios";
const MangaContent = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { mangaSelectedCategory, mangaList, mangaIsLoading } =
    data.mangaReducer;

  useEffect(() => {
    const fetchChoice = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v3/top/manga/1/${mangaSelectedCategory}`
      );
      dispatch(selectedList(response.data.top));
    };
    fetchChoice();
  }, [mangaSelectedCategory, dispatch]);

  if (mangaIsLoading) {
    return <></>;
  }

  return (
    <Box sx={{ p: "1rem" }}>
      <Typography variant="h3" align="center" sx={{ paddingBottom: "2rem" }}>
        {MANGA_CATEGORY_TITLE} {mangaSelectedCategory}
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
                      <Typography gutterBottom>{item.title.toUpperCase()}</Typography>
                      <Typography>
                        {item.rank && <>Rank: {item.rank}</>}
                      </Typography>
                      <Typography gutterBottom>
                        {item.score && (
                          <>
                            Score: {item.score}/10{" "}
                            <StarRateIcon fontSize="small" />
                          </>
                        )}
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
