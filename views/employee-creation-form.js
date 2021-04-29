import {processEmployeeCreation} from '../controllers/employees.js';

export function getEmployeeCreationFormValues() {
    const name = $('#employeeCreationName').val();
    const surname = $('#employeeCreationSurname').val();
    const date = $('#employeeCreationDate').val().split('-').reverse().join('.');
    const position = $('#employeeCreationPosition').val();
    const salary = Number($('#employeeCreationSalary').val());
    return {name, surname, date, position, salary};
}

export function closeEmployeeCreationForm() {
    $('#employeeCreationForm input').val('');
    $('#employeeCreationForm select').prop('selectedIndex', 0);
    $('#employeeCreationForm').modal('hide');
}

async function clickHandler() {
    await processEmployeeCreation();
}

export function createEmployeeCreationForm() {
    document.getElementById('employeeCreationButton').addEventListener('click', clickHandler);
}
