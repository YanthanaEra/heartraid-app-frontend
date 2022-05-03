<template>
    <Form
        @submit="submitData"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="form form--register"
    >
        <!-- @submit.prevent="submitData"-->
        <h3 class="h2 font-neon">
            {{ $t('form.register') }}
        </h3>
        <div class="form__row">
            <div class="form__item form__item--username">
                <label for="email">{{ $t('form.email') }}</label>
                <Field
                    as="input"
                    name="email"
                    type="email"
                    id="formRegisterEmail"
                    class="formInput__email"
                    placeholder="your@mailaddress.com"
                />
                <div
                    v-if="errors.email"
                    class="alert"
                >
                    {{ $t(errors.email) }}
                </div>
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--password">
                <label for="password">
                    {{ $t('form.password') }}
                </label>
                <Field
                    as="input"
                    name="password"
                    type="password"
                    minlength="8"
                    v-model="password"
                    id="formRegisterPassword"
                    class="formInput__password"
                />
                <div
                    v-if="errors.password"
                    class="alert"
                >
                    {{ $t(errors.password) }}
                </div>
            </div>
            <div class="form__item form__item--passwordConfirm">
                <label for="password">
                    {{ $t('form.passwordRepeat') }}
                </label>
                <Field
                    as="input"
                    name="passwordConfirm"
                    type="password"
                    minlength="8"
                    v-model="passwordConfirm"
                    id="formRegisterPasswordConfirm"
                    class="formInput__password"
                />
                <div
                    v-if="errors.passwordConfirm"
                    class="alert"
                >
                    {{ $t(errors.passwordConfirm) }}
                </div>
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
    </Form>
</template>

<script>
import { defineComponent } from 'vue';
// import firebase from 'firebase/compat/app';
//import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
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
    components: {
        Form,
        Field,
    },
    data() {
        const schema = yup.object().shape({
            email: yup.string().required('errorMessage.emailRequired').trim().email('errorMessage.emailFormat'),
            password: yup.string().required().min(8, 'errorMessage.passwordMinLength'),
            passwordConfirm: yup.string().oneOf([yup.ref('password')], 'errorMessage.passwordsNotMatch'),
        });
        return {
            schema,
            username: '',
            //email: '',
            password: '',
            passwordConfirm: '',
            error: '',
        };
    },
    methods: {
        /*async submitData() {
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
        },*/
        submitData(values) {
            console.log(values);
        },
    },
});
</script>

<style lang="scss">
.form--register {
    background-color: rgba(4, 226, 255, 0.274);
}
</style>
