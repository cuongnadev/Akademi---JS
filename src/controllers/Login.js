import { Router } from '~/routes';
import { apiEndpoint } from '~/utils';
import { Admin } from '~/models/dto';

export class LoginController {
    static async authentication(
        admin,
        {
            isKeepLogged = false,
            autoNavigation = true,
            navigationTo = '/',
            isAlert = true,
            result = (isAuthenticated) => {
                isAuthenticated;
            },
        },
    ) {
        try {
            const response = await fetch(apiEndpoint.adminAuthentication(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                // No body required for GET method
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Authentication failed');
            }

            const data = await response.json();

            const user = data.find((user) => user.email === admin.email && user.password === admin.password);

            if (user) {
                if (isKeepLogged) {
                    localStorage.setItem('admin', JSON.stringify(user));
                } else {
                    sessionStorage.setItem('admin', JSON.stringify(user));
                }

                window.dispatchEvent(new CustomEvent('logging'));

                if (autoNavigation) {
                    Router.pushState(navigationTo);
                }

                result(true);
            } else {
                throw new Error('Invalid login credentials');
            }
        } catch (error) {
            // Xử lý khi đăng nhập thất bại
            if (isAlert) {
                console.error(error.message);
            }

            result(false);

            localStorage.removeItem('admin');
            sessionStorage.removeItem('admin');
        }
    }
}
