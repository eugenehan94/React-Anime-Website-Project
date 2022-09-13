import React from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, Typography, Divider } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { setMobileNavbarState } from "../Redux/Actions/mobileNavbarAction";

const MobileNavbar = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  const { mobileNavbarState } = data.mobileNavbarReducer;

  const handleDrawerToggle = () => {
    dispatch(setMobileNavbarState(false));
  };

  const drawer = (
    <Box sx={{ padding: "1rem", height: "100%", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">AniMan</Typography>
        <CloseIcon
          fontSize="large"
          sx={{ color: "red", "&:hover": { cursor: "pointer" } }}
          onClick={() => {
            handleDrawerToggle();
          }}
        />
      </Box>
      <Divider
        sx={{
          marginTop: "10px",
          marginBottom: "10px",
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
      />
      <Box
        sx={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "10px" }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <HomeIcon fontSize="large" sx={{ margin: 0, padding: 0 }} />
          <Typography
            variant="h4"
            sx={{
              padding: 0,
              marginLeft: "15px",
              letterSpacing: "2px",
            }}
          >
            <Link
              to="/"
              style={{ color: "white" }}
              onClick={() => handleDrawerToggle()}
            >
              Home
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <MenuBookIcon fontSize="large" sx={{ margin: 0, padding: 0 }} />
          <Typography
            variant="h4"
            sx={{
              padding: 0,
              marginLeft: "15px",
              letterSpacing: "2px",
            }}
          >
            <Link
              to="/manga"
              style={{ color: "white" }}
              onClick={() => handleDrawerToggle()}
            >
              Manga
            </Link>
          </Typography>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <SearchIcon fontSize="large" sx={{ margin: 0, padding: 0 }} />
          <Typography
            variant="h4"
            sx={{
              padding: 0,
              marginLeft: "15px",
              letterSpacing: "2px",
            }}
          >
            <Link
              to="/search"
              style={{ color: "white" }}
              onClick={() => handleDrawerToggle()}
            >
              Search
            </Link>
          </Typography>
        </Box>
      </Box>

      <Box sx={{ position: "fixed", bottom: "30px", width: "90%" }}>
        <Divider
          variant="fullWidth"
          sx={{
            marginBottom: "10px",
            backgroundColor: "rgba(255,255,255,0.2)",
          }}
        />
        <Typography align="center">AniMan Developed by</Typography>
        <Typography
          align="center"
          onClick={() => {
            window.open(
              "https://eugenehan.netlify.app/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
          sx={{ "&:hover": { cursor: "pointer" }, textDecoration: "underline" }}
        >
          Eugene Han
        </Typography>
      </Box>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        variant="persistent"
        open={mobileNavbarState}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "100%",
            backgroundColor: "#1a202c",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MobileNavbar;
