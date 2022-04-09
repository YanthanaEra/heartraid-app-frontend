<template>
    <section class="page__content page__content--home">
        <div class="content">
            <!-- HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /-->
            <h1 v-html="$t('homepage.headline')"></h1>
            <div class="grid grid--home">
                <div class="grid__itemLogin">
                    <FormLogin />
                </div>
                <div class="grid__itemRegister">
                    <FormRegister />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import FormLogin from '@/components/forms/login.vue';
import FormRegister from '@/components/forms/register.vue';

export default defineComponent({
    name: 'HomePage',
    components: {
        FormLogin,
        FormRegister,
    },
});
</script>

<style lang="scss">
.grid--home {
    flex-direction: row;
    gap: 10px 20px;
    .grid__itemLogin {
        flex-direction: column;
        width: 30%;
    }
    .grid__itemRegister {
        flex-grow: 1;
        flex-direction: column;
    }
}
</style>
