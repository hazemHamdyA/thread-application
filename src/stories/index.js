import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { upsert, docToResource, findById } from '@/helper'
import authentication from './authentication'
import threadss from './threads'
import forumss from './forums'
import categoriess from './categories'
import userss from './users'
import postss from './posts'

export default defineStore('max', {
  state: () => ({
    allResources: {
      users: userss(),
      threads: threadss(),
      posts: postss(),
      forums: forumss(),
      categories: categoriess()
    }
  }),

  actions: {
    /* -------------------------------s-
   featching single resoucres
   --------------------------------*/
    featchItem(resources, id, handleUnsescribe = null, once = false, onSnapShot = null) {
      const authStore = authentication()
      return new Promise((resolve) => {
        const unsubscripe = firebase
          .firestore()
          .collection(resources)
          .doc(id)
          .onSnapshot((doc) => {
            if (once) {
              unsubscripe()
            }
            if (doc.exists) {
              const item = { ...doc.data(), id: doc.id }
              let previousItem = findById(this.allResources[resources].items, id)

              previousItem = previousItem ? { ...previousItem } : null
              this.setItem(resources, docToResource(item))
              if (typeof onSnapShot === 'function') {
                // to check if the post in firebase or not
                const isLocal = doc.metadata.hasPendingWrites
                onSnapShot({ item: { ...item }, previousItem, isLocal })
              }
              resolve(item)
            } else {
              resolve(null)
            }
          })
        if (handleUnsescribe) {
          handleUnsescribe(unsubscripe)
        } else {
          authStore.appenUnsubscripe(unsubscripe)
        }
      })
    },
    setItem(resorce, item) {
      upsert(this.allResources[resorce].items, docToResource(item))
    },

    /* -------------------------------
     featch multply recoureces
    -------------------------------*/
    featchItems(ids = [], resources, onSnapShot = null) {
      const resolvedIds = ids?.map((id) => this.featchItem(resources, id, onSnapShot))
      return Promise.all(resolvedIds)
    }
  }
})
