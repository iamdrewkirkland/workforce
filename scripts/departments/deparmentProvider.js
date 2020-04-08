// empty array to hold employee data from api
let departments = [];

// function to export the data for other modules
export const useDepartments = () => {
  return departments.slice();
};

// api call to gather the data for use
export const getDepartments = () => {
  return fetch("http://localhost:9000/departments")
    .then((response) => response.json())
    .then((parsedDepartments) => (departments = parsedDepartments));
};
