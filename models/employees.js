import {baseUrl} from '../config/config.js';
import {updateTableHead} from '../views/table-head.js';
import {updateTableBody} from '../views/table-body.js';
import {updatePagination} from '../views/pagination.js';
import {closeEmployeeCreationForm} from '../views/employee-creation-form.js';
import {unauthorizeUser} from './authorization.js';
import {renderErrorMessage} from '../views/error-message.js';
import {closeEmployeeUpdateForm} from '../views/employee-update-form.js';
import {closeEmployeeDeletionModal} from '../views/employee-deletion-modal.js';

export async function updateEmployeesList(data = {}) {
    for (const [key, value] of Object.entries(data)) {
        sessionStorage.setItem(key, value);
    }

    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    const sort = sessionStorage.getItem('sort');
    const page = Math.max(Number(sessionStorage.getItem('page')), 1);

    sessionStorage.setItem('page', page);

    const url = new URL(`${baseUrl}/employees`);
    url.search = new URLSearchParams(_.pickBy({name, surname, sort, page})).toString();

    const response = await fetch(url);
    const {pagesNumber, employeesList} = await response.json();

    sessionStorage.setItem('pagesNumber', pagesNumber);
    sessionStorage.setItem('employeesList', JSON.stringify(employeesList));

    const token = sessionStorage.getItem('token');
    const isUserAuthorized = token !== null;
    updateTableHead({sort, isUserAuthorized});

    updateTableBody({employeesList, isUserAuthorized});

    const isPreviousPageAvailable = page > 1;
    const isNextPageAvailable = page < pagesNumber;
    updatePagination({isPreviousPageAvailable, page, isNextPageAvailable});
}

export async function saveEmployee(employee) {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${baseUrl}/employees`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(employee)
    });

    if (!response.ok) {
        if (response.status === 401) {
            closeEmployeeCreationForm();
            unauthorizeUser();
        }

        const error = await response.json();
        renderErrorMessage(error.message);
    } else {
        closeEmployeeCreationForm();
        await updateEmployeesList();
    }
}

export async function updateEmployee(employeeId, employee) {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${baseUrl}/employees/${employeeId}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify(employee)
    });

    if (!response.ok) {
        if (response.status === 401) {
            closeEmployeeUpdateForm();
            unauthorizeUser();
        }

        const error = await response.json();
        renderErrorMessage(error.message);
    } else {
        closeEmployeeUpdateForm();
        await updateEmployeesList();
    }
}

export async function deleteEmployee(employeeId) {
    const token = sessionStorage.getItem('token');
    const response = await fetch(`${baseUrl}/employees/${employeeId}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${token}`}
    });

    closeEmployeeDeletionModal();

    if (!response.ok) {
        unauthorizeUser();

        const error = await response.json();
        renderErrorMessage(error.message);
    } else {
        let page = Number(sessionStorage.getItem('page'));
        const pagesNumber = Number(sessionStorage.getItem('pagesNumber'));
        const employeesList = JSON.parse(sessionStorage.getItem('employeesList'));

        if (page === pagesNumber && employeesList.length === 1) {
            --page;
        }

        await updateEmployeesList({page});
    }
}
