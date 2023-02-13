import React from "react";
import { Box, Stack, Typography, Link } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const openInNewTab = (link) => {
  console.log("link: ", link);
  if (link === "github") {
  }
  if (link === "linkedin") {
  }
};

const Footer = () => {
  return (
    <Box
      sx={{
        height: { xs: "7.5rem", md: "5rem" },
        paddingTop: { xs: "2rem", sm: "1.5rem" },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ paddingBottom: "1.5rem" }}
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
        <Stack direction="row" spacing={2}>
          <GitHubIcon
            onClick={() => openInNewTab("github")}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
          <LinkedInIcon
            onClick={() => openInNewTab("linkedin")}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
