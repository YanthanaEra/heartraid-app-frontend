<template>
    <p>App Data: {{ appWidth }}, {{ appHeight }}, {{ appHeaderHeight }}, {{ appLanguage }}</p>
    <PageHeader
        ref="pageHeader"
        v-model="appHeaderHeight"
        :height="appHeaderHeight"
        :appLanguage="appLanguage"
    />
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
        const appLanguageConst = localStorage.getItem('lang') || 'en';
        return {
            appHeight: document.documentElement.clientHeight,
            appWidth: document.documentElement.clientWidth,
            appHeaderHeight: 0,
            appLanguage: appLanguageConst,
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
    computed: {
        dateToday() {
            return new Date().toISOString().slice(0, 10);
        },
    },
    methods: {
        setNewPageHeaderHeight() {
            const getPageHeaderHeight = this.$refs.pageHeader.$el.clientHeight;
            this.appHeaderHeight = getPageHeaderHeight;
        },
        getAppDimensions() {
            this.appWidth = document.documentElement.clientWidth;
            this.appHeight = document.documentElement.clientHeight;
            this.setNewPageHeaderHeight();
        },
    },
    mounted() {
        window.addEventListener('resize', this.getAppDimensions);
        this.setNewPageHeaderHeight();
    },
    unmounted() {
        window.removeEventListener('resize', this.getAppDimensions);
    },
});
</script>

<style lang="scss">
@import './styles/scss/main.scss';
</style>
