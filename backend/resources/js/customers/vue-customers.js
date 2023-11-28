import Vue from 'vue';
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import routes from './routes';
import getHttpClient from './http';

Vue.use(Vuelidate);
Vue.use(VueRouter);

export const router = new VueRouter(routes);
export const bus = new Vue();
export const baseUrl = window['app_url'];
export const http = getHttpClient();

new Vue({
    el: '#app',
    router: router,
});
