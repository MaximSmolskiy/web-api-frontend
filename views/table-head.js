import {getHtml} from './html.js';
import {tableHeadTemplateString} from './template-strings/table-head.js';
import {sortEmployees} from '../controllers/employees.js';

export function getSalarySortingOrder() {
    const sort = $('#salarySorting').attr('order');
    return {sort};
}

export function updateTableHead(tableHeadData) {
    const tableHeadHtml = getHtml(tableHeadTemplateString, tableHeadData);
    $('#tableHead').html(tableHeadHtml);
}

async function clickHandler(event) {
    if (event.target.closest('#salarySorting')) {
        await sortEmployees();
    }
}

export function createTableHead(tableHeadData) {
    document.getElementById('tableHead').addEventListener('click', clickHandler);
    updateTableHead(tableHeadData);
}
