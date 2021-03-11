import {getPageLinkAriaLabel, getPage, updatePagination} from '../DOM/pagination.js';
import {updateTable} from './table.js';
import {getEmployeesList} from '../services/employees.js';

export async function handleNavigationClick(event) {
    const pageLinkAriaLabel = getPageLinkAriaLabel(event);

    if (!pageLinkAriaLabel) {
        return;
    }

    let page = getPage();
    page = pageLinkAriaLabel === 'Previous' ? page - 1 : page + 1;
    await updateTable(page);
    await updateNavigation(page);
}

async function getIsPageItemActive(page) {
    const searchName = sessionStorage.getItem('searchName');
    const searchSurname = sessionStorage.getItem('searchSurname');
    const pageEmployeesList = await getEmployeesList(page, searchName, searchSurname);
    const isPageItemActive = pageEmployeesList && pageEmployeesList.length !== 0;
    return isPageItemActive;
}

export async function updateNavigation(page = 1) {
    const isPreviousPageItemActive = await getIsPageItemActive(page - 1);
    const isNextPageItemActive = await getIsPageItemActive(page + 1);
    updatePagination(isPreviousPageItemActive, page, isNextPageItemActive);
}
