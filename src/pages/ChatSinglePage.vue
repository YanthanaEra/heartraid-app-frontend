<template>
    <div class="page__content page__content--chat">
        <div class="content">
            <h1>Chat 1 zu 1 mit XY</h1>
            <div class="grid">
                <div class="grid__item">
                    <ul class="chatUserList">
                        <li class="chatUserList__item">User XY</li>
                    </ul>
                </div>
                <div class="grid__item">Chat Bobbels</div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ChatSinglePage',
    components: {},
});
</script>
