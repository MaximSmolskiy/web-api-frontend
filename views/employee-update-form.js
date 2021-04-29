import {processEmployeeUpdate} from '../controllers/employees.js';

export function getUpdatedEmployeeId() {
    return $('#employeeUpdateId').attr('value');
}

export function getEmployeeUpdateFormValues() {
    const name = $('#employeeUpdateName').val();
    const surname = $('#employeeUpdateSurname').val();
    const date = $('#employeeUpdateDate').val().split('-').reverse().join('.');
    const position = $('#employeeUpdatePosition').val();
    const salary = Number($('#employeeUpdateSalary').val());
    return {name, surname, date, position, salary};
}

export function fillEmployeeUpdateForm(employee) {
    $('#employeeUpdateId').attr('value', employee.id);
    $('#employeeUpdateName').val(employee.name);
    $('#employeeUpdateSurname').val(employee.surname);
    $('#employeeUpdateDate').val(employee.date.split('.').reverse().join('-'));
    $('#employeeUpdatePosition').val(employee.position);
    $('#employeeUpdateSalary').val(employee.salary)
}

export function closeEmployeeUpdateForm() {
    $('#employeeUpdateForm').modal('hide');
}

async function clickHandler() {
    await processEmployeeUpdate();
}

export function createEmployeeUpdateForm() {
    document.getElementById('employeeUpdateButton').addEventListener('click', clickHandler);
}
