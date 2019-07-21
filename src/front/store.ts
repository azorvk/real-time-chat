import Vue from 'vue'
import Vuex from 'vuex'
import { Message } from '~/common/Message'
import { User } from '~/common/User'
import { Notification } from '~/common/Notification'

Vue.use(Vuex)

interface State {
  messages: Message[],
  currentUser: User | undefined,
  currentOnlineUsers: User[],
  notification: Notification
}

export const store = new Vuex.Store({
  state: {
    messages: [],
    currentUser: undefined,
    currentOnlineUsers: [],
    notification: { message: '', isActive: false, type: undefined }
  },
  mutations: {
    notify: (state: State, notification: Notification) => {
      state.notification.message = notification.message 
      state.notification.isActive = true
      state.notification.type = notification.type
    },
    insertMessage: (state: State, message: Message) => {
      state.messages.push(message)
    },
    setCurrentUser: (state: State, user: User) => {
      state.currentUser = user
      state.currentOnlineUsers.push(user)
    },
    addOnlineUser: (state: State, user: User) => {
      state.currentOnlineUsers.push(user)
    },
    removeUserFromOnlineList: (state: State, socketId: string) => {
      state.currentOnlineUsers.forEach((user, index) => {
        if (user.socketId == socketId) {
          state.currentOnlineUsers.splice(index, 1)
        }
      })
    },
    setOnlineUsers: (state: State, users: User[]) => {
      state.currentOnlineUsers.push(...users)
    }
  },
  actions: {

  }
})
