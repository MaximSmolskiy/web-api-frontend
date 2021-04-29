import {getHtml} from './html.js';
import {paginationTemplateString} from './template-strings/pagination.js';
import {showPreviousPage, showNextPage} from '../controllers/pagination.js';

export function getPageNumber() {
    return Number($('#pageNumber').text());
}

export function updatePagination(paginationData) {
    const paginationHtml = getHtml(paginationTemplateString, paginationData);
    $('#pagination').html(paginationHtml);
}

async function clickHandler(event) {
    if (event.target.closest('#previousPage')) {
        await showPreviousPage();
    }

    if (event.target.closest('#nextPage')) {
        await showNextPage();
    }
}

export function createPagination(paginationData) {
    document.getElementById('pagination').addEventListener('click', clickHandler);
    updatePagination(paginationData);
}
