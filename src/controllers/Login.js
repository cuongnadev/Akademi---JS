import { Router } from '~/routes';
import { apiEndpoint } from '~/utils';
import { Admin } from '~/models/dto';
import { Toast } from '~/views/components/Toast';

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
            let errorMessage = error.message;
            // Xử lý khi đăng nhập thất bại
            if (isAlert) {
                Toast.render({ title: 'Error', message: errorMessage, type: 'ERROR' });
            }

            result(false);

            localStorage.removeItem('admin');
            sessionStorage.removeItem('admin');
        }
    }

    static async register(admin) {
        try {
            const response = await fetch(apiEndpoint.register(), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(admin.getRegisterBody()),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Register failed');
            }

            Router.pushState('/login');

            Toast.render({ title: 'Success', message: 'Registration successful', type: 'SUCCESS' });
        } catch (error) {
            Toast.render({ title: 'Error', message: `Registration error: ${error.message}`, type: 'ERROR' });
        }
    }
}
