import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { findById, docToResource } from '@/helper'
import posts from './posts.js'
import max from './index.js'
import threads from './threads.js'

export default defineStore('users', {
  state: () => ({
    items: []
  }),
  getters: {
    user(state) {
      const postStore = posts()
      const threadStore = threads()

      return (id) => {
        const user = findById(state.items, id)
        if (!user) return null
        // const that = this
        return {
          ...user,
          get posts() {
            return postStore.items.filter((e) => {
              return e.userId === user.id
            })
          },

          // authUser.postsCount() it will be authUser.postsCount
          get postsCount() {
            return user.postsCount ?? 0
          },

          get threads() {
            return threadStore.items.filter((e) => {
              return e.userId === user.id
            })
          },

          get threadIds() {
            return user.threads
          },

          get threadsCount() {
            return user.threads?.length ?? 0
          }
        }
      }
    }
  },
  actions: {
    featchUsers(userId) {
      const store = max()
      return store.featchItems(userId, 'users')
    },
    async setUser(user) {
      const store = max()

      const updates = {
        avatar: user.avatar ?? null,
        username: user.userName ?? null,
        name: user.name ?? null,
        bio: user.bio ?? null,
        email: user.email ?? null,
        website: user.website ?? null,
        location: user.location ?? null
      }
      const userRef = firebase.firestore().collection('users').doc(user.id)
      await userRef.update(updates)

      store.setItem('users', updates)
    },
    featchUser(userId) {
      const store = max()
      return store.featchItem('users', userId)
    },
    async createUser({ name, userName, email, avatar, id }) {
      const store = max()

      const registeredAt = firebase.firestore.FieldValue.serverTimestamp()
      const usernameLower = userName.toLowerCase()
      email = email.toLowerCase()
      const user = { name, email, registeredAt, usernameLower, avatar }
      const userRef = firebase.firestore().collection('users').doc(id)
      userRef.set(user)
      const newUser = await userRef.get()
      store.setItem('users', newUser)
      return docToResource(newUser)
    }
  }
})
