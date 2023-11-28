export default {
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "mainL_layout" */'./components/shared/MainLayout'),
            children: [
                {
                    path: '/',
                    component: () => import(/* webpackChunkName: "dashboard" */'./components/products'),
                    name: 'home'
                }
            ],
        },
    ]
}
