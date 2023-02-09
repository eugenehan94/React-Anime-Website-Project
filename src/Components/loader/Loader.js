import * as React from "react";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress disableShrink sx={{ color: "red" }} {...props} />
    </Box>
  );
};

export default Loader;
