import { saveLocations } from "../localStorage/locations";
import { findAndDelete, findAndUpdate } from "./helperFunctions";

const locationsReducer = (state = [], action) => {
  switch (action.type) {
    //Create
    case "AddLocation": {
      state.push(action.payload);
      saveLocations(state);
      return state;
    }

    //Read
    case "FetchLocation": {
      const locationsFromLocalStorage = localStorage.getItem("myLocations-locations");
      return locationsFromLocalStorage;
    }

    //Update
    case "UpdateLocation": {
      const newList = findAndUpdate(state, action.payload);
      saveLocations(newList);
      return newList;
    }

    //Delete
    case "RemoveLocation": {
      const newList = findAndDelete(state, action.payload);
      saveLocations(newList);
      return newList;
    }

    default:
      return state;
  }
};

export default locationsReducer;
