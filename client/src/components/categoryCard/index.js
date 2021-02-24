import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../actions/selectedItem";
import "./style.css";

export default function CategoryCard({ category, selectedItem }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSelectedItem(category));
  };

  return (
    <>
      <div
        className={selectedItem[0]?.id === category.id ? "category-card-selected" : "category-card"}
        onClick={clickHandler}
      >
        {category.name}
      </div>
    </>
  );
}
