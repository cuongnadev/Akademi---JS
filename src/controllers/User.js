import { apiEndpoint } from '~/utils';
import { Toast } from '~/views/components';
export class UserController {
    static getUser() {
        const adminData = localStorage.getItem('admin') || sessionStorage.getItem('admin');
        try {
            return JSON.parse(adminData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return null;
        }
    }

    static async updatedUser(updatedUser) {
        try {
            const updateResponse = await fetch(apiEndpoint.updateUser(updatedUser.id), {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });

            if (!updateResponse.ok) {
                const errorData = await updateResponse.json();
                throw new Error(errorData.message || 'Update failed');
            }

            const updatedData = await updateResponse.json();

            if (localStorage.getItem('admin')) {
                localStorage.setItem('admin', JSON.stringify(updatedData));
            } else {
                sessionStorage.setItem('admin', JSON.stringify(updatedData));
            }

            // Thông báo thành công
            Toast.render({ title: 'Success', message: 'User updated successfully', type: 'SUCCESS' });
        } catch (error) {
            let errorMessage = error.message;
            console.log(errorMessage);

            if (errorMessage) {
                Toast.render({ title: 'Error', message: errorMessage, type: 'ERROR' });
            }
        }
    }
}
