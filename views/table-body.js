import {getHtml} from './html.js';
import {tableBodyTemplateString} from './template-strings/table-body.js';
import {fillEmployeeUpdateForm} from './employee-update-form.js';
import {fillEmployeeDeletionModal} from './employee-deletion-modal.js';

export function updateTableBody(tableBodyData) {
    const tableBodyHtml = getHtml(tableBodyTemplateString, tableBodyData);
    $('#tableBody').html(tableBodyHtml);
}

function getEmployeeRow(event) {
    return Object.values(event.target.closest('tr').children).map(td => td.innerText);
}

async function clickHandler(event) {
    if (event.target.localName === 'button' && event.target.innerText === 'Update') {
        const employeeRow = getEmployeeRow(event);

        const id = employeeRow[0];
        const name = employeeRow[1];
        const surname = employeeRow[2];
        const date = employeeRow[3];
        const position = employeeRow[4];
        const salary = employeeRow[5];

        fillEmployeeUpdateForm({id, name, surname, date, position, salary});
    }

    if (event.target.localName === 'button' && event.target.innerText === 'Delete') {
        const employeeRow = getEmployeeRow(event);
        const employeeId = employeeRow[0];
        fillEmployeeDeletionModal(employeeId);
    }
}

export function createTableBody(tableBodyData) {
    document.getElementById('tableBody').addEventListener('click', clickHandler);
    updateTableBody(tableBodyData);
}
