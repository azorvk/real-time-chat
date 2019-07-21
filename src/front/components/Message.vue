<template lang="pug">
div
    span.author {{ message.author.username }}
    v-card.msg 
        v-card-text
          div.content {{ message.content }}
          div.timestamp {{ message.time }}
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Message as MessageInterface } from '~/common/Message'

@Component
export default class Message extends Vue {
  @Prop() readonly message: MessageInterface
}

</script>


<style scoped>
.author {
  color: white;
}

.msg {
  margin-bottom: 15px;
}

.content {
  width: 90%;
}

.timestamp {
  text-align: right;
  width: 10%;
}

.content,
.timestamp {
  display: inline-block;
}
</style>

