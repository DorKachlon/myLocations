import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ExploreIcon from "@material-ui/icons/Explore";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Tooltip from "@material-ui/core/Tooltip";

import { removeCategory } from "../../actions/categories";
import { removeLocation } from "../../actions/locations";
import MyModal from "../modalEdit";
import Clock from "./clock";
import "./style.css";

export default function Header() {
  const [locationsOrCategories, setLocationsOrCategories] = useState();
  const [title, setTitle] = useState();
  const [showButtons, setShowButtons] = useState();
  const [openModal, setOpenModal] = useState(false);

  const selectedItem = useSelector((state) => state.selectedItem);
  const location = useLocation();
  const dispatch = useDispatch();

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
        setTitle("");
        setShowButtons(false);
        break;
    }
  }, [location]);

  const deleteHandler = () => {
    if (selectedItem[0].type === "location") {
      dispatch(removeLocation(selectedItem[0]));
    } else {
      dispatch(removeCategory(selectedItem[0]));
    }
  };
  const editHandler = () => {
    setOpenModal(true);
  };

  return (
    <div className="header">
      <Link className="icon-web" to="/">
        <ExploreIcon />
      </Link>
      <h1>{title}</h1>
      <Clock />
      <div className="actions-button">
        {selectedItem[0]?.type === "category" && (
          <Tooltip title="Info about category" placement="bottom">
            <IconButton
              className="info-button"
              component={Link}
              to={`/categories/${selectedItem[0].id}`}
            >
              <InfoIcon />
            </IconButton>
          </Tooltip>
        )}
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
      <MyModal open={openModal} setOpen={setOpenModal} data={selectedItem[0]} />
    </div>
  );
}
