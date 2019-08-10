<template lang="pug">
div
    .avatar-container
      avatar.avatar(:size='40', :username='message.author.username')
    .msg 
      .author.grey--text.text--lighten-5 {{ message.author.username }}
      .timestamp.grey--text {{ message.time }}
      .content {{ message.content }}
    .separator.grey.darken-3
  
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Message as MessageInterface } from '~/common/Message'
const avatar = require('vue-avatar')

@Component({
  components: {
    'avatar': avatar.Avatar
  }
})
export default class Message extends Vue {
  @Prop() readonly message: MessageInterface
}

</script>


<style scoped>
.separator {
  margin: 10px 0;
  height: 1px;
}

.avatar-container {
  position: absolute;
  display: inline-block;
  width: 50px;
}

.author {
  font-weight: bold;
  color: white;
  display: inline-block;
}

.msg {
  display: inline-block;
  margin-left: 55px;
  width: calc(100% - 55px);
}

.content {
  position: relative;
  top: 2px;
  width: 100%;
}

.timestamp {
  font-size: 10.5px;
  margin-left: 5px;
  display: inline-block;
}

.content,
.timestamp {
  display: inline-block;
}
</style>

