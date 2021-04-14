import {handleModalClick} from '../components/modal.js';

export function getCreateFormValues() {
    const name = $('#createName').val();
    const surname = $('#createSurname').val();
    const date = $('#createDate').val();
    const position = $('#createPosition').val();
    const salary = Number($('#createSalary').val());
    return {name, surname, date, position, salary};
}

export function addEventListeners() {
    const modals = Object.values(document.getElementsByClassName('modal'));
    modals.forEach(modal => modal.addEventListener('click', handleModalClick));
}
