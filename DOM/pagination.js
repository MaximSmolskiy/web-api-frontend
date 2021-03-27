import {getPaginationHtml} from '../HTML/getters.js';
import {handleNavigationClick} from '../components/navigation.js';

export function getPageLinkAriaLabel(event) {
    const pageLink = event.target.closest('.page-link');

    if (!pageLink) {
        return;
    }

    return pageLink.getAttribute('aria-label');
}

export function getPageNumber() {
    return Number($('.page-link')[1].innerText);
}

export function updatePagination(isPreviousPageItemActive, page, isNextPageItemActive) {
    const paginationHtml = getPaginationHtml(isPreviousPageItemActive, page, isNextPageItemActive);
    $('.pagination').html(paginationHtml);

    const pagination = document.getElementsByClassName('pagination')[0];
    pagination.addEventListener('click', handleNavigationClick);
}
