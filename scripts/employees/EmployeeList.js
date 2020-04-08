import { employeeHtml } from "./Employee.js";
import { useEmployees } from "./employeeProvider.js";
import { useComputers } from "../computers/computerProvider.js";
import { useDepartments } from "../departments/deparmentProvider.js";
import { useLocations } from "../locations/locationProvider.js";


// query DOM for element where we want to render HTML
const contentTarget = document.querySelector("#container");

// function to render HTML using employee and device as parameters
const render = (employees) => {
  const computers = useComputers();
  const departments = useDepartments();
  const locations = useLocations();

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
      const employeeLocation = locations.find (
        (currentLocation) => currentLocation.id === employee.locationId
      );

      return employeeHtml(employee, employeeDevice, employeeDepartment, employeeLocation);
    })
    .join("");
};

// passing in full list of employees from db to render function
export const EmployeeList = () => {
  const employees = useEmployees();

  render(employees);
};
