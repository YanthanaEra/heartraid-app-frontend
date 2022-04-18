<template>
    <header class="page__header">
        <div class="page__headerContent">
            <nav class="nav nav--main">
                <ul class="nav__bar">
                    <li class="nav__item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/dashboard">Dashboard</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/chat-rooms">Chat Rooms</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/styles-overview">Styles</router-link>
                    </li>
                </ul>
            </nav>
            <div class="pageHeader__left">
                <ul class="nav__bar">
                    <li class="nav__item">
                        <router-link to="/profile">Profile</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/admin/users">Admin Users</router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to="/chats">Chats</router-link>
                        <div class="nav__dropdown">
                            <ul class="nav__subList">
                                <li class="nav__subItem">
                                    <router-link to="/chat">Chat mit XY</router-link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav__item">
                        <select
                            class="langSwitcher"
                            v-model="lang"
                            @change="handleChange($event)"
                        >
                            <option value="en">English</option>
                            <option value="de">Deutsch</option>
                        </select>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'PageHeader',
    props: {},
    data: function () {
        const lang = localStorage.getItem('lang') || 'en';
        return {
            lang: lang,
        };
    },
    methods: {
        handleChange(event) {
            localStorage.setItem('lang', event.target.value);
            window.location.reload();
        },
    },
});
</script>
