<template lang="pug">
 v-app(dark)
  v-navigation-drawer(v-model='primaryDrawer.model', clipped, floating, absolute, overflow, app)
    OnlineUsers
  v-toolbar(:clipped-left='primaryDrawer.clipped', app, absolute)
    v-btn(@click.stop='primaryDrawer.model = !primaryDrawer.model' , fab)
        v-icon people
    v-toolbar-title Real-time Chat
  v-content()
    v-container(fluid)
      v-layout(align-center, justify-center)
        v-flex(xs10)
          Messages
    TypeBox

  SetUser

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Messages from '~components/Messages.vue'
import OnlineUsers from '~components/OnlineUsers.vue'
import TypeBox from '~components/TypeBox.vue'
import SetUser from '~components/SetUser.vue'

@Component({
  components: {
    Messages, OnlineUsers, TypeBox, SetUser
  }
})
export default class Chat extends Vue {
  primaryDrawer = {
    model: null,
    clipped: true,
    floating: false
  }
}
</script>
