import { reactive, readonly } from 'vue';
import { createStore } from 'vuex';
import { dashboardData } from './dashboardData';
import { userListNewbiesData } from './userListNewbiesData';
import { userDetailsData } from './userDetailsData';
import { adminUserList } from './admin/userList';

const state = reactive({
    dashboardData,
    userListNewbiesData,
    userDetailsData,
    adminUserList,
});

export default createStore({
    state: readonly(state),
    getters: {},
    mutations: {},
    actions: {},
    modules: {},
});
