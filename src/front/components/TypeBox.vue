<template lang="pug">
v-card.typebox-container
    form(@submit='sendMessage')
        v-card-text
            input#typebox(placeholder='Type your message...', v-model='message')  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { store } from '~/front/store'
import { socket } from '~/front/socketio'
import { Message } from '~/common/Message';

@Component
export default class TypeBox extends Vue {
  message = ''

  sendMessage(e: any) {
    e.preventDefault()
    const currentUser = store.state.currentUser
    if (currentUser && this.message != '') {
      const message: Message = {
        content: this.message,
        author: currentUser,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      }

      store.commit('insertMessage', message)
      socket.emit('new_message', message)
    }

    this.message = ''
  }
}
</script>

<style scoped>
.typebox-container {
  position: absolute;
  bottom: 15px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  border-radius: 9px;
}

input {
  width: 100%;
  height: 15px;
}

input:focus {
  outline: none;
}
</style>