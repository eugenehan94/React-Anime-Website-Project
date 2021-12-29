import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { selectedDropdown } from "../Redux/Actions/animeActions";

const DropdownBox = () => {
  const datas = useSelector((state) => state);
  const dispatch = useDispatch();
  const { selectedChoice } = datas.animeReducer;
  console.log("datas: ", selectedChoice);

  const handleChange = (event) => {
    dispatch(selectedDropdown(event.target.value));
  };
  return (
    <Box sx={{ p: "1rem" }}>
      <Box>
        <FormControl variant="filled">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedChoice}
            // label="Age"
            onChange={handleChange}
          >
            <MenuItem value="airing" sx={{ color: "text.secondary" }}>
              Top Airing
            </MenuItem>
            <MenuItem value="movie" sx={{ color: "text.secondary" }}>
              Top Movies
            </MenuItem>
            <MenuItem value="tv" sx={{ color: "text.secondary" }}>
              Top TVs
            </MenuItem>
            <MenuItem value="upcoming" sx={{ color: "text.secondary" }}>
              Top Upcoming
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default DropdownBox;
