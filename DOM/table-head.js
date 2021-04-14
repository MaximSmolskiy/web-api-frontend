import {getTableHeadHtml} from '../HTML/getters.js';

export function getSearchFormValues() {
    const name = $('#searchName').val();
    const surname = $('#searchSurname').val();
    return {name, surname};
}

export function updateTableHead(sort) {
    const tableHeadHtml = getTableHeadHtml(sort);
    $('#tableHead').html(tableHeadHtml);
}
