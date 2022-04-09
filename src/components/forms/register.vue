<template>
    <form
        action=""
        class="form form--register"
    >
        <h3 class="h2 font-neon">
            {{ $t('form.register') }}
        </h3>
        <div class="form__row">
            <div class="form__item form__item--username">
                <label for="username">{{ $t('form.username') }}</label>
                <input
                    id="formRegisterUsername"
                    type="text"
                    name="username"
                    class="formInput__username"
                />
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--username">
                <label for="email">{{ $t('form.email') }}</label>
                <input
                    id="formRegisterEmail"
                    type="text"
                    name="email"
                    class="formInput__email"
                />
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--gender">
                <label for="gender">{{ $t('form.gender') }}</label>
                <select
                    name="gender"
                    id="formRegisterGender"
                >
                    <option value="genderDiverse">{{ $t('form.diverse') }}</option>
                    <option value="genderFemale">{{ $t('form.female') }}</option>
                    <option value="genderMale">{{ $t('form.male') }}</option>
                </select>
            </div>
            <div class="form__item form__item--birthday">
                <div class="form__item form__item--birthday">
                    <label for="birthDay">{{ $t('form.birthday') }}</label>
                    <select
                        name="birthDay"
                        id="formRegisterBirthDay"
                    >
                        <option value="birthdayDay">{{ $t('form.day') }}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                    </select>
                </div>
                <div class="form__item form__item--birthday">
                    <label for="birthdayMonth">{{ $t('form.birthMonth') }}</label>
                    <select
                        id="formRegisterBirthMonth"
                        name="birthdayMonth"
                    >
                        <option value="birthdayMonth">{{ $t('month.month') }}</option>
                        <option value="january">{{ $t('month.january') }}</option>
                        <option value="february">{{ $t('month.february') }}</option>
                        <option value="march">{{ $t('month.march') }}</option>
                    </select>
                </div>
                <div class="form__item form__item--birthday">
                    <label for="birthyear">{{ $t('form.birthYear') }}</label>
                    <select
                        name="birthyear"
                        id="formRegisterBirthYear"
                    >
                        <option value="1922">1922</option>
                        <option value="1923">1923</option>
                        <option value="1924">1924</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--password">
                <label for="password">
                    {{ $t('form.password') }}
                </label>
                <input
                    type="password"
                    name="password"
                    id="formRegisterPassword"
                    class="formInput__password"
                />
            </div>
            <div class="form__item form__item--passwordRepeat">
                <label for="password">{{ $t('form.passwordRepeat') }}</label>
                <input
                    id="formRegisterPasswordRepeat"
                    type="password"
                    name="password"
                    class="formInput__password"
                />
            </div>
        </div>
        <div class="form__row">
            <div class="form__item form__item--submit">
                <input
                    type="submit"
                    :value="$t('form.registerNow')"
                    class="button"
                />
            </div>
        </div>
    </form>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'formRegister',
    props: {},
});
</script>

<style lang="scss">
.form--register {
    background-color: rgba(4, 226, 255, 0.274);
}
</style>
