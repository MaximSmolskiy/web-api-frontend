import {showUpdatedEmployee} from '../controllers/employees.js';

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

async function clickHandler(event) {
    await showUpdatedEmployee();
}

export function createEmployeeUpdateForm() {
    document.getElementById('employeeUpdateButton').addEventListener('click', clickHandler);
}

export function closeEmployeeUpdateForm() {
    $('#employeeUpdateForm').modal('hide');
}
