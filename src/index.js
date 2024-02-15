import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StyledEngineProvider } from "@mui/material/styles";
import inter from ".//assets/fonts/Inter/static/Inter-Regular.ttf";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1db790",
    },
  },
  typography: {
    fontFamily: inter,
  },
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
        filledSuccess: {
          backgroundColor: "#1db790",
          color: "#FFFFFF",
          "&:focus": {
            backgroundColor: "#1db790", // Adjust the focus color as needed
          },
        },
        outlinedSuccess: {
          borderColor: "#1db790",
          color: "#1db790",
          "&:focus": {
            borderColor: "#1db790", // Adjust the focus color as needed
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": [inter],
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App />
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
