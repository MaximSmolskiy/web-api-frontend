import {baseUrl} from '../configuration/config.js';

function getUrl(baseUrl, queryParams) {
    const nonEmptyQueryParams = Object.fromEntries(Object.entries(queryParams).filter(([_, value]) => value != null));
    let url = new URL(baseUrl);
    Object.entries(nonEmptyQueryParams).forEach(([name, value]) => url.searchParams.append(name, value));
    return url;
}

export async function getEmployeesList(queryParams) {
    const url = getUrl(`${baseUrl}/employees`, queryParams);
    const response = await fetch(url);

    if (!response.ok) {
        return;
    }

    const employeesList = await response.json();
    return employeesList;
}
