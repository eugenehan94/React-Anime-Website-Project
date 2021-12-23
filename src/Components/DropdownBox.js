import React from "react";
import { useEffect } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Grid,
  FormControl,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
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
      <Typography>Anime - Top {age} </Typography>
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={item.mal_id}>
              <Card sx={{ backgroundColor: "#1a202c", height: "100%" }}>
                <CardMedia
                  component="img"
                  image={item.image_url}
                  alt={item.title}
                  height="300"
                  sx={{ objectFit: "fill" }}
                />
                <CardContent>
                  <Typography>{item.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default DropdownBox;
