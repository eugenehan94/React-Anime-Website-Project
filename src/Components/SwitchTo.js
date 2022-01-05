import React from "react";
import { useDispatch } from "react-redux";
import { Box, Switch, Stack, Typography } from "@mui/material/";
import {queryTypeSelection} from "../Redux/Actions/fetchData"
const SwitchTo = () => {
  // const data = useSelector((state) => state);
  const dispatch = useDispatch();
  // True is "anime" and False is "manga"
  // Kept useState because it is used in Switch and there is a propType of boolean
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    if (event.target.checked === false) {
      dispatch(queryTypeSelection("anime"));
      setChecked(event.target.checked);
    }
    if (event.target.checked === true) {
      dispatch(queryTypeSelection("manga"));
      setChecked(event.target.checked);
    }
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="h6">Anime</Typography>
        <Switch
          checked={checked}
          onChange={handleChange}
          sx={{
            "& .MuiSwitch-thumb": {
              backgroundColor: "#FF0000",
            },
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: "#ffffff",
            },
            "& .MuiSwitch-track": {
              backgroundColor: "#9f9f9f",
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: "#9f9f9f",
            },
          }}
        />
        <Typography variant="h6">Manga</Typography>
      </Stack>
    </Box>
  );
};

export default SwitchTo;
