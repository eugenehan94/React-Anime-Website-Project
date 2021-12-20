import React from "react";
import { Box, FormControl, Select, MenuItem } from "@mui/material";
const DropdownBox = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
            <MenuItem value={10} sx={{ color: "text.secondary" }}>
              Top Airing
            </MenuItem>
            <MenuItem value={20} sx={{ color: "text.secondary" }}>
              Top Movies
            </MenuItem>
            <MenuItem value={30} sx={{ color: "text.secondary" }}>
              Top TVs
            </MenuItem>
            <MenuItem value={40} sx={{ color: "text.secondary" }}>
              Top Upcoming
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default DropdownBox;
