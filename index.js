import {getEmployeesList} from './services/employees-service.js';
import {updateTableBody} from './DOM/update-table-body.js';

(async () => {
    updateTableBody(await getEmployeesList());
})();
