import { defineStore } from 'pinia'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { findById } from '@/helper'
import max from './index.js'

export default defineStore('fourms', {
  state: () => ({
    items: []
  }),
  actions: {
    appendThreadToFourm(payload) {
      const fourm = findById(this.items, payload.forumId)
      if (!fourm) {
        console.warn("can't find fourm at appendThreadToFourm")
        return
      }
      fourm.threads = fourm.threads || []
      fourm.threads.push(payload.threadId)
    },

    featchFourm(id) {
      const store = max()
      return store.featchItem('forums', id)
    },

    featchFourms(ids) {
      const store = max()
      return store.featchItems(ids, 'forums')
    }
  }
})
