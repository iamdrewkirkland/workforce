// export a function to represent the employee and device as HTML
export const employeeHtml = (
  employee,
  computer,
  department,
  location,
  customers
) => {
  return `
        <section class="employeePreview">
            <div class="employeePreview__bio">
                <h3>${employee.firstName} ${employee.lastName} (${employee.age})</h3> 
            </div>
            <div class="employeePreview__device">
                <p>${computer.model} - ${computer.year}</p>
            </div>
            <div class="employeePreview__location">
                <p>${location.name} Office</p>
            </div>
            <div class="employeePreview__department">
                <p class="italic">${department.name}</p>
            </div>
            <div class="employeePreview__customers">
                <ul>
                <lh>Customer Accounts</lh>
                ${customers.map((customer) => {
                  return `<li>${customer.name}</li>`
                }).join("")}
                </ul>
            </div>
        </section>
    `;
};
