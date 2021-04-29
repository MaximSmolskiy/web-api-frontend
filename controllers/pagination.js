import {getPageNumber} from '../views/pagination.js';
import {updateEmployeesList} from '../models/employees.js';

export async function showPreviousPage() {
    const page = getPageNumber() - 1;
    await updateEmployeesList({page});
}

export async function showNextPage() {
    const page = getPageNumber() + 1;
    await updateEmployeesList({page});
}
