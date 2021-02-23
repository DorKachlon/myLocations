//Create
export const addCategory = (newCategory) => {
  return { type: "AddCategory", payload: newCategory };
};

//Read
export const fetchCategories = () => {
  return { type: "FetchCategories" };
};

//Update
export const updateCategory = (newUpdateCategory) => {
  return { type: "UpdateCategory", payload: newUpdateCategory };
};

//Delete
export const removeCategory = (newCategory) => {
  return { type: "RemoveCategory", payload: newCategory };
};
