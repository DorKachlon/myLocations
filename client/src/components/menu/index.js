import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";

import MapIcon from "@material-ui/icons/Map";
import ListIcon from "@material-ui/icons/List";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import "./style.css";

const useStyle = makeStyles({
  indicator: {
    left: "0px",
    width: "10px",
  },
});
const links = [
  { title: "Category", to: "/categories", component: <ListIcon /> },
  { title: "Location", to: "/locations", component: <MapIcon /> },
];

export default function Menu() {
  const [menuValue, setMenuValue] = useState();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/add-location":
        setMenuValue(1);
        break;
      case "/locations":
        setMenuValue(1);
        break;
      case "/add-category":
        setMenuValue(0);
        break;
      case "/categories":
        setMenuValue(0);
        break;
      default:
        setMenuValue(0);
        break;
    }
  }, []);

  const classes = useStyle();

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
