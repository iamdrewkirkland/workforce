import { getEmployees } from "./employees/employeeProvider.js";
import { getComputers } from "./computers/computerProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./departments/deparmentProvider.js";
import { getLocations } from "./locations/locationProvider.js";
import { getCustomers } from "./customers/customerProvider.js";
import { getEmployeeCustomers } from "./employeeCustomers/employeeCustomerProvider.js";
import { CustomerList } from "./customers/CustomerList.js";


getEmployees()
    .then(getComputers)
    .then(getLocations)
    .then(getDepartments)
    .then(getCustomers)
    .then(getEmployeeCustomers)
    .then(EmployeeList)
    .then(CustomerList)
