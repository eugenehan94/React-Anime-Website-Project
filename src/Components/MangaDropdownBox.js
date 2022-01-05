import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { selectedDropdown } from "../Redux/Actions/mangaActions";
const MangaDropdownBox = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { selectedChoice } = data.mangaReducer;
  console.log("DATA: ", data, selectedChoice);

  const handleChange = (event) => {
    dispatch(selectedDropdown(event.target.value));
  };

  return (
    <div>
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
              value="manga"
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            >
              Manga
            </MenuItem>
            <MenuItem
              value="manhwa"
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            >
              Manhwa
            </MenuItem>
            <MenuItem
              value="manhua"
              sx={{ color: "text.secondary", fontSize: "1.2rem" }}
            >
              Manhua
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default MangaDropdownBox;
