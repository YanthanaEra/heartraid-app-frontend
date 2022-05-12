<template>
    <div class="page__content page__content--profile">
        <div class="content">
            <h1>User Profil von {{ user.username }}</h1>
            <div class="grid">
                <div class="grid__item">
                    <table>
                        <thead>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Username</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Vorname / Nachname</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Geburtstag</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Geschlecht</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Intressiert an</td>
                                <td>Neuen Freunden</td>
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
    name: 'UserDetailsPage',
    components: {},
    data() {
        return {
            user: this.$store.state.userCurrentData,
        };
    },
});
</script>
