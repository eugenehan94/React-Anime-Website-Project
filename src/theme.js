import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    background: {
      default: "#1a202c",
    },
    text: {
      primary: "#ffffff",
      secondary: "#000000",
    },
    primary: {
      main: "#1a202c",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

export default theme;
