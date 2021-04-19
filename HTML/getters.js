import {modalTemplateString} from './template-strings/modal.js';
import {paginationTemplateString} from './template-strings/pagination.js';
import {tableBodyTemplateString} from './template-strings/table-body.js';
import {tableHeadTemplateString} from './template-strings/table-head.js';

function getHtml(templateString, data) {
    const compiled = _.template(templateString);
    const html = compiled(data);
    return html;
}

export function getModalHtml(type) {
    const modalData = {type};
    const modalHtml = getHtml(modalTemplateString, modalData);
    return modalHtml;
}

export function getPaginationHtml(isPreviousPageItemActive, page, isNextPageItemActive) {
    const paginationData = {isPreviousPageItemActive, page, isNextPageItemActive};
    const paginationHtml = getHtml(paginationTemplateString, paginationData);
    return paginationHtml;
}

export function getTableBodyHtml(employeesList) {
    const tableBodyData = {employeesList};
    const tableBodyHtml = getHtml(tableBodyTemplateString, tableBodyData);
    return tableBodyHtml;
}

export function getTableHeadHtml(sort) {
    const tableHeadData = {sort};
    const tableHeadHtml = getHtml(tableHeadTemplateString, tableHeadData);
    return tableHeadHtml;
}
