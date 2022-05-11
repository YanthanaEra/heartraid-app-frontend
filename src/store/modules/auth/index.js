import axios from 'axios';
import { FIREBASE_API_KEY } from '@/firebase.js';

let timer;
const state = {
    userId: null,
    token: null,
};
const mutations = {
    setUser(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
    },
};
const actions = {
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
                const expiresIn = Number(response.data.expiresIn) * 1000;
                //const expiresIn = 3 * 1000; // = 3sek
                const expDate = new Date().getTime() + expiresIn;

                localStorage.setItem('token', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                localStorage.setItem('expiresIn', expDate);

                timer = setTimeout(() => {
                    context.dispatch('autoSignOut');
                }, expiresIn);

                context.commit('setUser', {
                    userId: response.data.localId,
                    token: response.data.idToken,
                });
            })
            .catch((error) => {
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
    autoSignIn(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const expiresIn = Number(localStorage.getItem('expiresIn'));
        const timeLeft = expiresIn - new Date().getTime();

        if (timeLeft < 0) {
            // TODO: von firebase einen refresh token holen den automatisch beim ersten login bekommt
            return; //refresh token?
        }

        timer = setTimeout(() => {
            context.dispatch('autoSignOut');
        }, timeLeft);

        if (token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }
    },
    signOut(context) {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('expiresIn');

        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            userId: null,
        });
    },
    autoSignOut(context) {
        // server-kommunikation, falls notwendig
        context.dispatch('signOut');
    },
};
const getters = {
    idAuthenticated: (state) => !!state.token,
};

const authModule = {
    state,
    mutations,
    actions,
    getters,
};

export default authModule;
