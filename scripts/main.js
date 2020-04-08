import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/deparmentProvider.js";
import { getLocations } from "./locations/locationProvider.js";

getEmployees()
    .then(getComputers)
    .then(getLocations)
    .then(getDepartments)
    .then(EmployeeList)
