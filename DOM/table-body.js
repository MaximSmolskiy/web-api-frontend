import {getTableBodyHtml} from '../HTML/getters.js';
import {handleTableClick} from '../components/table.js';

export function getSearchName() {
    return $('#searchName').val();
}

export function getSearchSurname() {
    return $('#searchSurname').val();
}

export function updateTableBody(employeesList) {
    const tableBodyHtml = getTableBodyHtml(employeesList);
    $('tbody').html(tableBodyHtml);

    const table = document.getElementsByClassName('table')[0];
    table.addEventListener('click', handleTableClick);
}
