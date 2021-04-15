import {handleModalClick} from '../components/modal.js';

export function getCreateFormValues() {
    const name = $('#createName').val();
    const surname = $('#createSurname').val();
    const date = $('#createDate').val().split('-').reverse().join('.');
    const position = $('#createPosition').val();
    const salary = Number($('#createSalary').val());
    return {name, surname, date, position, salary};
}

export function closeCreateForm() {
    $('#createEmployee input').val('');
    $('#createEmployee select').prop('selectedIndex', 0);
    $('#createEmployee').modal('hide');
}

export function addEventListeners() {
    const modals = Object.values(document.getElementsByClassName('modal'));
    modals.forEach(modal => modal.addEventListener('click', handleModalClick));
}
