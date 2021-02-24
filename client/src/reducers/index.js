import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import locationsReducer from "./locations";
import selectedItemReducer from "./selectedItem";

const allReducers = combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
  selectedItem: selectedItemReducer,
});

export default allReducers;
