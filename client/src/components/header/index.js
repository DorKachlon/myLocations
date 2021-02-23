import React from "react";
import Clock from "./clock";
import ExploreIcon from "@material-ui/icons/Explore";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="icon-web">
        <ExploreIcon />
      </div>
      <h1>Dashboard</h1>
      <Clock />
    </div>
  );
}
