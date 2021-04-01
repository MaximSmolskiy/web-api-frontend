import {saveEmployee} from '../services/employees.js';
import {getCreateNameValue, getCreateSurnameValue, getCreateDateValue, getCreatePositionValue, getCreateSalaryValue} from '../DOM/modal.js';
import {addEventListeners} from '../DOM/modal.js';

export async function handleModalClick(event) {
    const target = event.target;
    const modal = target.closest('.modal');
    if (modal.id === 'createEmployee' && target.localName === 'button' && target.innerText === 'Create') {
        const name = getCreateNameValue();
        const surname = getCreateSurnameValue();
        const date = getCreateDateValue();
        const position = getCreatePositionValue();
        const salary = getCreateSalaryValue();
        await saveEmployee({name, surname, date, position, salary});
    }
}

export async function updateModal() {
    addEventListeners();
}
