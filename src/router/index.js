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
            if (store.getters.isAuthenticated) {
                next('/dashboard');
            } else {
                next();
            }
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
        path: '/dashboard',
        name: 'DashboardPage',
        component: () => import('@/pages/DashboardPage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/styles-overview',
        name: 'StylesOverviewPage',
        component: () => import('@/pages/StylesOverviewPage.vue'),
    },
    {
        path: '/backend',
        name: 'BackendPage',
        component: () => import('@/pages/BackendPage.vue'),
    },
    {
        path: '/chats',
        name: 'ChatSingleOverviewPage',
        component: () => import('@/pages/ChatSingleOverviewPage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/chat',
        name: 'ChatSinglePage',
        component: () => import('@/pages/ChatSinglePage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/chat-rooms',
        name: 'ChatRoomsPage',
        component: () => import('@/pages/chatRooms/_overviewPage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/chat-rooms/anime',
        name: 'ChatRoomAnimePage',
        component: () => import('@/pages/chatRooms/roomAnimePage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/user',
        name: 'UserDetailsPage',
        component: () => import('@/pages/UserDetailsPage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/admin/users',
        name: 'AdminUsersPage',
        component: () => import('@/pages/admin/UsersPage.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        component: () => import('@/pages/ProfilePage.vue'),
        meta: {
            requireAuth: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.getters.isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;
