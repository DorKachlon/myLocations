export function findAndDelete(arr, toDelete) {
  return arr.filter((element) => element.id !== toDelete.id);
}
export function findAndUpdate(arr, toUpdate) {
  return arr.map((element) => {
    if (element.id === toUpdate.id) {
      return toUpdate;
    } else {
      return element;
    }
  });
}
