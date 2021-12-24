import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">Home</Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/manga">Manga</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
