import {processEmployeeDeletion} from '../controllers/employees.js';

export function getDeletedEmployeeId() {
    return $('#employeeDeletionId').attr('value');
}

export function fillEmployeeDeletionModal(employeeId) {
    $('#employeeDeletionId').attr('value', employeeId);
}

export function closeEmployeeDeletionModal() {
    $('#employeeDeletionModal').modal('hide');
}

async function clickHandler() {
    await processEmployeeDeletion();
}

export function createEmployeeDeletionModal() {
    document.getElementById('employeeDeletionButton').addEventListener('click', clickHandler);
}
