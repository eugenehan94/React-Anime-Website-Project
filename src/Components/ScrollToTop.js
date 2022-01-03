import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisiblity = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisiblity);

    return () => {
      window.removeEventListener("scroll", toggleVisiblity);
    };
  }, []);

  return (
    <Box sx={{ position: "fixed", bottom: 10, right: 10, zIndex: "999" }}>
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="contained"
          sx={{
            backgroundColor: "#FF0000",
            color: "black",
            "&:hover": { backgroundColor: "#ff2323" },
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>Top</Typography>
        </Button>
      )}
    </Box>
  );
};

export default ScrollToTop;
