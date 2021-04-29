import {updateEmployee, updateEmployeesList, saveEmployee, deleteEmployee} from '../models/employees.js';
import {getEmployeesSearchValues} from '../views/top-elements-row.js';
import {getSalarySortingOrder} from '../views/table-head.js';
import {getUpdatedEmployeeId, getEmployeeUpdateFormValues} from '../views/employee-update-form.js';
import {getEmployeeCreationFormValues} from '../views/employee-creation-form.js';
import {getDeletedEmployeeId} from '../views/employee-deletion-modal.js';

export async function searchEmployees() {
    const page = 1;
    await updateEmployeesList({...getEmployeesSearchValues(), page});
}

export async function sortEmployees() {
    await updateEmployeesList(getSalarySortingOrder());
}

export async function showCreatedEmployee() {
    await saveEmployee(getEmployeeCreationFormValues());
}

export async function showUpdatedEmployee() {
    await updateEmployee(getUpdatedEmployeeId(), getEmployeeUpdateFormValues());
}

export async function showDeletedEmployee() {
    await deleteEmployee(getDeletedEmployeeId());
}
