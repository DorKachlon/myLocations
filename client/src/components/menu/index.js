import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tooltip from "@material-ui/core/Tooltip";
import MapIcon from "@material-ui/icons/Map";
import ListIcon from "@material-ui/icons/List";
import HomeIcon from "@material-ui/icons/Home";

import { useLocation, Link } from "react-router-dom";

import "./style.css";

const useStyle = makeStyles({
  indicator: {
    left: "0px",
    width: "10px",
  },
});
const links = [
  { title: "Home", to: "/", component: <HomeIcon /> },
  { title: "Category", to: "/categories", component: <ListIcon /> },
  { title: "Location", to: "/locations", component: <MapIcon /> },
];

export default function Menu() {
  const classes = useStyle();
  const [menuValue, setMenuValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/add-location":
        setMenuValue(2);
        break;
      case "/locations":
        setMenuValue(2);
        break;
      case "/add-category":
        setMenuValue(1);
        break;
      case "/categories":
        setMenuValue(1);
        break;
      case "/":
        setMenuValue(0);
        break;
      default:
        break;
    }
  }, [location.pathname]);

  const handleChange = (event, newValue) => {
    setMenuValue(newValue);
  };

  return (
    <>
      <div className="menu">
        <Tabs
          value={menuValue}
          orientation="vertical"
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          classes={{
            indicator: classes.indicator,
          }}
        >
          {links.map((link, i) => (
            <Tooltip key={i} title={link.title} placement="right">
              <Tab icon={link.component} component={Link} to={link.to} />
            </Tooltip>
          ))}
        </Tabs>
      </div>
    </>
  );
}
