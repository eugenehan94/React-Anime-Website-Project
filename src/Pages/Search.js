import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";
import { searchQuery } from "../Redux/Actions/fetchData";
import { TextField } from "@mui/material";
import axios from "axios";
const Search = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { query, queryResults } = data.fetchReducer;
  console.log("data: ", data);

  useEffect(() => {
    const fetchQuery = async () => {
      const response = await axios
        .get(`https://api.jikan.moe/v3/search/anime?q=${query}`)
        .catch((error) => {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        });
        console.log("Response: ", response.data.results)
    };
    fetchQuery();
  }, [dispatch, query]);

  const handleChange = (event) => {
    dispatch(searchQuery(event.target.value));
  };

  return (
    <div>
      <Navbar />
      <TextField type="text" value={query} onChange={handleChange} />
    </div>
  );
};

export default Search;
