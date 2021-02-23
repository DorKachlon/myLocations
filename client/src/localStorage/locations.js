export function saveLocations(data) {
  localStorage.setItem("myLocations-locations", JSON.stringify({ locations: data }));
}
