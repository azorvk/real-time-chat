<template lang="pug">
div(v-bar)#messages
  div
    Message(v-for='(message, index) in messages' 
    :key='index'
    :message='message') 
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import Message from '~components/Message.vue'
import { store } from '~/front/store'
import { socket } from '~/front/socketio'

socket.on("new_message", function (msg: any) {
  store.commit("insertMessage", msg);
})

@Component({
  components: {
    Message
  }
})
export default class Messages extends Vue {

  messages = store.state.messages

  @Watch('messages')
  onMessagesChanged() {
    const messagesBox = document.querySelector<HTMLElement>("#messages > div") as HTMLElement
    setTimeout(() => messagesBox.scrollTop = messagesBox.clientHeight + 900000, 10)
  }
}
</script>

<style>
#messages {
  height: calc(100vh - 170px);
  overflow: auto;
}

.vb > .vb-dragger {
  z-index: 5;
  width: 12px;
  right: 0;
}

.vb > .vb-dragger > .vb-dragger-styler {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: rotate3d(0, 0, 0, 0);
  transform: rotate3d(0, 0, 0, 0);
  -webkit-transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  transition: background-color 100ms ease-out, margin 100ms ease-out,
    height 100ms ease-out;
  background-color: rgba(48, 121, 244, 0.1);
  margin: 5px 5px 5px 0;
  border-radius: 20px;
  height: calc(100% - 10px);
  display: block;
}

.vb.vb-scrolling-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.3);
}

.vb > .vb-dragger:hover > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
  margin: 0px;
  height: 100%;
}

.vb.vb-dragging-phantom > .vb-dragger > .vb-dragger-styler {
  background-color: rgba(48, 121, 244, 0.5);
}

.vb-content {
  width: calc(100% + 20px) !important;
}
</style>


