import { createApp } from 'vue';
import './registerServiceWorker';
import App from './App.vue';
import router from './router';
import store from './store';
import i18n from './i18n';
import { initializeApp } from 'firebase/app';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCGqOJHfBkFsOvPCY-eE7glmERh9Ob4YnM',
    authDomain: 'heartraid-app.firebaseapp.com',
    projectId: 'heartraid-app',
    storageBucket: 'heartraid-app.appspot.com',
    messagingSenderId: '314980886786',
    appId: '1:314980886786:web:5a0232da6a0fb3ee1a3a1b',
};
// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(i18n);
app.use(store);
app.use(router);
app.mount('#app');
