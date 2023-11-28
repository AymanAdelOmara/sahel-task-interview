import axios from 'axios';
import {router} from './main'

export default function getHttpClient() {

    axios.baseUrl = 'http://localhost';

    axios.interceptors.request.use(
        (requestConfig) => {
            requestConfig.headers['Authorization'] = "Bearer " + localStorage.getItem("accessTokenAdmin");
            return requestConfig;
        }, (error) => {
            return Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            if (error.response.status === 401) {
                localStorage.removeItem("accessTokenAdmin");
                localStorage.removeItem("adminFirstName");
                localStorage.removeItem("adminLastName");
                localStorage.removeItem("role");
                localStorage.removeItem("adminPermissions");
                if (router.history.current.path !== '/admin/auth') {
                    router.push('/admin/auth').then(r => {
                        console.log(r)
                    });
                }
            } else if (error.response.status === 400) {
                if (error.response.config.method === "post") {
                    this.$swal({
                        title: 'حدث خطأ !',
                        type: "error",
                        text: error.response.data.message,
                        confirmButtonText: "حسناً",
                        timer: 2500,
                        closeOnConfirm: true,
                        closeOnCancel: true
                    }, function () {
                        if (this.$swal){
                            this.$swal.close();
                        }
                    });
                }
            }
            else if (error.response.status === 500) {
                if (error.response.config.method === "post") {
                    this.$swal({
                        title: 'حدث خطأ من الخادم !',
                        type: "error",
                        text: error.response.data.message,
                        confirmButtonText: "حسناً",
                        timer: 2500,
                        closeOnConfirm: true,
                        closeOnCancel: true
                    }, function () {
                        if (this.$swal)
                            this.$swal.close();
                        // $('[id*=modal_]').each(function () {
                        //     $(this).animate({
                        //         scrollTop: 0
                        //     }, 450);
                        // });
                    });
                }
            }
            return Promise.reject(error);
        }
    );
    return axios
}
