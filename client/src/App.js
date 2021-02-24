import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./actions/categories";
import { fetchLocations } from "./actions/locations";

import Header from "./components/header";
import Menu from "./components/menu";
import Categories from "./pages/categories";
import Locations from "./pages/locations";
import AddCategory from "./pages/addCategory";
import AddLocation from "./pages/addLocation";

import "./style/common.css";
import "./style/color.css";
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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <ThemeProvider theme={outerTheme}>
      <div className="app-layout">
        <Router>
          <Header />
          <Menu menuValue={menuValue} setMenuValue={setMenuValue} />
          <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/locations" component={Locations} />
            <Route exact path="/add-category" component={AddCategory} />
            <Route exact path="/add-location" component={AddLocation} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
