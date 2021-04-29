export function getHtml(templateString, data) {
    const compiled = _.template(templateString);
    return compiled(data);
}
