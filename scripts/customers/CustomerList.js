
import { useEmployees } from "./employeeProvider.js";
import { useCustomers } from "../customers/customerProvider.js";
import { useEmployeeCustomers } from "../employeeCustomers/employeeCustomerProvider.js";
import { customerHtml } from "./Customer.js";

// query DOM for element where we want to render HTML
const contentTarget = document.querySelector("#container");

// function to render HTML using employee and device as parameters
const render = (customers) => {
  const employees = useEmployees();
  const employeeCustomers = useEmployeeCustomers();

  // iterate the full list of customer employees and find the matching employees
  contentTarget.innerHTML = customers
    .map((customer) => {
      const relationships = employeeCustomers.filter(
        (employeeCustomer) => employeeCustomer.customerId === customer.id
      );

      // Find the related employee for each relationship
      const assignedEmployees = relationships.map((rel) => {
        const foundEmployee = employees.find(
          (employee) => employee.id === rel.employeeId
        );
        return foundEmployee;
      });

      return customerHtml(customer, assignedEmployees);
    })
    .join("");
};

// passing in full list of employees from db to render function
export const CustomerList = () => {
  const customers = useCustomers();

  render(customers);
};
