<template lang="pug">
  #app
    Chat

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chat from '~components/Chat.vue';

@Component({
  components: {
    Chat,
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
