import React, { useState } from "react";
import Header from "./components/header";
import Menu from "./components/menu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import "./App.css";

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
});

function App() {
  const [menuValue, setMenuValue] = useState(0);

  return (
    <ThemeProvider theme={outerTheme}>
      <div className="App">
        <Router>
          <Header />
          <Menu menuValue={menuValue} setMenuValue={setMenuValue} />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
