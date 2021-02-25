import React, { useEffect } from "react";

import { grey } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchCategories } from "./actions/categories";
import { fetchLocations } from "./actions/locations";

import Header from "./components/header";
import Menu from "./components/menu";
import Categories from "./pages/categories";
import Locations from "./pages/locations";
import AddCategory from "./pages/addCategory";
import AddLocation from "./pages/addLocation";
import SingleCategory from "./pages/singleCategory";

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
          <Menu />
          <Switch>
            <Route exact path="/categories" component={Categories} />
            <Route path="/categories/:id" component={SingleCategory} />
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
