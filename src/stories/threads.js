import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { findById, docToResource } from '@/helper'
import users from './users'
import authentication from './authentication'
import max from './index.js'
import forums from './forums.js'
import posts from './posts.js'
import chunk from 'lodash/chunk'

export default defineStore('threads', {
  state: () => ({
    items: []
  }),
  getters: {
    thread() {
      const usersStore = users()
      return (id) => {
        const thread = findById(this.items, id)
        if (!thread) return {}
        // const that = this
        return {
          ...thread,
          // author: '', insted using it by that we will change it to getters to be reactive
          get author() {
            return findById(usersStore?.items, thread?.userId)
          },
          get replaiesCount() {
            return thread?.posts?.length - 1 ?? 0
          },
          get contributorsCount() {
            if (!thread.contributors) return 0
            // to make this updated we have to  appendThreadToContributors fnction
            return thread?.contributors?.length ?? 0
          }
        }
      }
    }
  },
  actions: {
    async createThread({ forumId, title, text }) {
      // try to shift them to glbaly to access them
      const authStore = authentication()
      const store = max()
      const forumStore = forums()
      const postStore = posts()

      const userId = authStore.id
      const publishedAt = firebase.firestore.FieldValue.serverTimestamp()
      const threadRef = firebase.firestore().collection('threads').doc()
      const thread = { forumId, title, publishedAt, userId, id: threadRef.id }
      const userRef = firebase.firestore().collection('users').doc(userId)
      const formRef = firebase.firestore().collection('forums').doc(forumId)
      const batch = firebase.firestore().batch()

      batch.set(threadRef, thread)
      batch.update(userRef, {
        threads: firebase.firestore.FieldValue.arrayUnion(threadRef.id)
      })
      batch.update(formRef, {
        threads: firebase.firestore.FieldValue.arrayUnion(threadRef.id)
      })

      await batch.commit()
      const newThread = await threadRef.get()
      store.setItem('threads', { ...newThread.data(), id: newThread.id })
      forumStore.appendThreadToFourm({ forumId, threadId: threadRef.id })
      this.appendThreadToUser({ userId, threadId: threadRef.id })

      await postStore.addPost({ text, threadId: threadRef.id, firstInThread: true })

      return findById(this.items, threadRef.id)
    },
    async updateThread(payload) {
      const postStore = posts()
      const store = max()

      const thread = findById(this.items, payload.id)
      const post = findById(postStore.items, thread.posts[0])
      let newThread = { ...thread, title: payload.title }
      let newPost = { ...post, text: payload.text }
      const threadRef = firebase.firestore().collection('threads').doc(payload.id)
      const postRef = firebase.firestore().collection('posts').doc(post.id)
      const batch = firebase.firestore().batch()

      batch.update(threadRef, newThread)
      batch.update(postRef, newPost)
      await batch.commit()

      newThread = await threadRef.get()
      newPost = await postRef.get()

      store.setItem('posts', newPost)
      store.setItem('threads', newThread)

      return docToResource(newThread)
    },
    featchThread(id, once = false, onSnapShot = null) {
      const store = max()
      return store.featchItem('threads', id, null, once, onSnapShot)
    },
    featchThreads(id) {
      const store = max()
      return store.featchItems(id, 'threads')
    },
    appendThreadToUser(payload) {
      const usersStore = users()
      const user = findById(usersStore.items, payload.userId)
      if (!user) {
        console.warn("can't find user at appendThreadToUser")
        return
      }
      user.threads = user.threads || []
      user.threads.push(payload.threadId)
    },
    appendThreadToContributors(payload) {
      const contribut = findById(this.items, payload.userId)
      if (!contribut) {
        console.warn("can't find contribut at appendThreadToContributors")
        return
      }
      contribut.contributors = contribut.contributors || []
      if (!contribut.contributors.includes(payload.threadId)) {
        contribut.contributors.push(payload.threadId)
      }
    },
    async feathThreadsByPage(ids, page, perPage = 10) {
      // clear the old threads every time we invoke the function
      this.items = []
      const chinks = chunk(ids, perPage)
      const limtedIds = chinks[page - 1]
      return this.featchThreads(limtedIds)
    }
  }
})
