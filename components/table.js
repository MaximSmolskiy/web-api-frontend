import {getEmployeesList} from '../services/employees.js';
import {updateTableBody, getSearchName, getSearchSurname} from '../DOM/table-body.js';
import {updateNavigation} from './navigation.js';

export async function handleTableClick(event) {
    const target = event.target;

    if (target.localName === 'button' && target.innerText === 'Search') {
        const searchName = getSearchName();
        const searchSurname = getSearchSurname();
        sessionStorage.setItem('searchName', searchName);
        sessionStorage.setItem('searchSurname', searchSurname);
        await updateTable();
        await updateNavigation();
    }
}

export async function updateTable(page = 1) {
    const searchName = sessionStorage.getItem('searchName');
    const searchSurname = sessionStorage.getItem('searchSurname');
    const employeesList = await getEmployeesList(page, searchName, searchSurname);
    updateTableBody(employeesList);
}
