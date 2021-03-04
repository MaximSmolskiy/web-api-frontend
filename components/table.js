import {getEmployeesList} from '../services/employees.js';
import {updateTableBody} from '../DOM/table-body.js';

export async function updateTable() {
    const employeesList = await getEmployeesList();
    updateTableBody(employeesList);
}
