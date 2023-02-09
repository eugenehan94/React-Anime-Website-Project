import React from "react";
import { Box, Typography, Link } from "@mui/material";
const Footer = () => {

  return (
    <Box
      sx={{
        height: { xs: "7.5rem", md: "5rem" },
        paddingTop: { xs: "2rem", sm: "1.5rem" },
        paddingBottom: { xs: "2rem" },
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
      }}
    >
      <Typography align="center">
        Developed by{" "}
        <Link
          href="https://eugenehan.netlify.app/"
          target="_blank"
          rel="noreferrer"
          color="text.primary"
          underline="hover"
        >
          Eugene Han
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
