import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";
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
      faded: "#6d8a6d"
    },
    background: {
      default: "#eff4ec",
    },
  },
  typography: {
    h3: {
      fontFamily: "Playfair Display",
    },
    h4: {
      fontFamily: "Playfair Display"
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

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
