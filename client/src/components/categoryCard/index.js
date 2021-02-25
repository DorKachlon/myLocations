import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../actions/selectedItem";
import "./style.css";
import moment from "moment";

export default function CategoryCard({ category, selectedItemBool }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSelectedItem({ ...category, type: "category" }));
  };

  return (
    <>
      <div
        className={selectedItemBool ? "card-selected card-category" : "card card-category"}
        onClick={clickHandler}
      >
        {category.name}
      </div>
    </>
  );
}
