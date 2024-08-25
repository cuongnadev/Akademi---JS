export const apiEndpoint = {
    adminAuthentication() {
        return `/api/admin-authentication`;
    },
    register() {
        return `/api/admins`;
    },
    getStudents() {
        return `/api/students`;
    },
    getStudents(studentId) {
        return `/api/students/${studentId}`;
    },
    getTeachers() {
        return `/api/teachers`;
    },
    getTeachers(teacherId) {
        return `/api/teachers/${teacherId}`;
    },
    getLastestActivitys() {
        return `/api/notify-activity-lastest`;
    },
    getEvents() {
        return `/api/events`;
    },
    getEvents(date) {
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
};