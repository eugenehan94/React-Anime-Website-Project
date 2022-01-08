import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link to="/" className="home-link">
              AniMan
            </Link>
          </Typography>
          <Typography
            variant="h6"
            sx={{
              paddingRight: {xs: 0, sm: 3}, 
              flexGrow: { xs: 1, sm: 0 } }}
          >
            <Link to="/manga" style={{ color: "white" }}>
              Manga
            </Link>
          </Typography>
          <Typography variant="h6">
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
