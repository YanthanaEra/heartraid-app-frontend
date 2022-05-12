<template>
    <div class="page__content page__content--chatOverview">
        <div class="content">
            <h1>Admin - Users ( {{ usersCounter }} )</h1>
            <div class="grid">
                <div class="grid__item">
                    <table class="adminUserList">
                        <thead>
                            <tr>
                                <th class="adminUserList__td">ID</th>
                                <th class="adminUserList__td">E-Mail</th>
                                <th class="adminUserList__td">Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(user, index) in userList"
                                :key="index"
                                class="adminUserList__tr"
                            >
                                <td class="adminUserList__td">
                                    {{ user.id }}
                                </td>
                                <td class="adminUserList__td">
                                    {{ user.attributes.email }}
                                </td>
                                <td class="adminUserList__td">
                                    {{ user.attributes.username }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AdminUsersPage',
    components: {},
    data() {
        return {
            userList: this.$store.state.adminUserList,
            userItems: 0,
        };
    },
    computed: {
        usersCounter() {
            return Object.keys(this.userList).length;
        },
    },
});
</script>

<style lang="scss">
@import '@/styles/scss/global/global';

.adminUserList {
    width: 100%;
    padding: 0;
    margin: 0;
    border: 1px solid $white;
}
.adminUserList__td {
    border: 1px solid $white;
    padding: 10px 15px;
    text-align: left;
}
</style>
