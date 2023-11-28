import Iservice from '../Iservice'

class Auth extends Iservice {

    constructor() {
        super();
    }

    async login(email, password) {
        return await this.http.post(this.http.baseUrl + '/api/admin/auth/login', {email: email, password: password});
    }

    async forgotPassword(email) {
        return await this.http.post(this.http.baseUrl + '/api/admin/auth/forgot_password', {email: email});
    }

    async logOut() {
        return await this.http.get(this.http.baseUrl + '/api/admin/auth/logout');
    }

    async profileData() {
        return await this.http.get(this.http.baseUrl + '/api/admin/auth/profile_data');
    }

    async updateUserTheme() {
        return await this.http.get(this.http.baseUrl + '/api/admin/auth/update_theme');
    }

    setAuthLocalStorage(data) {

        localStorage.setItem("accessTokenAdmin", data['data']['token']);
        localStorage.setItem("adminFirstName", data['data']['first_name']);
        localStorage.setItem("adminLastName", data['data']['last_name']);
        localStorage.setItem("role", data['data']['role']['name']);
        localStorage.setItem("theme", data['data']['theme']);
        localStorage.setItem("adminPermissions", JSON.stringify(data['data']['role']['permissions']));
    }

    removeAuthLocalStorage() {
        localStorage.removeItem("accessTokenAdmin");
        localStorage.removeItem("adminFirstName");
        localStorage.removeItem("adminLastName");
        localStorage.removeItem("role");
        localStorage.removeItem("adminPermissions");
    }
}

const AuthService = new Auth();
export {AuthService as default, Auth};