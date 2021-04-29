export const topElementsRowTemplateString =
    `
    <th scope="col" class="bg-white border-0"></th>
    
    <th scope="col" class="bg-white border-0 col-2">
      <div class="form-floating">
        <input class="form-control" type="search" id="employeesSearchName" placeholder="Name" aria-label="Name">
        <label for="employeesSearchName" class="fw-normal">Name</label>
      </div>
    </th>
    
    <th scope="col" class="bg-white border-0 col-2">
      <div class="form-floating">
        <input class="form-control" type="search" id="employeesSearchSurname" placeholder="Surname" aria-label="Surname">
        <label for="employeesSearchSurname" class="fw-normal">Surname</label>
      </div>
    </th>
    
    <th scope="col" class="bg-white border-0">
      <button type="button" class="btn btn-outline-success" id="employeesSearchButton">Search</button>
    </th>
    
    <th scope="col" class="bg-white border-0"></th>
    
    <th scope="col" class="bg-white border-0">
    
    <% if (!isUserAuthorized) { %>
    
        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#userAuthorizationForm">Authorize</button>
        
    <% } %>
    
    </th>
    
    <% if (isUserAuthorized) { %>
    
        <th scope="col" class="bg-white border-0">
          <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#employeeCreationForm">Add</button>
        </th>
        
        <th scope="col" class="bg-white border-0"></th>
        
    <% } %>
    `;
