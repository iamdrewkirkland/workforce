// empty array to hold employee data from api
let customers = [];

// function to export the data for other modules
export const useCustomers = () => {
  return customers.slice();
};

// api call to gather the data for use
export const getCustomers = () => {
  return fetch("http://localhost:9000/customers")
    .then((response) => response.json())
    .then((parsedCustomers) => (customers = parsedCustomers));
};
