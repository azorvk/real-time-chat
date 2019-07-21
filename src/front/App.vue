<template lang="pug">
  #app
    Chat
    Notification

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Chat from '~components/Chat.vue'
import Notification from '~components/Notification.vue'

@Component({
  components: {
    Chat, Notification
  },
})
export default class App extends Vue { }
</script>

<style>
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

i {
  font-family: "Material Icons";
}

html {
  overflow-y: auto !important;
}
</style>
