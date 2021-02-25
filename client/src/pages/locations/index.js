import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import LocationCard from "../../components/locationCard.js";
import { resetSelectedItem } from "../../actions/selectedItem";
import "./style.css";

export default function Locations() {
  const locations = useSelector((state) => state.locations);
  const selectedItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetSelectedItem());
    };
  }, []);

  return (
    <>
      {locations.length > 0 ? (
        <div className="page page-locations">
          <div className="locations-grid">
            {locations.map((location, i) => (
              <LocationCard
                key={i}
                location={location}
                selectedItemBool={selectedItem[0]?.id === location.id}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="page page-locations-empty">
          <div className="empty-section">
            <h2 className="title">Click here to add your first Location : </h2>
            <Link to="/add-location">
              <Tooltip title="Add a Location">
                <Button variant="contained">add a Location</Button>
              </Tooltip>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
