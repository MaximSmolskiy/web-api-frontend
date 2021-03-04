import {baseUrl} from '../configuration/config.js';

export async function getEmployeesList() {
    const response = await fetch(`${baseUrl}/employees`);
    const employeesList = await response.json();
    return {employeesList};
}
