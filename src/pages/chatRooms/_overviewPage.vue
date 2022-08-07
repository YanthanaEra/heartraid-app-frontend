<template>
    <div class="page__content page__content--chatOverview">
        <div class="content">
            <h1 class="page__headline">Chat Rooms</h1>
            <div class="grid grid--chatRooms">
                <div class="grid__item grid__item--filter">
                    <h2>Filter</h2>
                    <div class="chatRoomsFilter">
                        <select
                            name="chatRoomsFilter"
                            id="chatRoomsFilter"
                        >
                            <option value="chatRoomsFilter--alphabetical">CHATROOMS_FILTER_OPTION_ALPHABETICAL</option>
                            <option value="chatRoomsFilter--currentvisitors">
                                CHATROOMS_FILTER_OPTION_CURRENTVISITORS
                            </option>
                        </select>
                    </div>
                </div>
                <div class="grid__item grid__item--rooms">
                    <h2>Liste aller Chaträume</h2>
                    <div class="chatRooms">
                        <ul class="chatRooms__list">
                            <li
                                v-for="rooms in chatRooms"
                                :key="rooms.id"
                                class="chatRooms__listItem"
                            >
                                <a
                                    :href="rooms.roomPath"
                                    class="chatRoom__cardLink"
                                >
                                    <div class="chatRoom__contentLeft">
                                        <div class="chatRoom__avatar avatar">
                                            <img
                                                src="/img/user-pictures/default/avatar_small_d.png"
                                                :alt="rooms.title"
                                                width="62"
                                                height="62"
                                            />
                                        </div>
                                        <span class="chatRoom__visitor">[ {{ rooms.currentVisitors }} ]</span>
                                    </div>
                                    <div class="chatRoom__content">
                                        <h2 class="chatRoom__title">
                                            {{ $t('chatRooms.' + rooms.title) }}
                                        </h2>
                                        <p class="chatRoom__description">
                                            {{ $t('chatRooms.' + rooms.description) }}
                                        </p>
                                    </div>
                                    <div class="chatRoom__cardLinkHover">
                                        <div class="chatRoom__cardLinkHoverText">
                                            💬 {{ $t('chatRooms.GO_TO_ROOM') }}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import '@/styles/scss/global/global';

.grid--chatRooms {
    flex-direction: row;
    gap: 2rem;

    .grid__item {
        flex-grow: 1;
    }
}
.grid__item--filter {
    flex-direction: column;
}
.grid__item--rooms {
    flex-direction: column;
}

.chatRooms {
    display: flex;
    flex-direction: column;
}
.chatRooms__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    margin: 0;
}
.chatRooms__listItem {
    color: #333;
}
.chatRoom__cardLink {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    margin: 0;
    position: relative;
    overflow: hidden;

    &:hover {
        .chatRoom__cardLinkHover {
            display: flex;
        }
    }
}
.chatRoom__cardLinkHover {
    pointer-events: none;
    display: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($lips-dark, 0.7);
    -webkit-animation: backgroundColor 0.3s linear;
    -moz-animation: backgroundColor 0.3s linear;
    -o-animation: backgroundColor 0.3s linear;
    animation: backgroundColor 0.3s linear;
}
@keyframes backgroundColor {
    0% {
        background-color: rgba($white, 0);
    }
    100% {
        background-color: rgba($lips-dark, 0.7);
    }
}
.chatRoom__cardLinkHoverText {
    font-size: 2rem;
    -webkit-animation: fontSizeAnimation 0.6s linear;
    -moz-animation: fontSizeAnimation 0.6s linear;
    -o-animation: fontSizeAnimation 0.6s linear;
    animation: fontSizeAnimation 0.6s linear;
}
@keyframes fontSizeAnimation {
    0% {
        font-size: 2rem;
    }
    50% {
        font-size: 2.1rem;
    }
    100% {
        font-size: 2rem;
    }
}
.chatRoom__contentLeft {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.chatRoom__avatar {
    border-radius: 31px;
    overflow: hidden;
    width: 62px;
    height: 62px;
}
.chatRoom__visitor {
    margin-top: 6px;
    color: $gray-dark;
    font-weight: bold;
}
.chatRoom__content {
    flex-grow: 1;
    gap: 1rem;
    color: $gray-dark;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.chatRoom__title {
    color: $blue;
    font-size: 1.6rem;
    line-height: 1.6rem;
    letter-spacing: 0.06rem;
    font-weight: 800;
    margin-bottom: 0;
}
.chatRoom__description {
    margin-top: 0;
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatRoomsPage',
    data: function () {
        return {
            visitorsTotal: this.$store.state.chatRoomsOverviewData.roomsCurrentVisitorsTotal,
            chatRooms: this.$store.state.chatRoomsOverviewData.rooms,
            tags: this.$store.state.chatRoomsOverviewData.tags,
        };
    },
    components: {},
});
</script>
