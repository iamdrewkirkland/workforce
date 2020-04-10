// export a function to represent the employee and device as HTML
export const customerHtml = (customer, assignedEmployees) => {
  return `
          <section class="customerPreview">
              <div class="customerPreview__bio">
                  <h3>${customer.name}</h3> 
              </div>
              <div class="customerPreview__employees">
                  ${assignedEmployees
                    .map((employee) => {
                      return `<p>${employee.firstName} ${employee.lastName}</p>`;
                    })
                    .join("")}
                  
              </div>
          </section>
      `;
};
