import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import { searchQuery, queryResultsUpdate } from "../Redux/Actions/fetchData";
import axios from "axios"
const SearchBar = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { query } = data.fetchReducer;

  const fetchQuery = async () => {
    const response = await axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${query}&limit=50`
    );
    dispatch(queryResultsUpdate(response.data.results));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchQuery();
  };

  const handleChange = (event) => {
    dispatch(searchQuery(event.target.value));
  };


  return (
    <div>
      <Typography variant="h3" align="center" sx={{ paddingTop: "1rem" }}>
        Search Anime
      </Typography>
      <Box
        sx={{
          p: "1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            value={query}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography>🔎</Typography>
                </InputAdornment>
              ),
              endAdornment: (
                <Button type="submit" variant="text">
                  <Typography sx={{ color: "text.primary" }}>Go</Typography>
                </Button>
              ),
            }}
            // inputProps={{ style: { fontSize: 30 } }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
                "&:hover fieldset": {
                  borderColor: "white",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "yellow",
                },
              },
            }}
          />
        </form>
      </Box>
    </div>
  );
};

export default SearchBar;
