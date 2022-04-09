<template>
    <form
        action=""
        class="form form--login"
    >
        <h3 class="h2 font-neon">
            {{ $t('form.login') }}
        </h3>
        <div class="form__row">
            <div class="form__item form__item--username">
                <label for="username">{{ $t('form.username') }}</label>
                <input
                    id="formLoginUsername"
                    type="text"
                    name="username"
                    class="formInput__username"
                />
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--password">
                <label for="password">
                    {{ $t('form.password') }}
                </label>
                <input
                    id="formLoginPassword"
                    type="text"
                    name="password"
                    class="formInput__password"
                />
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
    </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'formLogin',
    props: {},
});
</script>

<style lang="scss">
.form--login {
    background-color: rgba(255, 4, 192, 0.274);
}
</style>
