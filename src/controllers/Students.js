import { apiEndpoint } from '~/utils';

export class StudentsController {
    static async getUnpaidStudent() {
        try {
            const response = await fetch(apiEndpoint.getStudents(), {
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

            const unpaidStudents = data.filter((student) => student.unpaidAmount > 0);

            if (unpaidStudents.length > 0) {
                return unpaidStudents;
            } else {
                throw new Error('No unpaid students');
            }
        } catch (error) {
            let errorMessage = error.message;
            throw new Error(errorMessage);
        }
    }

    static async getStudents() {
        try {
            const response = await fetch(apiEndpoint.getStudents(), {
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
