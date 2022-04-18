<template>
    <section class="page__content page__content--login">
        <div class="content">
            <h1>Login</h1>
            <div class="grid grid--home">
                <div class="grid__itemLogin">
                    <FormLogin />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import FormLogin from '@/pages/components/forms/login.vue';

export default defineComponent({
    name: 'LoginPage',
    components: {
        FormLogin,
    },
});
</script>

<style lang="scss">
.grid--login {
    flex-direction: row;
    gap: 10px 20px;
}
</style>
