import React from "react";
import Clock from "./clock";
import ExploreIcon from "@material-ui/icons/Explore";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="icon-web">
        <ExploreIcon />
      </div>
      <h1>Dashboard</h1>
      <Clock />
      <div className="actions-button">
        <IconButton className="edit-button">
          <EditIcon />
        </IconButton>
        <IconButton className="delete-button">
          <DeleteIcon />
        </IconButton>
        <IconButton className="add-button" component={Link} to="/add-categories">
          <AddCircleOutlineIcon />
        </IconButton>
      </div>
    </div>
  );
}
