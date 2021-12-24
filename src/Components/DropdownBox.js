import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import axios from "axios";
const DropdownBox = () => {
  const datas = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log("datas: ", datas)
  const [age, setAge] = React.useState("airing");
  const [data, setData] = React.useState([]);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    const fetchChoice = async () => {
      const response = await axios.get(
        `https://api.jikan.moe/v3/top/anime/1/${age}`
      );
      console.log(response.data.top);
      setData(response.data.top);
    };
    fetchChoice();
  }, [age]);

  console.log("Age: ", age);

  return (
    <Box sx={{ p: "1rem" }}>
      <Box>
        <FormControl variant="filled">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
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
