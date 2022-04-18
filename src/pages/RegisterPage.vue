<template>
    <section class="page__content page__content--register">
        <div class="content">
            <h1>Register</h1>
            <div class="grid grid--home">
                <div class="grid__itemRegister">
                    <FormRegister />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import FormRegister from '@/pages/components/forms/register.vue';

export default defineComponent({
    name: 'RegisterPage',
    components: {
        FormRegister,
    },
});
</script>

<style lang="scss">
.grid--register {
    flex-direction: row;
    gap: 10px 20px;
}
</style>
