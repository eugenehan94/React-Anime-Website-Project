import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    background: {
      default: "#1a202c",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#1a202c",
    },
  },
  typography: {
    fontFamily: ["Roboto"].join(","),
  },
});

export default theme;
