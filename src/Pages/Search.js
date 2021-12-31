import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../Components/Navbar";

import {TextField} from "@mui/material"
const Search = () => {
  const data = useSelector((state) => state)
  return (
    <div>
      <Navbar />
        <TextField />

    </div>
  );
};

export default Search;
