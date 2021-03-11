import {updateTable} from './components/table.js';
import {updateNavigation} from './components/navigation.js';

(async () => {
    await updateTable();
    await updateNavigation();
})();
