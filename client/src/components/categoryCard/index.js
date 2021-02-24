import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../../actions/selectedItem";
import "./style.css";

export default function CategoryCard({ category, selectedItemBool }) {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setSelectedItem({ ...category, type: "category" }));
  };

  return (
    <>
      <div className={selectedItemBool ? "card-selected" : "card"} onClick={clickHandler}>
        {category.name}
      </div>
    </>
  );
}
