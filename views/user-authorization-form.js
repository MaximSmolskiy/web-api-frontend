import {showAuthorizedUserView} from '../controllers/authorization.js';

export function getUserAuthorizationFormValues() {
    const username = $('#userAuthorizationUsername').val();
    const password = $('#userAuthorizationPassword').val();
    return {username, password};
}

async function clickHandler(event) {
    await showAuthorizedUserView();
}

export function createUserAuthorizationForm() {
    document.getElementById('userAuthorizationButton').addEventListener('click', clickHandler);
}

export function closeUserAuthorizationForm() {
    $('#userAuthorizationForm').modal('hide');
}
