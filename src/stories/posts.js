import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { findById } from '@/helper'
import authentication from './authentication'
import max from './index.js'
import threads from './threads.js'

export default defineStore('posts', {
  state: () => ({
    items: []
  }),
  getters: {},
  actions: {
    async addPost(post) {
      const authStore = authentication()
      const threadStore = threads()
      const store = max()
      post.userId = authStore.id
      post.publishedAt = firebase.firestore.FieldValue.serverTimestamp()
      post.firstInThread = post.firstInThread || false
      const batch = firebase.firestore().batch()
      const postRef = firebase.firestore().collection('posts').doc()
      const threadRef = firebase.firestore().collection('threads').doc(post.threadId)
      const userRef = firebase.firestore().collection('users').doc(post.userId)
      batch.set(postRef, post)

      const threadUpdates = {
        posts: firebase.firestore.FieldValue.arrayUnion(postRef.id),
        contributors: firebase.firestore.FieldValue.arrayUnion(post.userId)
      }
      if (!post.firstInThread) {
        threadUpdates.contributors = firebase.firestore.FieldValue.arrayUnion(post.userId)
      }

      batch.update(threadRef, threadUpdates)
      batch.update(userRef, {
        postsCount: firebase.firestore.FieldValue.increment(1)
      })
      await batch.commit()
      const newPost = await postRef.get()
      store.setItem('posts', { ...newPost.data(), id: newPost.id })
      this.appendPostToThread({ postId: newPost.id, threadId: post.threadId })
      if (!post.firstInThread) {
        threadStore.appendThreadToContributors({ userId: post.threadId, threadId: post.userId })
      }
    },

    featchPost(postId, once = false, onSnapShot = null) {
      const store = max()
      return store.featchItem('posts', postId, null, once, onSnapShot)
    },
    featchPosts(ids, once = false, onSnapShot = null) {
      const store = max()
      return store.featchItems(ids, 'posts', onSnapShot)
    },
    appendPostToThread(payload) {
      const threadStore = threads()
      const thread = findById(threadStore.items, payload.threadId)
      if (!thread) {
        console.warn("can't find thread at appendPostToThread")
        return
      }
      thread.posts = thread.posts || []
      thread.posts.push(payload.postId)
    },
    async updatePost(post) {
      const authStore = authentication()
      const store = max()
      const curPost = {
        text: post.text,
        edited: {
          at: firebase.firestore.FieldValue.serverTimestamp(),
          by: authStore.id,
          moderated: false
        }
      }
      const postRef = firebase.firestore().collection('posts').doc(post.id)
      await postRef.update(curPost)
      const updatedPost = await postRef.get()
      store.setItem('posts', updatedPost)
    }
  }
})
