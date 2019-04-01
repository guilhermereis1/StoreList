import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import "./App.css";
import Header from "./common/Header";
import Home from "./home/index";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#039be5"
    },
    secondary: {
      main: "#2979ff"
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Header />
        <Home />
        <div className="App" />
      </MuiThemeProvider>
    );
  }
}

export default App;
