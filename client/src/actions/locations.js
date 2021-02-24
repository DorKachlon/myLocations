//Create
export const addLocation = (newLocation) => {
  return { type: "AddLocation", payload: newLocation };
};

//Read
export const fetchLocations = () => {
  return { type: "FetchLocation" };
};

//Update
export const updateLocation = (newUpdateLocation) => {
  return { type: "UpdateLocation", payload: newUpdateLocation };
};

//Delete
export const removeLocation = (newLocation) => {
  return { type: "RemoveLocation", payload: newLocation };
};
