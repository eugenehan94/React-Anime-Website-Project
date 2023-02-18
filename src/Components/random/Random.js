import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/loader/Loader";
import RandomAnime from "../../components/random/RandomAnime";
import RandomManga from "../../components/random/RandomManga";
import {
  storeRandomAnime,
  toggleRandomAnimeIsLoading,
  storeRandomManga,
  toggleRandomMangaIsLoading,
} from "../../Redux/Actions/randomActions";

import { Box } from "@mui/material";

import axios from "axios";

const Random = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { randomAnimeIsLoading, randomMangaIsLoading } = data.randomReducer;
  useEffect(() => {
    const fetchRandomAnime = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/random/anime`
        );
        const explicitContent = response.data.data.genres.find(
          (genre) => genre.name === "Hentai"
        );
        // Prevents explicit content from showing
        if (explicitContent) {
          fetchRandomAnime();
        }
        dispatch(storeRandomAnime(response.data.data));
        dispatch(toggleRandomAnimeIsLoading(false));
      } catch (errors) {
        console.log("fetchRandomAnime error: ", errors);
      }
    };
    const fetchRandomManga = async () => {
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/random/manga`
        );
        const explicitContent = response.data.data.genres.find(
          (genre) => genre.name === "Hentai"
        );
        // Prevents explicit content from showing
        if (explicitContent) {
          fetchRandomManga();
        }
        dispatch(storeRandomManga(response.data.data));
        dispatch(toggleRandomMangaIsLoading(false));
      } catch (errors) {
        console.log("fetchRandomManga error: ", errors);
      }
    };
    fetchRandomAnime();
    fetchRandomManga();
  }, [dispatch]);
  return (
    <>
      {randomAnimeIsLoading ? <Loader /> : <RandomAnime />}
      <Box sx={{ pb: "3rem" }} />
      {randomMangaIsLoading ? <Loader /> : <RandomManga />}
    </>
  );
};

export default Random;
