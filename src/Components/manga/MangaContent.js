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
import StarRateIcon from "@mui/icons-material/StarRate";
import {
  selectedList,
  toggleMangaApiError,
} from "../../Redux/Actions/mangaActions";
import Loader from "../loader/Loader";
import animeCryingImage from "../../Images/animeCryingImage.png";
import axios from "axios";
const MangaContent = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { mangaSelectedCategory, mangaList, mangaIsLoading, mangaApiError } =
    data.mangaReducer;

  useEffect(() => {
    const fetchChoice = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/top/manga?type=${mangaSelectedCategory}`
        );
        dispatch(toggleMangaApiError(false));
        dispatch(selectedList(response.data.data));
      } catch (errors) {
        dispatch(toggleMangaApiError(true));
      }
    };
    fetchChoice();
  }, [mangaSelectedCategory, dispatch]);

  if (mangaIsLoading) {
    return <Loader />;
  }

  return (
    <Box>
      {mangaApiError ? (
        <>
          <Typography align="center" variant="h5">
            Sorry something went wrong
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <img
              src={animeCryingImage}
              alt="Anime Character Crying"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </>
      ) : (
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
                        image={item.images.jpg.image_url}
                        alt={item.title}
                        height="325"
                        sx={{
                          position: "relative",
                          objectFit: "fill",
                        }}
                      />
                      <div className="movie-info">
                        <Typography gutterBottom>
                          {item.title.toUpperCase()}
                        </Typography>
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
      )}
    </Box>
  );
};

export default MangaContent;
