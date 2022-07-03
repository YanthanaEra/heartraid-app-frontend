<template>
    <div class="page__content page__content--chatOverview">
        <div class="content">
            <h1>Backend</h1>
            <div class="grid">
                <div class="grid__item">
                    <h3>Current Loggend In User</h3>
                    <div>
                        <code>
                            <pre>userCurrentData: {{ userCurrentData }}</pre>
                        </code>
                    </div>
                </div>
                <div class="grid__item">
                    <h3>Last registered users (6)</h3>
                    <div>
                        <code>
                            <pre>userListNewbies: {{ userListNewbies }}</pre>
                        </code>
                    </div>
                </div>
                <div class="grid__item">
                    <h3>Chat Rooms List</h3>
                    <div>
                        <code>
                            <pre>chatRoomsOverviewData: {{ chatRoomsOverviewData }}</pre>
                        </code>
                    </div>
                </div>
                <div class="grid__item">
                    <h3>Chat Room - Anime</h3>
                    <div>
                        <code>
                            <pre>roomAnimeData: {{ roomAnimeData }}</pre>
                        </code>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.grid {
    gap: 3rem;
    flex-wrap: wrap;
    flex-direction: row;
}
.grid__item {
    flex-direction: column;
    flex-grow: 1;
    max-width: calc(50% - 1.5rem);
}
code {
    background-color: rgba(0, 0, 0, 0.4);
    display: block;
    border: 1px solid #fff;
    overflow-y: auto;
    max-height: 300px;
    padding: 1rem;
    border-radius: 10px;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BackendPage',
    components: {},
    props: {},
    data: function () {
        const lang = localStorage.getItem('lang') || 'en';
        return {
            lang: lang,
            userListNewbies: this.$store.state.userListNewbiesData,
            userCurrentData: this.$store.state.userCurrentData,
            chatRoomsOverviewData: this.$store.state.chatRoomsOverviewData,
            roomAnimeData: this.$store.state.roomAnimeData,
        };
    },
    methods: {},
});
</script>
