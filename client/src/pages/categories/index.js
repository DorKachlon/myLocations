import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import CategoryCard from "../../components/categoryCard";

import "./style.css";

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  const selectedItem = useSelector((state) => state.selectedItem);
  return (
    <>
      {categories.length > 0 ? (
        <div className="page page-categories">
          <div className="categories-grid">
            {categories.map((category, i) => (
              <CategoryCard key={i} category={category} selectedItem={selectedItem} />
            ))}
          </div>
        </div>
      ) : (
        <div className="page page-categories-empty">
          <div className="empty-section">
            <h2 className="title">Click here to add your first Category : </h2>
            <Link to="/add-category">
              <Tooltip title="Add a Category">
                <Button variant="contained">add a Category</Button>
              </Tooltip>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
