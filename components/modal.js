import {saveEmployee} from '../services/employees.js';
import {getCreateFormValues} from '../DOM/modal.js';
import {addEventListeners} from '../DOM/modal.js';

export async function handleModalClick(event) {
    const target = event.target;
    const modal = target.closest('.modal');
    if (modal.id === 'createEmployee' && target.localName === 'button' && target.innerText === 'Create') {
        const employee = getCreateFormValues();
        await saveEmployee(employee);
    }
}

export async function updateModal() {
    addEventListeners();
}
