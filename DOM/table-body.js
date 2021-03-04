import {getTableBodyHtml} from '../htmls/getters.js';

export function updateTableBody(employeesList) {
    const tableBodyHtml = getTableBodyHtml(employeesList);
    $('tbody').html(tableBodyHtml);
}
