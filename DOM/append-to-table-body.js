import {tableBodyTemplate} from './templates/table-body-template.js';

export function appendToTableBody(employeesList) {
    $('tbody').append(tableBodyTemplate({employeesList}));
}
