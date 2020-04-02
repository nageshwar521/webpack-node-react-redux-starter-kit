import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import store from "./redux/store";
import "./App.scss";
import Header from "./components/Header/Header";
import Routes from "./routes/Routes";
import history from "./utils/history";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        margin: "10px",
      },
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#3b0648",
      // dark: '#359901', //hover of buttons.
      // light: '#359901',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#359901",
      main: "#729cb5",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#3b0648",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router history={history}>
          <Header />
          <Routes />
        </Router>
      </Provider>
    </MuiThemeProvider>
  );
}
