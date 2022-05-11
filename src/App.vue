<template>
    <PageHeader />
    <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import PageHeader from '@/pages/components/layout/pageHeader.vue';

export default defineComponent({
    name: 'AppHeartRaid',
    components: {
        PageHeader,
    },
    created() {
        this.$store.dispatch('autoSignIn');
        console.log('created store:', this.$store);
    },
});
</script>

<style lang="scss">
@import './styles/scss/main.scss';
</style>
