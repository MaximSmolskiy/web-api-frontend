import {baseUrl} from '../configuration/config.js';

export async function getEmployeesList(page, name, surname) {
    let url = `${baseUrl}/employees?page=${page}`;

    if (name) {
        url += `&name=${name}`;
    }

    if (surname) {
        url += `&surname=${surname}`
    }

    const response = await fetch(url);

    if (!response.ok) {
        return;
    }

    const employeesList = await response.json();
    return employeesList;
}
