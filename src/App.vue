<template>
    <PageHeader />
    <router-view />
</template>

<script>
import { defineComponent } from 'vue';
import PageHeader from '@/components/layout/pageHeader.vue';

export default defineComponent({
    name: 'AppHeartRaid',
    components: {
        PageHeader,
    },
});
</script>

<style lang="scss">
@import './styles/scss/main.scss';
</style>
