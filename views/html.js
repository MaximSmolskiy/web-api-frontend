export function getHtml(templateString, data) {
    const compiled = _.template(templateString);
    const html = compiled(data);
    return html;
}
