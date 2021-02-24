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
      <div className={selectedItemBool ? "card-selected" : "card"} onClick={clickHandler}>
        <div className="location-name">name: {location.name}</div>
        <div className="location-name">address: {location.address}</div>
        <div className="location-name">
          coordinates: {location.coordinatesLng} | {location.coordinatesLat}
        </div>
        <div className="location-category-container">
          {location.category.map((singleCategories) => (
            <div className="location-category">{singleCategories}</div>
          ))}
        </div>
      </div>
    </>
  );
}
