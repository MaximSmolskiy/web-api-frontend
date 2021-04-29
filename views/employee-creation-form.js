import {showCreatedEmployee} from '../controllers/employees.js';

export function getEmployeeCreationFormValues() {
    const name = $('#employeeCreationName').val();
    const surname = $('#employeeCreationSurname').val();
    const date = $('#employeeCreationDate').val().split('-').reverse().join('.');
    const position = $('#employeeCreationPosition').val();
    const salary = Number($('#employeeCreationSalary').val());
    return {name, surname, date, position, salary};
}

async function clickHandler(event) {
    await showCreatedEmployee();
}

export function createEmployeeCreationForm() {
    document.getElementById('employeeCreationButton').addEventListener('click', clickHandler);
}

export function closeEmployeeCreationForm() {
    $('#employeeCreationForm input').val('');
    $('#employeeCreationForm select').prop('selectedIndex', 0);
    $('#employeeCreationForm').modal('hide');
}
