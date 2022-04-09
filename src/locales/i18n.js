import { createI18n } from 'vue-i18n';
// import de from './de.json';
// import en from './en.json';
// import en as * from './en.json';
// import de from require('src/locales/de.json');

const i18n = createI18n({
    locale: 'de',
    messages: {
        en: {
            homepage: {
                headline: 'Welcome to heart raid',
            },
            form: {
                username: 'Username',
                firstname: 'First name',
                lastname: 'Last name',
                email: 'E-mail',
                password: 'Password',
                passwordRepeat: 'Repeat password',
                gender: 'Gender',
                diverse: 'Diverse',
                female: 'Female',
                male: 'Male',
                birthday: 'Birthday',
                birthMonth: 'Birth month',
                birthYear: 'Birth year',
                register: 'Register',
                registerNow: 'Register now',
                login: 'Login',
                loginNow: 'Login now',
                day: 'Day',
            },
            month: {
                month: 'Month',
                january: 'January',
                february: 'February',
                march: 'March',
            },
        },
        de: {
            homepage: {
                headline: 'Willkommen bei <span class="font-neon">HEARTRAID</span>',
            },
            form: {
                username: 'Username',
                firstname: 'Vorname',
                lastname: 'Nachname',
                email: 'E-Mail',
                password: 'Passwort',
                passwordRepeat: 'Passwort wiederholen',
                gender: 'Geschlecht',
                diverse: 'Diverse',
                female: 'Frau',
                male: 'Mann',
                birthday: 'Geburtstag',
                birthMonth: 'Geburtsmonat',
                birthYear: 'Geburtsjahr',
                register: 'Registieren',
                registerNow: 'Jetzt Registieren',
                login: 'Login',
                loginNow: 'Jetzt einloggen',
                day: 'Tag',
            },
            month: {
                month: 'Monat',
                january: 'Januar',
                february: 'Februar',
                march: 'März',
            },
        },
    },
});

export default i18n;
