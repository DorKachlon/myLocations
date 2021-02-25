import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import CategoryCard from "../../components/categoryCard";
import { resetSelectedItem } from "../../actions/selectedItem";
import "./style.css";

export default function Categories() {
  const categories = useSelector((state) => state.categories);
  const selectedItem = useSelector((state) => state.selectedItem);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetSelectedItem());
    };
  }, []);

  return (
    <>
      {categories.length > 0 ? (
        <div className="page page-categories">
          <div className="categories-grid">
            {categories.map((category, i) => (
              <CategoryCard
                key={i}
                category={category}
                selectedItemBool={selectedItem[0]?.id === category.id}
              />
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
