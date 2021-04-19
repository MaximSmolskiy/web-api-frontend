import {deleteEmployee, saveEmployee, updateEmployee} from '../services/employees.js';
import {updateTable} from '../components/table.js';
import {updateNavigation} from '../components/navigation.js';
import {getModalHtml} from '../HTML/getters.js';

export function updateModals() {
    const createModalHtml = getModalHtml('create');
    $('#createEmployeeModal').html(createModalHtml);
    const updateModalHtml = getModalHtml('update');
    $('#updateEmployeeModal').html(updateModalHtml);
}

async function handleModalClick(event) {
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

export function getCreateFormValues() {
    const name = $('#createName').val();
    const surname = $('#createSurname').val();
    const date = $('#createDate').val().split('-').reverse().join('.');
    const position = $('#createPosition').val();
    const salary = Number($('#createSalary').val());
    return {name, surname, date, position, salary};
}

export function fillUpdateFormValues(employeeRow) {
    $('#updateName').val(employeeRow[1]);
    $('#updateSurname').val(employeeRow[2]);
    $('#updateDate').val(employeeRow[3].split('.').reverse().join('-'));
    $('#updatePosition').val(employeeRow[4]);
    $('#updateSalary').val(employeeRow[5]);
}

export function getUpdateFormValues() {
    const name = $('#updateName').val();
    const surname = $('#updateSurname').val();
    const date = $('#updateDate').val().split('-').reverse().join('.');
    const position = $('#updatePosition').val();
    const salary = Number($('#updateSalary').val());
    return {name, surname, date, position, salary};
}

export function closeCreateForm() {
    $('#createEmployee input').val('');
    $('#createEmployee select').prop('selectedIndex', 0);
    $('#createEmployee').modal('hide');
}

export function closeUpdateForm() {
    $('#updateEmployee').modal('hide');
}

export function closeConfirmDeleteModal() {
    $('#confirmDelete').modal('hide');
}

export function addEventListeners() {
    const modals = Object.values(document.getElementsByClassName('modal'));
    modals.forEach(modal => modal.addEventListener('click', handleModalClick));
}
