import {getEmployeesList} from '../services/employees.js';
import {updateTableBody, getSearchFormValues} from '../DOM/table-body.js';
import {updateNavigation} from './navigation.js';

export async function handleTableClick(event) {
    const target = event.target;

    if (target.localName === 'button' && target.innerText === 'Search') {
        const {name, surname} = getSearchFormValues();
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('surname', surname);
        await updateTable();
        await updateNavigation();
    }
}

export async function updateTable(page = 1) {
    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    const employeesList = await getEmployeesList({page, name, surname});
    updateTableBody(employeesList);
}
