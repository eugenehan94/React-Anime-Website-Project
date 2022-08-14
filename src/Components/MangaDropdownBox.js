import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
import { selectedDropdown } from "../Redux/Actions/mangaActions";
const MangaDropdownBox = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { mangaSelectedCategory, mangaIsLoading } = data.mangaReducer;

  const handleChange = (event) => {
    dispatch(selectedDropdown(event.target.value));
  };

  if (mangaIsLoading) {
    return <></>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <FormControl variant="filled">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mangaSelectedCategory}
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
  );
};

export default MangaDropdownBox;
