import { createStore } from 'vuex';

import { dashboardData } from '@/store/dashboardData';
import { userListNewbiesData } from '@/store/userListNewbiesData';
import { adminUserList } from '@/store/admin/userList';

import authModule from '@/store/modules/auth';

const state = {
    dashboardData,
    userListNewbiesData,
    adminUserList,
};

const store = createStore({
    state: state,
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth: authModule,
    },
});

export default store;
