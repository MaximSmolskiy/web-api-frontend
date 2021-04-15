import {fillUpdateFormValues} from './modal.js';
import {updateNavigation} from '../components/navigation.js';
import {updateTable} from '../components/table.js';
import {getTableBodyHtml, getTableHeadHtml} from '../HTML/getters.js';

async function handleTableClick(event) {
    const target = event.target;

    if (target.closest('.bi-caret-down-fill')) {
        sessionStorage.setItem('sort', 'asc');
        await updateTable();
    }

    if (target.closest('.bi-caret-up-fill')) {
        sessionStorage.setItem('sort', 'desc');
        await updateTable();
    }

    if (target.localName === 'button' && target.innerText === 'Update') {
        const employeeRow = Object.values(target.closest('tr').children).map(td => td.innerText);
        sessionStorage.setItem('id', employeeRow[0]);
        fillUpdateFormValues(employeeRow);
    }

    if (target.localName === 'button' && target.innerText === 'Delete') {
        const employeeRow = Object.values(target.closest('tr').children).map(td => td.innerText);
        sessionStorage.setItem('id', employeeRow[0]);
    }

    if (target.localName === 'button' && target.innerText === 'Search') {
        const {name, surname} = getSearchFormValues();
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('surname', surname);
        await updateNavigation(1);
        await updateTable(1);
    }
}

export function getSearchFormValues() {
    const name = $('#searchName').val();
    const surname = $('#searchSurname').val();
    return {name, surname};
}

export function updateTableHead(sort) {
    const tableHeadHtml = getTableHeadHtml(sort);
    $('#tableHead').html(tableHeadHtml);
}

export function updateTableBody(employeesList) {
    const tableBodyHtml = getTableBodyHtml(employeesList);
    $('tbody').html(tableBodyHtml);

    const table = document.getElementsByClassName('table')[0];
    table.addEventListener('click', handleTableClick);
}
