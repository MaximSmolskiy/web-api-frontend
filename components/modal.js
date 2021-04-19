import {addEventListeners} from '../DOM/modal.js';
import {updateModals} from '../DOM/modal.js';

export async function updateModal() {
    updateModals();
    addEventListeners();
}
