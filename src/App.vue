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
    data() {
        return {
            isAutoSignOutHasPassed: this.$store.getters.isAutoSignOutHasPassed,
        };
    },
    created() {
        this.$store.dispatch('autoSignIn');
        console.log('created store:', this.$store);
    },
    watch: {
        '$store.getters.isAutoSignOutHasPassed': function () {
            console.log('watch.isAutoSignOutHasPassed', this.$store.getters.isAutoSignOutHasPassed);
            if (this.$store.getters.isAutoSignOutHasPassed) {
                if (this.$store.getters.isAutoSignOutHasPassed) {
                    this.$store.dispatch('autoSignOutHasPassedAction', {
                        flag: false,
                    });
                    this.$router.push('/');
                }
            }
        },
    },
});
</script>

<style lang="scss">
@import './styles/scss/main.scss';
</style>
