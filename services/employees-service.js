import {baseUrl} from '../configuration/config.js';

export async function getEmployeesList() {
    const response = await fetch(`${baseUrl}/employees`);
    return await response.json();
}
