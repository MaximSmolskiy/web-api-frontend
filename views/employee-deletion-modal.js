import {showDeletedEmployee} from '../controllers/employees.js';

export function getDeletedEmployeeId() {
    return $('#employeeDeletionId').attr('value');
}

export function fillEmployeeDeletionModal(employeeId) {
    $('#employeeDeletionId').attr('value', employeeId);
}

async function clickHandler(event) {
    await showDeletedEmployee();
}

export function createEmployeeDeletionModal() {
    document.getElementById('employeeDeletionButton').addEventListener('click', clickHandler);
}

export function closeEmployeeDeletionModal() {
    $('#employeeDeletionModal').modal('hide');
}
