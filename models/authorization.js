import {baseUrl} from '../config/config.js';
import {updateTopElementsRow} from '../views/top-elements-row.js';
import {updateTableHead} from '../views/table-head.js';
import {updateTableBody} from '../views/table-body.js';
import {closeUserAuthorizationForm} from '../views/user-authorization-form.js';
import {renderErrorMessage} from '../views/error-message.js';

export async function authorizeUser(user) {
    const response = await fetch(`${baseUrl}/auth`, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(user)});
    if (!response.ok) {
        const error = await response.json();
        renderErrorMessage(error.message);
    } else {
        const {token} = await response.json();
        sessionStorage.setItem('token', token);
        const isUserAuthorized = true;
        updateTopElementsRow({isUserAuthorized});
        const sort = sessionStorage.getItem('sort');
        updateTableHead({sort, isUserAuthorized});
        const employeesList = JSON.parse(sessionStorage.getItem('employeesList'));
        updateTableBody({employeesList, isUserAuthorized});
        closeUserAuthorizationForm();
    }
}

export function unauthorizeUser() {
    sessionStorage.removeItem('token');
    const isUserAuthorized = false;
    updateTopElementsRow({isUserAuthorized});
    const sort = sessionStorage.getItem('sort');
    updateTableHead({sort, isUserAuthorized});
    const employeesList = JSON.parse(sessionStorage.getItem('employeesList'));
    updateTableBody({employeesList, isUserAuthorized});
}
