import {tableBodyTemplate} from './templates/table-body-template.js';

export function updateTableBody(employeesList) {
    $('tbody').html(tableBodyTemplate({employeesList}));
}
