<template lang="pug">
v-card.typebox-container(@click='focusTypeBox')
    form(@submit.prevent='sendMessage')
        v-card-text
            input#typebox(autocomplete='off', placeholder='Type your message...', v-model='message')  
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { store } from '~/front/store'
import { socket } from '~/front/socketio'
import { Message } from '~/common/Message'
import { NotificationType } from '~/common/Notification'

@Component
export default class TypeBox extends Vue {
  message = ''

  focusTypeBox() {
    const typebox = document.querySelector('#typebox') as HTMLElement
    typebox.focus()
  }

  sendMessage() {
    const currentUser = store.state.currentUser
    if (currentUser && this.message != '') {
      const message: Message = {
        content: this.message,
        author: currentUser,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`
      }

      store.commit('insertMessage', message)
      socket.emit('new_message', message)
    } else {
      store.commit('notify', { message: 'Message cannot be blank.', type: NotificationType.Error })
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