import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        //重定向
        path: '/home',
        redirect: '/'

    },
    {
        path: '/',
        component: Home,
        children: [{
            path: '/',
            name: 'index',
            component: () =>
                import ('../views/Index.vue')

        }]
    },
    {
        //全部
        path: '/goods',
        component: Home,
        children: [{
            path: '',
            name: 'goods',
            component: () =>
                import ('../views/Goods')
        }]
    },
    {
        //详情
        path: '/detail',
        component: Home,
        children: [{
            path: '',
            name: 'detail',
            component: () =>
                import ('../views/Detail')
        }]
    },
    {
        //购物车
        path: '/shopCart',
        component: Home,
        children: [{
            path: '',
            name: 'shopCart',
            component: () =>
                import ('../views/ShopCart')
        }]
    },
    {
        //结算
        path: '/balance',
        component: Home,
        children: [{
            path: '',
            name: 'balance',
            component: () =>
                import ('../views/Balance')
        }]
    },
    {
        //订单
        path: '/order',
        component: Home,
        children: [{
            path: '',
            name: 'order',
            component: () =>
                import ('../views/Order')
        }]
    },
    {
        //登录
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login')

    },
    {
        //注册
        path: '/register',
        name: 'register',
        component: () =>
            import ('../views/Register')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router