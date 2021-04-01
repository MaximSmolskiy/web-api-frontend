import {handleModalClick} from '../components/modal.js';

export function getCreateNameValue() {
    return $('#createName').val();
}

export function getCreateSurnameValue() {
    return $('#createSurname').val();
}

export function getCreateDateValue() {
    return $('#createDate').val();
}

export function getCreatePositionValue() {
    return $('#createPosition').val();
}

export function getCreateSalaryValue() {
    return $('#createSalary').val();
}

export function addEventListeners() {
    const modals = Object.values(document.getElementsByClassName('modal'));
    modals.forEach(modal => modal.addEventListener('click', handleModalClick));
}
