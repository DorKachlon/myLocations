import { combineReducers } from "redux";
import categoriesReducer from "./categories";

const allReducers = combineReducers({
  categories: categoriesReducer,
});

export default allReducers;
