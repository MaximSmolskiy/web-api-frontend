import {authorizeUser} from '../models/authorization.js';
import {getUserAuthorizationFormValues} from '../views/user-authorization-form.js';

export async function showAuthorizedUserView() {
    await authorizeUser(getUserAuthorizationFormValues());
}
