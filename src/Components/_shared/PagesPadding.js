import React from "react";
import { Box } from "@mui/material";

const PagesPadding = ({ children, ...props }) => {
  return (
    <Box
      sx={{
        paddingLeft: { xs: "1rem", sm: "2rem" },
        paddingRight: { xs: "1rem", sm: "2rem" },
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
    >
      {children}
    </Box>
  );
};

export default PagesPadding;
