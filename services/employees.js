import {baseUrl} from '../configuration/config.js';

export async function getEmployeesList(queryParams) {
    const nonEmptyQueryParams = Object.fromEntries(Object.entries(queryParams).filter(([_, value]) => value));

    let url = new URL(`${baseUrl}/employees`);
    Object.entries(nonEmptyQueryParams).forEach(([name, value]) => url.searchParams.append(name, value));

    const response = await fetch(url);

    if (!response.ok) {
        return;
    }

    const employeesList = await response.json();
    return employeesList;
}
