import {saveEmployee, updateEmployee, deleteEmployee} from '../services/employees.js';
import {getCreateFormValues, getUpdateFormValues} from '../DOM/modal.js';
import {addEventListeners} from '../DOM/modal.js';
import {updateTable} from './table.js';
import {closeCreateForm, closeUpdateForm, closeConfirmDeleteModal} from '../DOM/modal.js';
import {updateNavigation} from './navigation.js';

export async function handleModalClick(event) {
    const target = event.target;
    const modal = target.closest('.modal');
    if (modal.id === 'createEmployee' && target.localName === 'button' && target.innerText === 'Create') {
        const employee = getCreateFormValues();
        const response = await saveEmployee(employee);

        if (!response.ok) {
            const error = await response.json();
            alert(error.message);
            return;
        }

        await updateTable();
        closeCreateForm();
        return;
    }

    if (modal.id === 'updateEmployee' && target.localName === 'button' && target.innerText === 'Update') {
        const employeeId = sessionStorage.getItem('id');
        const employee = getUpdateFormValues();
        const response = await updateEmployee(employeeId, employee);

        if (!response.ok) {
            const error = await response.json();
            alert(error.message);
            return;
        }

        await updateTable();
        closeUpdateForm();
        return;
    }

    if (modal.id === 'confirmDelete' && target.localName === 'button' && target.innerText === 'Yes') {
        const employeeId = sessionStorage.getItem('id');
        const response = await deleteEmployee(employeeId);

        if (!response.ok) {
            const error = await response.json();
            alert(error.message);
            return;
        }

        await updateNavigation();
        await updateTable();
        closeConfirmDeleteModal();
        return;
    }
}

export async function updateModal() {
    addEventListeners();
}
