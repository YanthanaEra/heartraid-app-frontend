<template>
    <form
        @submit.prevent="pressed"
        class="form form--register"
    >
        <h3 class="h2 font-neon">
            {{ $t('form.register') }}
        </h3>
        <div
            v-if="error"
            class="form__row"
        >
            <p>{{ error.message }}</p>
        </div>
        <div class="form__row">
            <div class="form__item form__item--username">
                <label for="email">{{ $t('form.email') }}</label>
                <input
                    v-model="email"
                    placeholder="your@mailaddress.com"
                    type="text"
                    name="email"
                    id="formRegisterEmail"
                    class="formInput__email"
                />
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--password">
                <label for="password">
                    {{ $t('form.password') }}
                </label>
                <input
                    v-model="password"
                    type="password"
                    name="password"
                    id="formRegisterPassword"
                    class="formInput__password"
                />
            </div>
            <div class="form__item form__item--passwordConfirm">
                <label for="password">
                    {{ $t('form.passwordConfirm') }}
                </label>
                <input
                    v-model="passwordConfirm"
                    type="password"
                    name="passwordConfirm"
                    id="formRegisterPasswordConfirm"
                    class="formInput__password"
                />
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--submit">
                <input
                    type="submit"
                    class="button"
                    :value="$t('form.registerNow')"
                />
            </div>
        </div>
    </form>
</template>

<script>
import { defineComponent } from 'vue';
// import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
/*
import { useRouter } from 'vue-router';
const register = () => {
    // need .value because ref()
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log('Successfully registered!');
            router.push('/dashboard'); // redirect to the feed
        })
        .catch((error) => {
            console.log(error.code);
            alert(error.message);
        });
};
// https://firebase.google.com/docs/reference/rest/auth?hl=en
https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyCGqOJHfBkFsOvPCY-eE7glmERh9Ob4YnM
*/

export default defineComponent({
    name: 'formRegister',
    data() {
        return {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            error: '',
        };
    },
    methods: {
        async pressed() {
            try {
                const auth = getAuth();
                const user = createUserWithEmailAndPassword(auth, this.email, this.password);
                console.log(user);
                console.log('bist in try');
                this.$router.replace({ name: 'DashboardPage' });
            } catch (error) {
                console.log('bist in error');
                console.log({ error });
            }
        },
    },
});
</script>

<style lang="scss">
.form--register {
    background-color: rgba(4, 226, 255, 0.274);
}
</style>
