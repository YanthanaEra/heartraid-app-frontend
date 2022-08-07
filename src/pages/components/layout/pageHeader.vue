<template>
    <header
        id="pageHeader"
        class="page__header"
    >
        <div class="page__headerContent">
            <nav class="nav nav--main">
                <ul class="nav__bar">
                    <li class="nav__item">
                        <router-link to="/">
                            <LogoSvg />
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/chat-rooms">Chat Rooms</router-link>
                    </li>
                </ul>
            </nav>
            <div class="pageHeader__left">
                <ul class="nav__bar">
                    <li class="nav__item">
                        <select
                            class="langSwitcher"
                            v-model="lang"
                            @change="setAppLanguage($event)"
                        >
                            <option value="en">English</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </li>
                    <li class="nav__item">
                        <router-link to="/profile">Profile</router-link>
                        <div class="nav__dropdown">
                            <ul class="nav__subList">
                                <li class="nav__subItem">
                                    <router-link to="/chats">Nachrichten</router-link>
                                </li>
                                <li class="nav__subList">
                                    <button @click="signOut()">Logout</button>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { defineComponent } from 'vue';
import LogoSvg from '@/pages/components/layout/logoSvg.vue';

export default defineComponent({
    name: 'PageHeader',
    components: {
        LogoSvg,
    },
    props: {
        height: { type: Number, default: 0 },
        appLanguage: { type: String, default: 'en' },
    },
    data: function () {
        return {
            lang: this.appLanguage,
        };
    },
    methods: {
        setAppLanguage(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
        async signOut() {
            try {
                await this.$store.dispatch('signOut');
                this.$router.push('/');
                console.log('erfolgreich ausgeloggt');
            } catch (error) {
                console.log(error);
            }
        },
    },
});
</script>
