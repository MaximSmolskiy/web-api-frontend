export const tableBodyTemplateString =
    `
    <% for (const employee of employeesList) { %>
        <tr>
        
          <td><%- employee.id %></td>
          
          <td><%- employee.name %></td>
          
          <td><%- employee.surname %></td>
          
          <td><%- employee.date %></td>
          
          <td><%- employee.position %></td>
          
          <td><%- employee.salary %></td>
          
          <% if (isUserAuthorized) { %>
          
              <td>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#employeeUpdateForm">Update</button>
              </td>
              
              <td>
                <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#employeeDeletionModal">Delete</button>
              </td>
              
          <% } %>
          
        </tr>
        
    <% } %>
    `;
