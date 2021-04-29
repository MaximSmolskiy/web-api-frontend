import {createTopElementsRow} from '../views/top-elements-row.js';
import {createTableHead} from '../views/table-head.js';
import {updateEmployeesList} from './employees.js';
import {createTableBody} from '../views/table-body.js';
import {createPagination} from '../views/pagination.js';
import {createUserAuthorizationForm} from '../views/user-authorization-form.js';
import {createEmployeeCreationForm} from '../views/employee-creation-form.js';
import {createEmployeeUpdateForm} from '../views/employee-update-form.js';
import {createEmployeeDeletionModal} from '../views/employee-deletion-modal.js';

export async function createModel() {
    const isUserAuthorized = false;
    createTopElementsRow({isUserAuthorized});

    const sort = 'asc';
    createTableHead({sort, isUserAuthorized});

    const page = 1;
    await updateEmployeesList({sort, page});
    const employeesList = JSON.parse(sessionStorage.getItem('employeesList'));
    createTableBody({employeesList, isUserAuthorized});

    const pagesNumber = Number(sessionStorage.getItem('pagesNumber'));
    const isPreviousPageAvailable = page > 1;
    const isNextPageAvailable = page < pagesNumber;
    createPagination({isPreviousPageAvailable, page, isNextPageAvailable});

    createUserAuthorizationForm();
    createEmployeeCreationForm();
    createEmployeeUpdateForm();
    createEmployeeDeletionModal();
}
