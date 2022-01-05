import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const BREAKPOINTS = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1550,
  xl: 1920,
};

const breakpointsObject = {
  breakpoints: createBreakpoints({
    values: BREAKPOINTS,
  }),
};

const themeDetails = {
  typography: {
    fontFamily: ["IBM Plex Sans Condensed", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#165916",
    },
  },
};

const theme = createTheme(themeDetails, breakpointsObject);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
