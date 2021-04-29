import {baseUrl} from '../config/config.js';
import {renderErrorMessage} from '../views/error-message.js';
import {closeUserAuthorizationForm} from '../views/user-authorization-form.js';
import {updateTopElementsRow} from '../views/top-elements-row.js';
import {updateTableHead} from '../views/table-head.js';
import {updateTableBody} from '../views/table-body.js';

function updateTable(isUserAuthorized) {
    updateTopElementsRow({isUserAuthorized});

    const sort = sessionStorage.getItem('salarySortingOrder');
    updateTableHead({sort, isUserAuthorized});

    const employeesList = JSON.parse(sessionStorage.getItem('employeesList'));
    updateTableBody({employeesList, isUserAuthorized});
}

export async function authorizeUser(user) {
    const response = await fetch(`${baseUrl}/auth`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        const error = await response.json();
        renderErrorMessage(error.message);
    } else {
        closeUserAuthorizationForm();

        const {token} = await response.json();
        sessionStorage.setItem('token', token);

        updateTable(true);
    }
}

export function unauthorizeUser() {
    sessionStorage.removeItem('token');

    updateTable(false);
}
