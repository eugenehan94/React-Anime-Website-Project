import React from "react";
import { useEffect } from "react";
import { Box, Grid, FormControl, Select, MenuItem } from "@mui/material";
import axios from "axios";
const DropdownBox = () => {
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
    <Box sx={{ pt: "1rem", pb: "1rem" }}>
      <Box sx={{ minWidth: 50 }}>
        <FormControl fullWidth>
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
      <Grid container>
        {data.map((item) => {
          return (
            <Grid item xs={4}>
              <Box
                style={{
                  border: "1px solid red",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box style={{ border: "1px solid green", width: "70%" }}>
                  <img
                    src={item.image_url}
                    alt={item.title}
                    style={{ width: "100%" }}
                    objectFit="cover"
                  />
                </Box>
                <p>{item.title}</p>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DropdownBox;
