import { apiEndpoint } from '~/utils';

export class PrimaryLayoutController {
    //
    static async getDataProfile(email, password) {
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
                throw new Error(errorData.message || 'Get Data failed');
            }

            const data = await response.json();

            const admin = data.find((user) => user.email === email && user.password === password);
            if (admin) {
                return admin;
            } else {
                throw new Error('No admin');
            }
        } catch (error) {
            let errorMessage = error.message;
            throw new Error(errorMessage);
        }
    }
}
