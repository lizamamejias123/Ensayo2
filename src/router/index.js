import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'General',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/General.vue')
    },
    {
        path: '/PorFecha',
        name: 'PorFecha',
        component: () =>
            import ( /* webpackChunkName: "PorFecha" */ '../views/PorFecha.vue')
    },
    {
        path: '/Lista',
        name: 'Lista',
        component: () =>
            import ( /* webpackChunkName: "Lista" */ '../views/Lista.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router