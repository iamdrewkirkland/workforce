import { employeeHtml } from "./Employee.js";
import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "../computers/computerProvider.js";
import { useDepartments } from "../departments/deparmentProvider.js";
import { useLocations } from "../locations/locationProvider.js";
import { useCustomers } from "../customers/customerProvider.js";
import { useEmployeeCustomers } from "../employeeCustomers/employeeCustomerProvider.js";

// query DOM for element where we want to render HTML
const contentTarget = document.querySelector("#container");

// function to render HTML using employee and device as parameters
const render = (employees) => {
  const computers = useComputers();
  const departments = useDepartments();
  const locations = useLocations();
  const customers = useCustomers();
  const employeeCustomers = useEmployeeCustomers();

  // iterate the full list of employees and find the matching device, department, and location IDs.
  contentTarget.innerHTML = employees
    .map((employee) => {
      // find matching deviceId
      const employeeDevice = computers.find(
        (currentDevice) => currentDevice.id === employee.computerId
      );
      // find matching departmentId
      const employeeDepartment = departments.find(
        (currentDepartment) => currentDepartment.id === employee.departmentId
      );
      // find matching locationId
      const employeeLocation = locations.find(
        (currentLocation) => currentLocation.id === employee.locationId
      );
      const relationships = employeeCustomers.filter(
        (employeeCustomer) => employeeCustomer.employeeId === employee.id
      );

      // Find the related customer for each relationship
      const assignedCustomers = relationships.map((rel) => {
        const foundCustomer = customers.find((customer)=> customer.id === rel.customerId);
        return foundCustomer
      });


      return employeeHtml(
        employee,
        employeeDevice,
        employeeDepartment,
        employeeLocation,
        assignedCustomers
      );
    })
    .join("");
};

// passing in full list of employees from db to render function
export const EmployeeList = () => {
  const employees = useEmployees();

  render(employees);
};
