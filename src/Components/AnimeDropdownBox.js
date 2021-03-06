import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { selectedDropdown } from "../Redux/Actions/animeActions";

const DropdownBox = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { selectedChoice, loading } = data.animeReducer;

  const handleChange = (event) => {
    dispatch(selectedDropdown(event.target.value));
  };

  if (loading) {
    return <></>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-start"},
      }}
    >
      <Box>
        <FormControl variant="filled">
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedChoice}
            // label="Age"
            onChange={handleChange}
            sx={{
              "&:before": {
                borderBottomColor: "#ffffff",
              },
              "&:after": {
                borderBottomColor: "#ffffff",
              },
              "& .MuiSvgIcon-root": {
                color: "#ffffff",
              },
              fontSize: "1.5rem",
            }}
          >
            <MenuItem
              value="airing"
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            >
              Top Airing
            </MenuItem>
            <MenuItem
              value="movie"
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            >
              Top Movies
            </MenuItem>
            <MenuItem
              value="tv"
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            >
              Top TVs
            </MenuItem>
            <MenuItem
              value="upcoming"
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            >
              Top Upcoming
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default DropdownBox;
