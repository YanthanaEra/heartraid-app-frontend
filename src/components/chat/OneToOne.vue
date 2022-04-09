<template>
    <div class="message-section">
        <h3 class="message-thread-heading"></h3>
        <ul class="message-list" ref="list">
            <!-- message v-for="message in messages" :key="message.id" :message="message"> </!-->
        </ul>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
export default {
    name: 'MessageSection',
};
</script>
