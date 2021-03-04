export const tableBodyTemplateString =
    `
    <% employeesList.forEach(employee => { %>
        <tr>
          <td><%- employee.id %></td>
          <td><%- employee.name %></td>
          <td><%- employee.surname %></td>
          <td><%- employee.date %></td>
          <td><%- employee.position %></td>
          <td><%- employee.salary %></td>
          <td>
            <button type="button" class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#confirmDelete">Delete</button>
          </td>
        </tr>
    <% }); %>
    `;
