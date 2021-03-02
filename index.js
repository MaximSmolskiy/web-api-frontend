import {getEmployeesList} from './services/employees-service.js';
import {appendToTableBody} from './DOM/append-to-table-body.js';

(async () => {
    appendToTableBody(await getEmployeesList());
})();
