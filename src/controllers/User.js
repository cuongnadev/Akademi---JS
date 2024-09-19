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
}
