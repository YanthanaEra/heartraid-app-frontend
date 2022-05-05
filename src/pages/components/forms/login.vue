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
        <div class="form__row">
            <div class="form__item form__item--username">
                <label for="email">{{ $t('form.email') }}</label>
                <Field
                    as="input"
                    name="loginEmail"
                    type="email"
                    id="formLoginEmail"
                    class="formInput__email"
                    placeholder="your@mailaddress.com"
                />
                <transition name="fade">
                    <div
                        v-if="errors.loginEmail"
                        class="alert"
                    >
                        {{ $t(errors.loginEmail) }}
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
                    name="loginPassword"
                    type="password"
                    minlength="8"
                    v-model="password"
                    id="formLoginPassword"
                    class="formInput__password"
                />
                <transition name="fade">
                    <div
                        v-if="errors.loginPassword"
                        class="alert"
                    >
                        {{ $t(errors.loginPassword) }}
                    </div>
                </transition>
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--submit">
                <input
                    type="submit"
                    :value="$t('form.loginNow')"
                    class="button"
                />
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
            loginEmail: yup.string().required('errorMessage.emailRequired').trim().email('errorMessage.emailFormat'),
            loginPassword: yup.string().required().min(8, 'errorMessage.passwordMinLength'),
        });
        return {
            schema,
            email: '',
            password: '',
        };
    },
    props: {},
    methods: {
        submitData(values) {
            console.log(values);
        },
    },
});
</script>

<style lang="scss">
.form--login {
    background-color: rgba(255, 4, 192, 0.274);
}
</style>
