export const modalTemplateString =
    `
    <div class="modal fade" id=<%- type + "Employee" %> data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby=<%- type + "EmployeeLabel" %> aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header text-center d-block">
            <h5 class="modal-title" id=<%- type + "EmployeeLabel" %>><%- _.capitalize(type) + " employee" %></h5>
            <button type="button" class="btn-close" style="position: absolute; right: 1rem; top: 1.5rem;" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">
            <form>
              <div class="mb-3 form-floating">
                <input class="form-control" type="search" id=<%- type + "Name" %> placeholder="Name" aria-label="Name">
                <label for=<%- type + "Name" %> class="fw-normal">Name</label>
              </div>
              <div class="mb-3 form-floating">
                <input class="form-control" type="search" id=<%- type + "Surname" %> placeholder="Surname" aria-label="Surname">
                <label for=<%- type + "Surname" %> class="fw-normal">Surname</label>
              </div>
              <div class="mb-3 form-floating">
                <input class="form-control" type="date" id=<%- type + "Date" %> placeholder="Date" aria-label="Date">
                <label for=<%- type + "Date" %> class="fw-normal">Date</label>
              </div>
              <div class="mb-3 form-floating">
                <select class="form-select form-select-sm" type="search" id=<%- type + "Position" %> placeholder="Position" aria-label="Position">
                  <option selected disabled>Choose position</option>
                  <option>Junior Software Engineer</option>
                  <option>Software Engineer</option>
                  <option>Senior Software Engineer</option>
                  <option>Lead Software Engineer</option>
                </select>
                <label for=<%- type + "Position" %> class="fw-normal">Position</label>
              </div>
              <div class="mb-3 form-floating">
                <input class="form-control" type="search" id=<%- type + "Salary" %> placeholder="Salary" aria-label="Salary">
                <label for=<%- type + "Salary" %> class="fw-normal">Salary</label>
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <div class="col text-center">
              <button type="button" class="btn btn-outline-primary"><%- _.capitalize(type) %></button>
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;