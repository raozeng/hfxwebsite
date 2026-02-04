import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SolutionsView from '../views/SolutionsView.vue'
import ProductsView from '../views/ProductsView.vue'
import ContactView from '../views/ContactView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: { title: '海福星云官网中文版首页' }
        },
        {
            path: '/solutions',
            name: 'solutions',
            component: SolutionsView,
            meta: { title: '解决方案 - 海福星云' }
        },
        {
            path: '/products',
            name: 'products',
            component: ProductsView,
            meta: { title: '产品中心 - 海福星云' }
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView,
            meta: { title: '联系我们 - 海福星云' }
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            meta: { title: '关于我们 - 海福星云' }
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '海福星云 Technology';
    next();
})

export default router
