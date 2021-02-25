import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../actions/selectedItem";

import "./style.css";
export default function LocationCard({ location, selectedItemBool }) {
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(setSelectedItem({ ...location, type: "location" }));
  };
  return (
    <>
      <div
        className={selectedItemBool ? "card-selected card-location" : "card card-location"}
        onClick={clickHandler}
      >
        <div className="location-name">{location.name}</div>
        <div className="location-address">address: {location.address}</div>
        <div className="location-coordinates">
          coordinates: {location.coordinatesLng} | {location.coordinatesLat}
        </div>
        <div className="location-category-container">
          {location.category.map((singleCategories, i) => (
            <div key={i} className="location-single-category">
              {singleCategories}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
