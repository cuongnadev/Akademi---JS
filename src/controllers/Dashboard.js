import { apiEndpoint } from '~/utils';

export class DashboardController {
    static async getOverViews() {
        try {
            // Thực hiện các yêu cầu đồng thời
            const [studentsResponse, teachersResponse, eventsResponse] = await Promise.all([
                fetch(apiEndpoint.getStudents(), { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
                fetch(apiEndpoint.getTeachers(), { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
                fetch(apiEndpoint.getEvents(), { method: 'GET', headers: { 'Content-Type': 'application/json' } }),
            ]);

            // Kiểm tra từng phản hồi, nếu có lỗi thì trả về mặc định hoặc xử lý lỗi
            if (!studentsResponse.ok || !teachersResponse.ok || !eventsResponse.ok) {
                throw new Error('Failed to fetch data from one or more endpoints');
            }

            // Chuyển đổi dữ liệu sang JSON đồng thời
            const [studentsList, teachersList, eventsList] = await Promise.all([
                studentsResponse.json(),
                teachersResponse.json(),
                eventsResponse.json(),
            ]);

            // Đếm số lượng phần tử
            const data = {
                student: studentsList.length || 0,
                teacher: teachersList.length || 0,
                event: eventsList.length || 0,
            };

            if (data.student === 0 && data.teacher === 0 && data.event === 0) {
                throw new Error('No data available');
            }

            return data;
        } catch (error) {
            throw new Error(error.message || 'An error occurred while fetching data');
        }
    }
}
