import { apiEndpoint } from '~/utils';

export class DashboardController {
    static async getOverViews() {
        try {
            const students = await fetch(apiEndpoint.getStudents(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const teachers = await fetch(apiEndpoint.getTeachers(), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Get Data failed');
            }

            const data = await response.json();

            if (data.length > 0) {
                return data;
            } else {
                throw new Error('No students');
            }
        } catch (error) {
            let errorMessage = error.message;
            throw new Error(errorMessage);
        }
    }
}
