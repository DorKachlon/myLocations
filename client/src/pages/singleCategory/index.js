import React, { useEffect, useState } from "react";
import "./style.css";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import LocationCard from "../../components/locationCard.js";

export default function SingleCategory() {
  const [currentCategory, setCurrentCategory] = useState();
  const [currentLocations, setCurrentLocations] = useState();
  console.log(currentCategory);
  console.log(currentLocations);

  const location = useLocation();
  const categories = useSelector((state) => state.categories);
  const locations = useSelector((state) => state.locations);
  const selectedItem = useSelector((state) => state.selectedItem);

  useEffect(() => {
    const currentId = location.pathname.split("/")[2];
    const currentCategoryHelper = categories.find((category) => category.id === currentId);
    setCurrentCategory(currentCategoryHelper);
    setCurrentLocations(
      locations.filter((location) => location.category.includes(currentCategoryHelper.name))
    );
  }, [categories, locations]);
  return (
    <>
      <div className="page page-single-category">
        {currentCategory && currentLocations && (
          <>
            <div className="title title-single-category">
              All locations for category: {currentCategory.name}
            </div>
            {currentLocations.length !== 0 ? (
              <div className="single-category-locations-grid">
                {currentLocations.map((location, i) => (
                  <LocationCard
                    key={i}
                    location={location}
                    selectedItemBool={selectedItem[0]?.id === location.id}
                  />
                ))}
              </div>
            ) : (
              <>
                <div className="empty-section empty-section-single-category">
                  <h2 className="title">
                    No locations for this category yet.
                    <br />
                    Click here to add your first Location :
                  </h2>
                  <Link to="/add-location">
                    <Tooltip title="Add a Location">
                      <Button variant="contained">add a Location</Button>
                    </Tooltip>
                  </Link>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
