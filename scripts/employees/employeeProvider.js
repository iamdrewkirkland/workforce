// empty array to hold employee data from api
let employees = [];

// function to export the data for other modules
export const useEmployees = () => {
  return employees.slice();
};

// api call to gather the data for use
export const getEmployees = () => {
  return fetch("http://localhost:9000/employees")
    .then((response) => response.json())
    .then((parsedEmployees) => (employees = parsedEmployees));
};
