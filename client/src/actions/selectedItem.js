export const setSelectedItem = (item) => {
  return { type: "SetSelectedItem", payload: item };
};
export const resetSelectedItem = () => {
  return { type: "ResetSelectedItem" };
};
