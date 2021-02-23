import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

import Header from "./components/header";
import Menu from "./components/menu";
import Categories from "./pages/categories";
import Locations from "./pages/locations";
import AddCategory from "./pages/addCategory";
import AddLocation from "./pages/addLocation";

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
      <div className="app-layout">
        <Router>
          <Header />
          <Menu menuValue={menuValue} setMenuValue={setMenuValue} />
          <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/add-Category" component={AddCategory} />
            <Route exact path="/add-Location" component={AddLocation} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
