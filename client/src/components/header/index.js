import React from "react";
import Clock from "./clock";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="icon-web">
        <LocationOnIcon />
      </div>
      <h1>Dashboard</h1>
      <Clock />
    </div>
  );
}
