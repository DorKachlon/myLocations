import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core";

import QueueIcon from "@material-ui/icons/Queue";
import MapIcon from "@material-ui/icons/Map";

import { Link } from "react-router-dom";
import "./style.css";

const useStyle = makeStyles({
  indicator: {
    left: "0px",
    width: "10px",
  },
});
const links = [
  { title: "Category", to: "/categories", component: <QueueIcon /> },
  { title: "Location", to: "/locations", component: <MapIcon /> },
];

export default function Menu({ menuValue, setMenuValue }) {
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
