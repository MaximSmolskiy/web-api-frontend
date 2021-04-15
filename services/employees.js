import {baseUrl} from '../configuration/config.js';

function getUrl(baseUrl, queryParams) {
    const nonEmptyQueryParams = Object.fromEntries(Object.entries(queryParams).filter(([_, value]) => value));
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

export async function saveEmployee(employee) {
    const response = await fetch(`${baseUrl}/employees`,
        {method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(employee)});
    return response;
}

export async function updateEmployee(employeeId, employee) {
    const response = await fetch(`${baseUrl}/employees/${employeeId}`,
        {method: 'PUT',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify(employee)});
    return response;
}

export async function deleteEmployee(employeeId) {
    const response = await fetch(`${baseUrl}/employees/${employeeId}`, {method: 'DELETE'});
    return response;
}
