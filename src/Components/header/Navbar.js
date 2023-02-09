import React from "react";
import { AppBar, Box, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMobileNavbarState } from "../../Redux/Actions/mobileNavbarAction";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const mobileView = useMediaQuery((theme) => theme.breakpoints.up("sm"));
  const { mobileNavbarState } = data.mobileNavbarReducer;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {mobileView ? (
            <>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                <Link to="/" className="home-link">
                  AniMan
                </Link>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  paddingRight: { xs: 0, sm: 3 },
                  flexGrow: { xs: 1, sm: 0 },
                }}
              >
                <Link to="/manga" style={{ color: "white" }}>
                  Manga
                </Link>
              </Typography>
              <Typography variant="h6" sx={{ paddingRight: { xs: 0, sm: 3 } }}>
                <Link to="/search" style={{ color: "white" }}>
                  Search
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link to="/random" style={{ color: "white" }}>
                  Random
                </Link>
              </Typography>
            </>
          ) : (
            <>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, color: "#FF0000" }}
                  >
                    AniMan
                  </Typography>
                </Grid>
                <Grid item>
                  <MenuIcon
                    sx={{
                      margin: 0,
                      padding: 0,
                      "&:hover": { cursor: "pointer" },
                    }}
                    onClick={() => {
                      dispatch(setMobileNavbarState(!mobileNavbarState));
                    }}
                  />
                </Grid>
              </Grid>
              <MobileNavbar />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
