import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import Select from "react-select";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCategory } from "../../actions/categories";
import { updateLocation } from "../../actions/locations";

import categoryValidation from "../../validation/category";
import locationValidation from "../../validation/location";
import { cleanEmptyProp } from "./helperFunction";
import { getModalStyle, useStyles } from "./style";
import "./style.css";

export default function MyModal({ open, setOpen, data }) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinatesLng, setCoordinatesLng] = useState("");
  const [coordinatesLat, setCoordinatesLat] = useState("");
  const [category, setCategory] = useState();
  const [error, setError] = useState("");
  const [modalStyle] = useState(getModalStyle);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const options = categories.map((category) => {
    return { value: category.name, label: category.name };
  });

  const handleClose = () => {
    setOpen(false);
    setError("");
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setError("");
    if (data.type === "location") {
      let categoryArr;
      if (category) {
        categoryArr = category.map((cate) => cate.label);
      }
      const newProps = cleanEmptyProp({
        name,
        address,
        coordinatesLng,
        coordinatesLat,
        category: categoryArr,
      });
      const newLocation = { ...data, ...newProps };
      delete newLocation.type;
      try {
        await locationValidation(newLocation);
        dispatch(updateLocation(newLocation));
        setOpen(false);
      } catch (error) {
        setError(error.errors[0].split(",")[0]);
      }
    }
    if (data.type === "category") {
      const newProps = cleanEmptyProp({
        name,
      });
      const newCategory = { ...data, ...newProps };
      delete newCategory.type;
      try {
        await categoryValidation(newCategory);
        dispatch(updateCategory(newCategory));
        setOpen(false);
      } catch (error) {
        setError(error.errors[0].split(",")[0]);
      }
    }
  };
  const body = (
    <>
      {data && data.type === "location" && (
        <div style={modalStyle} className={classes.paper}>
          <form className="model" onSubmit={(e) => submitHandler(e)}>
            <h2 className="title">Edit this Location</h2>

            <input
              className="common-input"
              defaultValue={data.name}
              placeholder="Name of the location"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <input
              className="common-input"
              defaultValue={data.address}
              placeholder="Address"
              onChange={(e) => setAddress(e.currentTarget.value)}
            />
            <div className="add-location-coordinates">
              <input
                className="common-input"
                defaultValue={data.coordinatesLng}
                placeholder="Coordinates lng"
                onChange={(e) => setCoordinatesLng(e.currentTarget.value)}
              />
              <input
                className="common-input"
                defaultValue={data.coordinatesLat}
                placeholder="Coordinates lat"
                onChange={(e) => setCoordinatesLat(e.currentTarget.value)}
              />
            </div>

            <Select
              isMulti
              value={category}
              onChange={(e) => setCategory(e)}
              options={options}
              defaultValue={data.category.map((element) => ({ value: element, label: element }))}
            />

            <Button variant="contained" type="submit" color="primary">
              Update Location
            </Button>
            {error && (
              <div className="error-message">
                <ErrorOutlineOutlinedIcon style={{ color: "var(--light)" }} />
                <span>{error}</span>
              </div>
            )}
          </form>
          <MyModal />
        </div>
      )}
      {data && data.type === "category" && (
        <div style={modalStyle} className={classes.paper}>
          <form className="model" onSubmit={(e) => submitHandler(e)}>
            <h2 className="title">Edit this category</h2>
            <input
              className="common-input"
              defaultValue={data.name}
              placeholder="Enter a new Category"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <Button variant="contained" type="submit">
              Update Category
            </Button>
            {error && (
              <div className="error-message">
                <ErrorOutlineOutlinedIcon style={{ color: "var(--light)" }} />
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>
      )}
    </>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(255,255,255,0.5" }}
      >
        {body}
      </Modal>
    </div>
  );
}
