import {updateEmployeesList, saveEmployee, updateEmployee, deleteEmployee} from '../models/employees.js';
import {getEmployeesSearchValues} from '../views/top-elements-row.js';
import {getSalarySortingOrder} from '../views/table-head.js';
import {getEmployeeCreationFormValues} from '../views/employee-creation-form.js';
import {getUpdatedEmployeeId, getEmployeeUpdateFormValues} from '../views/employee-update-form.js';
import {getDeletedEmployeeId} from '../views/employee-deletion-modal.js';

export async function searchEmployees() {
    const page = 1;
    await updateEmployeesList({...getEmployeesSearchValues(), page});
}

export async function sortEmployees() {
    await updateEmployeesList(getSalarySortingOrder());
}

export async function processEmployeeCreation() {
    await saveEmployee(getEmployeeCreationFormValues());
}

export async function processEmployeeUpdate() {
    await updateEmployee(getUpdatedEmployeeId(), getEmployeeUpdateFormValues());
}

export async function processEmployeeDeletion() {
    await deleteEmployee(getDeletedEmployeeId());
}
