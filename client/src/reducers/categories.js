import { saveCategories } from "../localStorage/categories";
import { findAndDelete, findAndUpdate } from "./helperFunctions";

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    //Create
    case "AddCategory": {
      state.push(action.payload);
      saveCategories(state);
      return state;
    }

    //Read
    case "FetchCategories": {
      const categoriesFromLocalStorage = localStorage.getItem("myLocations-categories");
      if (categoriesFromLocalStorage) {
        return JSON.parse(categoriesFromLocalStorage).categories;
      }
    }

    //Update
    case "UpdateCategory": {
      const newList = findAndUpdate(state, action.payload);
      saveCategories(newList);
      return newList;
    }

    //Delete
    case "RemoveCategory": {
      const newList = findAndDelete(state, action.payload);
      saveCategories(newList);
      return newList;
    }

    default:
      return state;
  }
};

export default categoriesReducer;
