import {getEmployeesList} from '../services/employees.js';
import {updateTableBody} from '../DOM/table.js';
import {getPageNumber} from '../DOM/pagination.js';
import {updateTableHead} from '../DOM/table.js';

export async function updateTable(page = getPageNumber()) {
    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    const sort = sessionStorage.getItem('sort');
    const {pagesNumber, employeesList} = await getEmployeesList({page, name, surname, sort});
    sessionStorage.setItem('pagesNumber', pagesNumber);
    updateTableHead(sort);
    updateTableBody(employeesList);
}
