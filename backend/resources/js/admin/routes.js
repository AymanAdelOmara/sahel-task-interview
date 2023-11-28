export default {
    mode: 'history',
    scrollBehavior() {
        return {x: 0, y: 0};
    },
    linkActiveClass: "activeRouterExact",
    linkExactActiveClass: "activeRouter",
    routes: [
        {
            path: '/admin',
            beforeEnter: (to, from, next) => {
                let isAuthenticated = false;
                const accessToken = localStorage.getItem("accessTokenAdmin");
                // if (accessToken != null)
                    isAuthenticated = true;
                if (!isAuthenticated) {
                    next({name: 'AuthLogin'})
                } else {
                    next()
                }
            },
            component: () => import(/* webpackChunkName: "mainL_layout" */'./components/shared/MainLayout'),
            children: [
                {
                    path: '/',
                    component: () => import(/* webpackChunkName: "dashboard" */'./components/index'),
                    name: 'dashboard'
                },
                {
                    path: 'countries',
                    component: () => import(/* webpackChunkName: "products_companies" */'./components/countries'),
                    name: 'countries-list'
                },
                {
                    path: 'products',
                    component: () => import(/* webpackChunkName: "products" */'./components/products'),
                    name: 'products-list'
                },
                {
                    path: 'products/:id',
                    component: () => import(/* webpackChunkName: "products-details" */'./components/products/edit'),
                    name: 'products-edit'
                },
                {
                    path: 'offers',
                    component: () => import(/* webpackChunkName: "products-details" */'./components/offers'),
                    name: 'offers-list'
                }
            ],
        },
        {
            path: '/admin/auth',
            component: () => import(/* webpackChunkName: "AuthLayout" */'./components/shared/AuthLayout'),
            beforeEnter: (to, from, next) => {
                let isAuthenticated = false;
                const accessToken = localStorage.getItem("accessTokenAdmin");
                if (accessToken != null)
                    isAuthenticated = true;
                if (isAuthenticated) {
                    next({name: 'dashboard'})
                } else {
                    next()
                }
            },
            children: [
                {
                    path: 'login',
                    component: () => import(/* webpackChunkName: "login" */'./components/shared/auth/Login'),
                    name: 'AuthLogin'
                },
                {
                    path: '/',
                    component: () => import(/* webpackChunkName: "login-2" */'./components/shared/auth/Login'),
                    name: ''
                },
                {
                    path: 'reset',
                    component: () => import(/* webpackChunkName: "reset" */'./components/shared/auth/Reset'),
                    name: ''
                }
            ]
        }
    ]
}
