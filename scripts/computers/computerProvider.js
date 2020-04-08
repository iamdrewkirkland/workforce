// empty array to hold employee data from api
let computers = [];

// function to export the data for other modules
export const useComputers = () => {
  return computers.slice();
};

// api call to gather the data for use
export const getComputers = () => {
  return fetch("http://localhost:9000/computers")
    .then((response) => response.json())
    .then((parsedComputers) => {
      computers = parsedComputers;
    });
};
