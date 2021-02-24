import React, { useState } from "react";
import "./style.css";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { addCategory } from "../../actions/categories";
import { useHistory } from "react-router-dom";
import categoryValidation from "../../validation/category";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const submitHandler = async (event) => {
    event.preventDefault();
    const newCategory = { id: Date.now().toString(), name };
    try {
      await categoryValidation(newCategory);
      dispatch(addCategory(newCategory));
      history.push("/categories");
    } catch (error) {
      setError(error.errors[0].split(",")[0]);
    }
  };

  return (
    <>
      <div className="page page-add-category">
        <form className="add-category-form" onSubmit={(e) => submitHandler(e)}>
          <h2 className="title">Here you can add a new Category</h2>
          <input
            className="common-input"
            value={name}
            placeholder="Enter a new Category"
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <Button variant="contained" type="submit">
            Add category
          </Button>
          {error && (
            <div className="error-message">
              <ErrorOutlineOutlinedIcon style={{ color: "white" }} />
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>
    </>
  );
}
