import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

    const user = localStorage.getItem('user');

    if (!user) {
        return new Router().parseUrl('/login');
    }

    const userData = JSON.parse(user);

    if (userData.role === 'admin') {
        return true;
    }

    return new Router().parseUrl('/login');
};
