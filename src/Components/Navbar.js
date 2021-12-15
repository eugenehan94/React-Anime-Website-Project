import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navbar
          </Typography>
          <Typography variant="h6" component="div">
            Search
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
