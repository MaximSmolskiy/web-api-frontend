import {getEmployeesList} from '../services/employees.js';
import {updateTableBody} from '../DOM/table-body.js';
import {updateNavigation} from './navigation.js';
import {getPageNumber} from '../DOM/pagination.js';
import {updateTableHead, getSearchFormValues} from '../DOM/table-head.js';

export async function handleTableClick(event) {
    const target = event.target;
    if (target.closest('.bi-caret-down-fill')) {
        sessionStorage.setItem('sort', 'asc');
        await updateTable();
    }

    if (target.closest('.bi-caret-up-fill')) {
        sessionStorage.setItem('sort', 'desc');
        await updateTable();
    }

    if (target.localName === 'button' && target.innerText === 'Search') {
        const {name, surname} = getSearchFormValues();
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('surname', surname);
        await updateTable(1);
        await updateNavigation(1);
    }
}

export async function updateTable(page = getPageNumber()) {
    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    const sort = sessionStorage.getItem('sort');
    const employeesList = await getEmployeesList({page, name, surname, sort});
    updateTableHead(sort);
    updateTableBody(employeesList);
}
