<template>
    <div class="panelList">
        <h3 class="">
            {{ $t('userListNewbies.headline') }}
        </h3>
        <ul class="userList userList--newbies">
            <li
                class="userList__item"
                v-for="newby in userListNewbies"
                :key="newby.id"
            >
                <a
                    href="user"
                    ref="newuser"
                    class="userItem"
                    title="Go to Profile"
                >
                    <div
                        v-if="newby.status"
                        :title="newby.status"
                        class="userItem__status"
                        :class="`userItem__status--${newby.status}`"
                    ></div>
                    <div
                        class="userItem__avatar"
                        :class="`userItem__avatar--${newby.status}`"
                    >
                        <img
                            v-if="newby.image"
                            :src="newby.image"
                            :alt="newby.username"
                        />
                    </div>
                    <div class="userItem__text">
                        <div class="userItem__username">
                            {{ newby.username }}
                            <img
                                v-if="newby.gender"
                                :src="`/img/ui-icons/hr-icon-16-${newby.gender}.svg`"
                                :alt="newby.gender"
                            />
                        </div>
                        <div class="userItem__date">
                            {{ newby.registerTime }}
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Store from '@/store/index';

export default defineComponent({
    name: 'UserListNewbies',
    components: {},
    data() {
        return {
            userListNewbies: Store.state.userListNewbiesData,
        };
    },
});
</script>

<style lang="scss">
@import '@/styles/scss/global/global';

.panelList {
    background-color: $white;
    color: $gray-dark;
    border-radius: 4px;
    padding: 1rem 1.4rem 1rem 1rem;
    margin: 0;
}
.userList {
    margin: 0;
    padding: 0;
    list-style: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.userItem {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: stretch;
}
.userItem__status {
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    top: 13px;
    left: 52px;
    background-color: $gray-dark;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.398);
    transition: background-color 0.3s, box-shadow 0.3s;

    &--online {
        background-color: $green;
        box-shadow: 0 0 2px $green-dark, 0 0 10px $green, 0 0 3px 1px $green-dark inset;
    }
    &--offline {
        background-color: $red;
        box-shadow: 0 0 2px $red-dark, 0 0 10px $red, 0 0 3px 1px $red-dark inset;
    }
}
.userItem__avatar {
    width: 62px;
    height: 62px;
    border-radius: 33px;
    overflow: hidden;
    border: 2px solid $white;
    background-color: $gray-dark;
    background-image: url('@/assets/img/userPictures/avatar_small_default.png');
    transition: border-color 0.3s;

    &--online {
        border-color: $green-light;
    }
    &--offline {
        border-color: $red-light;
    }
}
.userItem__text {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.userItem__username {
    font-weight: 800;
}
</style>
