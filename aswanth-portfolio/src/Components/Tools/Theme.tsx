// src/theme.ts
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#58A6FF", // accent color
    },
    background: {
      default: "#0D1117", // main background
      paper: "#161B22",   // secondary background (cards, sections)
    },
    text: {
      primary: "#E6EDF3",
      secondary: "#8B949E",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default darkTheme;
