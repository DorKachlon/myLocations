import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import "./style.css";
export default function Categories() {
  const categories = useSelector((state) => state.categories);
  console.log(categories);
  return (
    <>
      <div className="page page-categories">
        {categories.length > 0 ? (
          categories.map((category) => <div>{category.name}</div>)
        ) : (
          <div className="empty-section">
            <h2 className="title">Click here to add your first Category : </h2>
            <Link to="/add-category">
              <Tooltip title="Add a Category">
                <Button variant="contained">add a Category</Button>
              </Tooltip>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
