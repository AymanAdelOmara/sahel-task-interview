import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes';
import getHttpClient from "../admin/http";
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import Vuelidate from 'vuelidate'

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.prototype.$localization = window.localization;
export const router = new VueRouter(routes);
router.beforeEach((to, from, next) => {
    const Permissions = JSON.parse(localStorage.getItem('permissions'));
    if (Permissions != null) {
    //     if(User['role'] !== 'super_admin'){
    //     if (to.name !== '') {
    //         if (!Permissions.find((item) => {
    //             return item.name === to.name;
    //         })) {
    //             next('/admin');
    //         }
    //     }
    //     }
    }
    $("#navigate-loader").fadeIn(0);
    next();
});
router.afterEach(() => {
    $('.modal').modal('hide');
});

export const baseUrl = window['app_url'];
export const http = getHttpClient();
Vue.prototype.$imagePath = window['assets'] + 'admin_style/images';
Vue.prototype.$imageUpload = window['assets'] + 'uploads/';
Vue.prototype.$showLoader = () => {
    $("#navigate-loader").fadeIn("slow");
};
Vue.prototype.$hideLoader = () => {
    $("#navigate-loader").fadeOut("slow");
};
Vue.prototype.$inputError = (name, rules, parent) => {
    for (let i = 0; i < rules.length; i++) {
        if (!parent[name][rules[i]] && parent.$dirty) {
            return 'is-invalid state-invalid';
        }
    }
    return '';
};
Vue.prototype.$deleteAlert = (func, title) => {
    this.$swal({
        title: title,
        text: window.localization.delete_alert,
        type: 'warning',
        showCancelButton: true,
        confirmButtonClass: 'red-danger',
        confirmButtonText: "تأكيد الحذف",
        cancelButtonText: 'تراجع',
        icon: "danger",
        dangerMode: true,
    }, (willDelete) => {
        if (willDelete === true) {
            func();
        }
    });

};
Vue.prototype.$showError = function (msg) {
    this.$swal('خطأ', msg, "error")
        .then(() => {
        }, (dismiss) => {
        });

};
Vue.prototype.$showSuccess = (msg) => {
    this.$swal('عملية ناجحه', msg, "success")
        .then(() => {
        }, (dismiss) => {
        });
};
// noinspection JSUnfilteredForInLoop
Vue.prototype.$inputUniqueErrorsHandler = (errors, validateUnique) => {
    for (let inputId in errors) {
        // noinspection JSUnfilteredForInLoop
        validateUnique[inputId].is_error = true;
        // noinspection JSUnfilteredForInLoop
        validateUnique[inputId].message = errors[inputId][0];
        $('#' + inputId).on('input', () => {
            // noinspection JSUnfilteredForInLoop
            validateUnique[inputId].is_error = false;
            // noinspection JSUnfilteredForInLoop
            validateUnique[inputId].message = '';
        });
    }
};

Vue.filter('truncate', function (text, stop, clamp) {
    return text.slice(0, stop) + (stop < text.length ? clamp || '...' : '')
});

Vue.directive('can', function (el, binding, node) {
    const Permissions = JSON.parse(localStorage.getItem('adminPermissions'));
    const permissionExist = Permissions?.find(o => o.name === binding.value);
    if (permissionExist !== undefined){
            return node.elm.hidden = false;
    }
});

new Vue({
    el: '#admin-app',
    router: router,
});

