import {getEmployeesList} from '../services/employees.js';
import {updateTableBody, getSearchNameValue, getSearchSurnameValue} from '../DOM/table-body.js';
import {updateNavigation} from './navigation.js';

export async function handleTableClick(event) {
    const target = event.target;

    if (target.localName === 'button' && target.innerText === 'Search') {
        const searchName = getSearchNameValue();
        const searchSurname = getSearchSurnameValue();
        sessionStorage.setItem('searchName', searchName);
        sessionStorage.setItem('searchSurname', searchSurname);
        await updateTable();
        await updateNavigation();
    }
}

export async function updateTable(page = 1) {
    const name = sessionStorage.getItem('searchName');
    const surname = sessionStorage.getItem('searchSurname');
    const employeesList = await getEmployeesList({page, name, surname});
    updateTableBody(employeesList);
}
