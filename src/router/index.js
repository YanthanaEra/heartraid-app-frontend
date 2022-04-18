import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/profile',
        name: 'ProfilePage',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/pages/ProfilePage.vue'),
    },
    {
        path: '/dashboard',
        name: 'DashboardPage',
        component: () => import('@/pages/DashboardPage.vue'),
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

export default router;
