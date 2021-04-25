import {updateTable} from './elements/table.js';
import {updateNavigation} from './elements/navigation.js';
import {updateModal} from './elements/modal.js';

(async () => {
    await updateNavigation(1);
    await updateTable(1);
    await updateModal();
})();
