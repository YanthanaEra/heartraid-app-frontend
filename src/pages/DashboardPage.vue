<template>
    <div class="page__content page__content--dashboard">
        <div class="content">
            <h1 class="font-neon">
                {{ $t('dashboard.headline') }}
            </h1>
            <div class="dashboard">
                <div class="dashboard__column1">
                    {{ $t('dashboard.text') }}
                </div>
                <div class="dashboard__column2"></div>
                <div class="dashboard__column3"></div>
                <div class="dashboard__column4">
                    <div class="dashboardUserLists">
                        <UserListNewbies />
                    </div>
                </div>
                <!-- .dashboard__column4 -->
            </div>
            <!-- .dashboard-->
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/scss/global/global';

.dashboard {
    display: flex;
    flex-direction: row;
    gap: 10px 20px;
}
</style>

<script>
import { defineComponent } from 'vue';
import UserListNewbies from '@/pages/components/userLists/newbies.vue';

export default defineComponent({
    name: 'DashboardPage',
    components: {
        UserListNewbies,
    },
    data() {
        return {
            dashboard: this.$store.state.dashboardData,
        };
    },
});
</script>
