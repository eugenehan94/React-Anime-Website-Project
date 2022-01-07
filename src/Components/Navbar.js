import React from "react";

import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: "#FF0000" }}>
              AniMan
            </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              paddingRight: {xs: 0, sm: 3}, 
              flexGrow: { xs: 1, sm: 0 } }}
          >
            <Link to="/manga" style={{ color: "white" }}>
              Manga
            </Link>
          </Typography>
          <Typography variant="h6" component="div">
            <Link to="/search" style={{ color: "white" }}>
              Search
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
