export function saveCategories(data) {
  localStorage.setItem("myLocation-categories", JSON.stringify({ categories: data }));
}
