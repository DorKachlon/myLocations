import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Select from "react-select";
import Button from "@material-ui/core/Button";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

import { addLocation } from "../../actions/locations";
import locationValidation from "../../validation/location";
import "./style.css";

export default function AddLocations() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [coordinatesLng, setCoordinatesLng] = useState("");
  const [coordinatesLat, setCoordinatesLat] = useState("");
  const [category, setCategory] = useState();
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const categories = useSelector((state) => state.categories);
  const options = categories.map((category) => {
    return { value: category.name, label: category.name };
  });

  const handleClick = async (event) => {
    event.preventDefault();
    let categoryArr;
    if (category) {
      categoryArr = category.map((cate) => cate.label);
    }
    const newLocation = {
      id: Date.now().toString(),
      name,
      address,
      coordinatesLng,
      coordinatesLat,
      category: categoryArr,
    };
    try {
      await locationValidation(newLocation);
      dispatch(addLocation(newLocation));
      history.push("/locations");
    } catch (error) {
      setError(error.errors[0].split(",")[0]);
    }
  };

  return (
    <>
      <div className="page page-add-location">
        <form className="add-location-form" onSubmit={(e) => handleClick(e)}>
          <h2 className="title">Here you can add a new Location</h2>
          <input
            className="common-input"
            value={name}
            placeholder="Name of the location"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <input
            className="common-input"
            value={address}
            placeholder="Address"
            onChange={(e) => setAddress(e.currentTarget.value)}
          />
          <div className="add-location-coordinates">
            <input
              className="common-input"
              value={coordinatesLng}
              placeholder="Coordinates lng"
              onChange={(e) => setCoordinatesLng(e.currentTarget.value)}
            />
            <input
              className="common-input"
              value={coordinatesLat}
              placeholder="Coordinates lat"
              onChange={(e) => setCoordinatesLat(e.currentTarget.value)}
            />
          </div>
          <Select isMulti value={category} onChange={(e) => setCategory(e)} options={options} />

          <Button variant="contained" type="submit">
            Add Location
          </Button>
          {error && (
            <div className="error-message">
              <ErrorOutlineOutlinedIcon style={{ color: "white" }} />
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
