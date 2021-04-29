import {getHtml} from './html.js';
import {topElementsRowTemplateString} from './template-strings/top-elements-row.js';
import {searchEmployees} from '../controllers/employees.js';

export function getEmployeesSearchValues() {
    const name = $('#employeesSearchName').val();
    const surname = $('#employeesSearchSurname').val();
    return {name, surname};
}

export function updateTopElementsRow(topElementsRowData) {
    const topElementsRowHtml = getHtml(topElementsRowTemplateString, topElementsRowData);
    $('#topElementsRow').html(topElementsRowHtml);
}

async function clickHandler(event) {
    if (event.target.closest('#employeesSearchButton')) {
        await searchEmployees();
    }
}

export function createTopElementsRow(topElementsRowData) {
    document.getElementById('topElementsRow').addEventListener('click', clickHandler);
    updateTopElementsRow(topElementsRowData);
}
