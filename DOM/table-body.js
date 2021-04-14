import {getTableBodyHtml} from '../HTML/getters.js';
import {handleTableClick} from '../components/table.js';

export function getSearchFormValues() {
    const name = $('#searchName').val();
    const surname = $('#searchSurname').val();
    return {name, surname};
}

export function updateTableBody(employeesList) {
    const tableBodyHtml = getTableBodyHtml(employeesList);
    $('tbody').html(tableBodyHtml);

    const table = document.getElementsByClassName('table')[0];
    table.addEventListener('click', handleTableClick);
}
