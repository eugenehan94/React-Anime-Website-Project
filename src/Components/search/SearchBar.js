import React from "react";
import {SEARCH_TITLE} from "../../__helper/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { queryResultsUpdate } from "../../Redux/Actions/fetchData";

import {
  searchLoader,
  setSearchPending,
  setSearchErrorMessage,
} from "../../Redux/Actions/searchAction";
import Loader from "../loader/Loader";
import SwitchTo from "./SwitchTo";
import axios from "axios";
const SearchBar = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { typeSelection } = data.fetchDataReducer;
  const { searchPending, searchErrorMessage } = data.searchReducer;

  const inputRef = React.useRef("Naruto");

  const fetchQuery = async (input) => {
    dispatch(setSearchPending(true));
    try {
      const response = await axios.get(
        `https://api.jikan.moe/v4/${typeSelection}?q=${input}&limit=50`
      );
      dispatch(setSearchErrorMessage(""));
      dispatch(queryResultsUpdate(response.data.data));
      dispatch(searchLoader(false));
    } catch (error) {
      dispatch(
        setSearchErrorMessage(
          "Oops, something went wrong. Please correct your search or try again later."
        )
      );
      dispatch(setSearchPending(false));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchQuery(inputRef.current.value);
  };

  return (
    <div>
      <Typography variant="h3" align="center" sx={{ paddingTop: "1rem" }}>
        {SEARCH_TITLE}
      </Typography>
      <SwitchTo />
      <Box
        sx={{
          p: "1rem",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            defaultValue="Naruto"
            inputRef={inputRef}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography>🔎</Typography>
                </InputAdornment>
              ),
              endAdornment: (
                <Button
                  type="submit"
                  variant="text"
                  startIcon={
                    searchPending ? (
                      <Loader size="1.8rem" thickness={7} />
                    ) : (
                      <></>
                    )
                  }
                  disabled={searchPending}
                  disableRipple
                >
                  <Typography sx={{ color: "text.primary" }}>Search</Typography>
                </Button>
              ),
            }}
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
        {searchErrorMessage && (
          <Typography sx={{ color: "red" }}>{searchErrorMessage}</Typography>
        )}
      </Box>
    </div>
  );
};

export default SearchBar;
