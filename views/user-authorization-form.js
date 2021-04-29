import {processUserAuthorization} from '../controllers/authorization.js';

export function getUserAuthorizationFormValues() {
    const username = $('#userAuthorizationUsername').val();
    const password = $('#userAuthorizationPassword').val();
    return {username, password};
}

export function closeUserAuthorizationForm() {
    $('#userAuthorizationForm').modal('hide');
}

async function clickHandler() {
    await processUserAuthorization();
}

export function createUserAuthorizationForm() {
    document.getElementById('userAuthorizationButton').addEventListener('click', clickHandler);
}
