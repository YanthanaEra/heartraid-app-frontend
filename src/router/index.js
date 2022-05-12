import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: () => import('@/pages/HomePage.vue'),
        beforeEnter: (to, from, next) => {
            //console.log(to);
            //console.log(from);
            //console.log(next);
            if (store.getters.idAuthenticated) {
                next('/dashboard');
            } else {
                next();
            }
        },
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: () => import('@/pages/ProfilePage.vue'),
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: () => import('@/pages/DashboardPage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: () => import('@/pages/LoginPage.vue'),
        meta: {
            authPage: true,
        },
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: () => import('@/pages/RegisterPage.vue'),
        meta: {
            authPage: true,
        },
    },
    {
        path: '/styles-overview',
        name: 'StylesOverviewPage',
        component: () => import('@/pages/StylesOverviewPage.vue'),
    },
    {
        path: '/chats',
        name: 'ChatSingleOverviewPage',
        component: () => import('@/pages/ChatSingleOverviewPage.vue'),
    },
    {
        path: '/chat',
        name: 'ChatSinglePage',
        component: () => import('@/pages/ChatSinglePage.vue'),
    },
    {
        path: '/chat-rooms',
        name: 'ChatRoomsPage',
        component: () => import('@/pages/ChatRoomsPage.vue'),
    },
    {
        path: '/user',
        name: 'UserDetailsPage',
        component: () => import('@/pages/UserDetailsPage.vue'),
    },
    {
        path: '/admin/users',
        name: 'AdminUsersPage',
        component: () => import('@/pages/admin/UsersPage.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.getters.idAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
