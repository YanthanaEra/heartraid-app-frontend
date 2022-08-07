<template>
    <div>
        <section class="page__content page__content--home">
            <div class="content">
                <h1 v-html="$t('homepage.headline')"></h1>
                <div class="grid grid--home">
                    <div class="grid__itemRegister">
                        <FormRegister />
                    </div>
                    <div class="grid__itemLogin">
                        <FormLogin />
                    </div>
                </div>
            </div>
        </section>
        <section class="page__content page__content--home">
            <div class="content">
                <h2>Section 2</h2>
                <div class="grid grid--home">Content</div>
            </div>
        </section>
        <section class="page__content page__content--home">
            <div class="content">
                <h2>Section 3</h2>
                <div class="grid grid--home">Content</div>
            </div>
        </section>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import FormLogin from '@/pages/components/forms/login.vue';
import FormRegister from '@/pages/components/forms/register.vue';

export default defineComponent({
    name: 'HomePage',
    components: {
        FormLogin,
        FormRegister,
    },
    computed: {
        windowWidth() {
            return window.innerWidth;
        },
    },
});
</script>

<style lang="scss">
@import '@/styles/scss/global/global';
.page__content--home {
    height: calc($window-height - $page-header-height);
    background-color: rgba(255, 0, 0, 0.146);

    &:nth-child(even) {
        background-color: rgba(0, 183, 255, 0.294);
    }
}
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
