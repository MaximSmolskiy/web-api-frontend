import {updateTable} from './components/table.js';
import {updateNavigation} from './components/navigation.js';
import {updateModal} from './components/modal.js';

(async () => {
    await updateTable(1);
    await updateNavigation(1);
    await updateModal();
})();
