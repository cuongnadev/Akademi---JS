export const apiEndpoint = {
    adminAuthentication() {
        // http request GET
        return `/api/admins`;
    },
    register() {
        // http request POST
        return `/api/admins`;
    },
    updateUser(userId) {
        return `/api/admins/${userId}`;
    },
    getStudents() {
        return `/api/students`;
    },
    getStudent(studentId) {
        return `/api/students/${studentId}`;
    },
    getTeachers() {
        return `/api/teachers`;
    },
    getTeacher(teacherId) {
        return `/api/teachers/${teacherId}`;
    },
    getLastestActivitys() {
        return `/api/notify-activity-lastest`;
    },
    getEvents() {
        return `/api/events`;
    },
    getEvent(date) {
        return `/api/events/${date}`;
    },
    postEvents() {
        return `/api/events`;
    },
    postStudent() {
        return `/api/students`;
    },
    postTeacher() {
        return `/api/teachers`;
    },
    patchStudent(studentId) {
        return `/api/students/${studentId}`;
    },
    patchTeacher(teacherId) {
        return `/api/teachers/${teacherId}`;
    },
    deleteStudent(studentId) {
        return `/api/students/${studentId}`;
    },
    deleteTeacher(teacherId) {
        return `/api/teachers/${teacherId}`;
    },
    getCourses() {
        return `/api/courses`;
    },
};
