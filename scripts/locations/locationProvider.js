// empty array to hold location data from api
let locations = [];

// function to export the data for other modules
export const useLocations = () => {
  return locations.slice();
};

// api call to gather the data for use
export const getLocations = () => {
  return fetch("http://localhost:9000/locations")
    .then((response) => response.json())
    .then((parsedLocations) => (locations = parsedLocations));
};
