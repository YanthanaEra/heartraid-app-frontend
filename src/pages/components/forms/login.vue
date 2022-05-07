<template>
    <Form
        @submit="submitData"
        :validation-schema="schema"
        v-slot="{ errors }"
        class="form form--login"
    >
        <h3 class="h2 font-neon">
            {{ $t('form.login') }}
        </h3>
        <div
            v-if="error"
            class="form__row"
        >
            <div class="alert">
                {{ $t(`errorMessage.${error}`) }}
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--username">
                <label for="email">{{ $t('form.email') }}</label>
                <Field
                    as="input"
                    name="email"
                    type="email"
                    id="formLoginEmail"
                    class="formInput__email"
                    placeholder="your@mailaddress.com"
                    validateOnBlur
                />
                <transition name="fade">
                    <div
                        v-if="errors.email"
                        class="alert"
                    >
                        {{ $t(errors.email) }}
                    </div>
                </transition>
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
                    id="formLoginPassword"
                    class="formInput__password"
                    validateOnBlur
                />
                <transition name="fade">
                    <div
                        v-if="errors.password"
                        class="alert"
                    >
                        {{ $t(errors.password) }}
                    </div>
                </transition>
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--submit">
                <button
                    type="submit"
                    class="button"
                >
                    <span
                        v-if="isLoading"
                        class="loadingIcon16"
                    >
                        <span class="loadingIcon16__icon"></span>
                    </span>
                    <span v-else>{{ $t('form.loginNow') }}</span>
                </button>
            </div>
        </div>
    </Form>
</template>

<script>
import { defineComponent } from 'vue';
import { Form, Field } from 'vee-validate';
import * as yup from 'yup';

export default defineComponent({
    name: 'formLogin',
    components: {
        Form,
        Field,
    },
    data() {
        const schema = yup.object().shape({
            email: yup.string().required('errorMessage.emailRequired').trim().email('errorMessage.emailFormat'),
            password: yup.string().required().min(8, 'errorMessage.passwordMinLength'),
        });
        return {
            schema,
            email: '',
            password: '',
            error: '',
            isLoading: false,
        };
    },
    props: {},
    methods: {
        submitData(values) {
            this.isLoading = true;
            this.error = '';
            console.log('login values:', values);
            this.$store
                .dispatch('signIn', {
                    email: values.email,
                    password: values.password,
                })
                .then(() => {
                    this.isLoading = false;
                    console.log('login erfolgreich');
                })
                .catch((error) => {
                    this.error = error.message;
                    this.isLoading = false;
                });
        },
    },
});
</script>

<style lang="scss">
@import '@/styles/scss/global/global';
.form--login {
    padding: 2.2rem 2rem;
    background-color: rgba($pink, 1);
    border-radius: 10px;
}
</style>
