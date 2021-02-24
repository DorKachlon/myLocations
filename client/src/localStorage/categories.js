export function saveCategories(data) {
  localStorage.setItem("myLocations-categories", JSON.stringify({ categories: data }));
}
