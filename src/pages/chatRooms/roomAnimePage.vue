<template>
    <div class="page__content page__content--chatOverview">
        <div class="content">
            <h1 class="page__headline">Anime Chat</h1>
            <div class="grid grid--roomAnime">
                <div class="grid__item"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/scss/global/global';
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatRoomAnimePage',
    data: function () {
        return {
            roomAnimeData: this.$store.state.roomAnimeData,
            currentVisitors: this.$store.state.roomAnimeData.currentVisitors,
            visitorsList: this.$store.state.roomAnimeData.visitorsList,
            chatMessages: this.$store.state.roomAnimeData.chatMessages,
        };
    },
    components: {},
});
</script>
