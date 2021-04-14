import {getPageLinkAriaLabel, getPageNumber, updatePagination} from '../DOM/pagination.js';
import {updateTable} from './table.js';
import {getEmployeesList} from '../services/employees.js';

export async function handleNavigationClick(event) {
    const pageLinkAriaLabel = getPageLinkAriaLabel(event);

    if (!pageLinkAriaLabel) {
        return;
    }

    let page = getPageNumber();
    page = pageLinkAriaLabel === 'Previous' ? page - 1 : page + 1;
    await updateTable(page);
    await updateNavigation(page);
}

async function getIsPageItemActive(page) {
    if (page <= 0) {
        return false;
    }

    const name = sessionStorage.getItem('name');
    const surname = sessionStorage.getItem('surname');
    const pageEmployeesList = await getEmployeesList({page, name, surname});
    const isPageItemActive = pageEmployeesList && pageEmployeesList.length !== 0;
    return isPageItemActive;
}

export async function updateNavigation(page = getPageNumber()) {
    const isPreviousPageItemActive = await getIsPageItemActive(page - 1);
    const isNextPageItemActive = await getIsPageItemActive(page + 1);
    updatePagination(isPreviousPageItemActive, page, isNextPageItemActive);
}
