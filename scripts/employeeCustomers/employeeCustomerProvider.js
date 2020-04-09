// empty array to hold employee data from api
let employeeCustomers = [];

// function to export the data for other modules
export const useEmployeeCustomers = () => {
  return employeeCustomers.slice();
};

// api call to gather the data for use
export const getEmployeeCustomers = () => {
  return fetch("http://localhost:9000/employeeCustomers")
    .then((response) => response.json())
    .then((parsedEmployeeCustomers) => (employeeCustomers = parsedEmployeeCustomers));
};
