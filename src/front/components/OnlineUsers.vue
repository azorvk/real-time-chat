<template lang="pug">
div
    v-list.pt-0()
        v-list-tile(v-for='user in users', :key='user.username', @click='')
            v-list-tile-action
                v-icon person
            v-list-tile-content
            v-list-tile-title {{ user.username }}
            v-icon(color='green') fiber_manual_record

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { store } from '~/front/store'
import { socket } from '~/front/socketio'
import axios from 'axios'

socket.on('new_user', function (user: any) {
  store.commit('addOnlineUser', user)
})

socket.on('user_left', function (socketId: any) {
  store.commit('removeUserFromOnlineList', socketId)
})

axios.get('/online-users').then(res => {
  store.commit('setOnlineUsers', res.data)
})

@Component
export default class Chat extends Vue {
  users = store.state.currentOnlineUsers
}
</script>


