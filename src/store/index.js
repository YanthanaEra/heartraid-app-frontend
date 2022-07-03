import { createStore } from 'vuex';

import { dashboardData } from '@/store/dashboardData';
import { userListNewbiesData } from '@/store/userListNewbiesData';
import { chatRoomsOverviewData } from '@/store/chatRooms/chatRoomsOverviewData';
import { roomAnimeData } from '@/store/chatRooms/roomAnimeData';
import { userCurrentData } from '@/store/userCurrentData';
import { adminUserList } from '@/store/admin/userList';

import authModule from '@/store/modules/auth';

const state = {
    chatRoomsOverviewData,
    roomAnimeData,
    dashboardData,
    userListNewbiesData,
    adminUserList,
    userCurrentData,
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
