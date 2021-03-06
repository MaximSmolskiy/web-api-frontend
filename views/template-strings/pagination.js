export const paginationTemplateString =
    `
    <% if (isPreviousPageAvailable) { %>
    
        <li class="page-item" id="previousPage">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        
    <% } else { %>
    
        <li class="page-item disabled">
          <span class="page-link">
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>
        
    <% } %>
    
    <li class="page-item disabled" aria-current="page">
      <span class="page-link bg-primary text-white" id="pageNumber"> <%- page %> </span>
    </li>
    
    <% if (isNextPageAvailable) { %>
    
        <li class="page-item" id="nextPage">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
        
    <% } else { %>
    
        <li class="page-item disabled">
          <span class="page-link">
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>
        
    <% } %>
    `;
