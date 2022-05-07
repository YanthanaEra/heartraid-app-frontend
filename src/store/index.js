import axios from 'axios';
import { reactive } from 'vue';
import { createStore } from 'vuex';
import { dashboardData } from './dashboardData';
import { userListNewbiesData } from './userListNewbiesData';
import { userCurrentData } from './userCurrentData';
import { adminUserList } from './admin/userList';
import { FIREBASE_API_KEY } from '@/firebase.js';

const state = reactive({
    userId: null,
    token: null,
    dashboardData,
    userListNewbiesData,
    userCurrentData,
    adminUserList,
});

const store = createStore({
    state: state,
    getters: {},
    mutations: {
        setUser(state, payload) {
            state.userCurrentData.userId = payload.userId;
            state.userCurrentData.token = payload.token;
        },
    },
    actions: {
        auth(context, payload) {
            let url = '';
            if (payload.mode === 'signIn') {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
            } else if (payload.mode === 'signUp') {
                url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
            } else {
                return;
            }
            const authData = {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            };
            return axios
                .post(url, authData)
                .then((response) => {
                    // console.log('response: ', response);
                    context.commit('setUser', {
                        userId: response.data.localId,
                        token: response.data.idToken,
                    });
                })
                .catch((error) => {
                    // console.log({ error });
                    const errorMessage = new Error(error.response.data.error.message || 'UNKNOWN_ERROR');
                    throw errorMessage;
                });
        },
        signUp(context, payload) {
            const signUpData = {
                ...payload,
                mode: 'signUp',
            };
            return context.dispatch('auth', signUpData);
        },
        signIn(context, payload) {
            const signInData = {
                ...payload,
                mode: 'signIn',
            };
            return context.dispatch('auth', signInData);
        },
    },
    modules: {},
});

export default store;
