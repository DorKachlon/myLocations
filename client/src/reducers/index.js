import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import locationsReducer from "./locations";

const allReducers = combineReducers({
  categories: categoriesReducer,
  locations: locationsReducer,
});

export default allReducers;
