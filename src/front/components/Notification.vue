<template lang="pug">
v-snackbar.notification(
    v-if='notification',
    v-model='notification.isActive',
    multi-line, top, :color='notificationColor', 
    :timeout='3000') {{ notification.message }}

    v-btn(flat, @click='notification.isActive = false') Close

</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { store } from '~/front/store'
import { NotificationType } from '~/common/Notification';

@Component
export default class Notification extends Vue {
  notification = store.state.notification

  get notificationColor() {
    const colorMap = {
      [NotificationType.Error]: 'red',
      [NotificationType.Info]: 'blue'
    }

    return this.notification.type ? colorMap[this.notification.type] : 'red'
  }

}
</script>
