import React, { useState, useEffect } from "react";
import Clock from "./clock";
import ExploreIcon from "@material-ui/icons/Explore";
import { Link } from "react-router-dom";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../actions/categories";

import "./style.css";

export default function Header() {
  const [locationsOrCategories, setLocationsOrCategories] = useState();
  const [title, setTitle] = useState();
  const [showButtons, setShowButtons] = useState();
  const [openModal, setOpenModal] = useState(false);

  const location = useLocation();
  const dispatch = useDispatch();

  const selectedItem = useSelector((state) => state.selectedItem);

  useEffect(() => {
    switch (location.pathname) {
      case "/add-location":
        setLocationsOrCategories("locations");
        setTitle("Add a new Location");
        setShowButtons(false);
        break;
      case "/locations":
        setLocationsOrCategories("locations");
        setTitle("Locations");
        setShowButtons(true);
        break;
      case "/add-category":
        setLocationsOrCategories("categories");
        setTitle("Add a new Category");
        setShowButtons(false);
        break;
      case "/categories":
        setLocationsOrCategories("categories");
        setTitle("Categories");
        setShowButtons(true);
        break;
      default:
        setLocationsOrCategories("");
        break;
    }
  }, [location]);

  const deleteHandler = () => {
    dispatch(removeCategory(selectedItem[0]));
  };
  const editHandler = () => {
    setOpenModal(true);
  };

  return (
    <div className="header">
      <div className="icon-web">
        <ExploreIcon />
      </div>
      <h1>{title}</h1>
      <Clock />
      <div className="actions-button">
        {selectedItem[0] && (
          <>
            <Tooltip title="Edit" placement="bottom">
              <IconButton className="edit-button" onClick={editHandler}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete" placement="bottom">
              <IconButton className="delete-button" onClick={deleteHandler}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
        {showButtons && (
          <Tooltip
            title={locationsOrCategories === "categories" ? "/Add Category" : "Add Location"}
            placement="bottom"
          >
            <IconButton
              className="add-button"
              component={Link}
              to={locationsOrCategories === "categories" ? "/add-category" : "/add-location"}
            >
              <AddCircleOutlineIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
