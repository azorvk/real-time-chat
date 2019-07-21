<template lang="pug">
v-dialog(v-model='showAlert', width='500', persistent)
    template(v-slot:activator='{ on }')
    v-card
        v-card-title.headline.grey.darken-2 Choose your username
        v-card-text
            form(@submit='setCurrentUser')
                v-text-field(v-model='username', color='grey')       
        v-divider
        v-card-actions
            v-spacer
            v-btn(color='grey darken-2', @click='setCurrentUser') OK

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { store } from '~/front/store'
import { socket } from '~/front/socketio'
import { User } from '~/common/User'

@Component
export default class TypeBox extends Vue {
  username = ''

  get showAlert() {
    return store.state.currentUser == undefined
  }

  setCurrentUser(e: any) {
    e.preventDefault()

    if (this.username) {
      const user: User = {
        username: this.username
      }
      store.commit('setCurrentUser', user)
      socket.emit('new_user', user)

      const typeBox = document.querySelector("#typebox") as HTMLElement
      setTimeout(() => typeBox.focus(), 10)
    }
  }
}
</script>