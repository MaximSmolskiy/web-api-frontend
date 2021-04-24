import {getPageLinkAriaLabel, getPageNumber, updatePagination} from '../DOM/pagination.js';
import {updateTable} from './table.js';

export async function handleNavigationClick(event) {
    const pageLinkAriaLabel = getPageLinkAriaLabel(event);

    if (!pageLinkAriaLabel) {
        return;
    }

    let page = getPageNumber();
    page = pageLinkAriaLabel === 'Previous' ? page - 1 : page + 1;
    await updateNavigation(page);
    await updateTable(page);
}

async function getIsPageItemActive(page) {
    const pagesNumber = Number(sessionStorage.getItem('pagesNumber'));
    return page >= 1 && page <= pagesNumber;
}

export async function updateNavigation(page = getPageNumber()) {
    const isPageItemActive = await getIsPageItemActive(page);
    if (page > 1 && !isPageItemActive) {
        --page;
    }

    const isPreviousPageItemActive = await getIsPageItemActive(page - 1);
    const isNextPageItemActive = await getIsPageItemActive(page + 1);
    updatePagination(isPreviousPageItemActive, page, isNextPageItemActive);
}
