import {tableBodyTemplateString} from '../htmls/template-strings/table-body.js';

function getHtml(templateString, data) {
    const compiled = _.template(templateString);
    const html = compiled(data);
    return html;
}

export function getTableBodyHtml(employeesList) {
    return getHtml(tableBodyTemplateString, employeesList);
}
