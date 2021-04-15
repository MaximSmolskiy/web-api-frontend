import {handleModalClick} from '../components/modal.js';

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
