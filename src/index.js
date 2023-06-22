import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import App from "./components/app";
import { CssBaseline } from "@mui/material";

let theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#165916",
      faded: "#6d8a6d",
    },
    background: {
      default: "#eff4ec",
    },
  },
  typography: {
    h1: {
      fontFamily: "Prata",
      fontSize: "4.5em",
    },
    h2: {
      fontFamily: "Prata",
      fontSize: "3.5em",
    },
    h3: {
      fontFamily: "Playfair Display",
    },
    h4: {
      fontFamily: "Playfair Display",
    },
    subtitle1: {
      marginLeft: "4px",
      marginTop: "18px",
      fontFamily: "Playfair Display",
      fontWeight: 600,
      fontSize: "1em"

    },
    fontFamily: "Nanum Myeongjo",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1250,
      xl: 1800,
    },
  },
});

theme = responsiveFontSizes(theme);

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);


root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
