import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import { findById, upsert, docToResource } from '@/helper'
import max from './index.js'

export default defineStore('categories', {
  state: () => ({
    items: []
  }),
  actions: {
    featchCategoury(id) {
      const store = max()
      return store.featchItem('categories', id)
    },
    featchAllCategories() {
      const store = max()
      return new Promise((resolve) => {
        firebase
          .firestore()
          .collection('categories')
          .onSnapshot((querySnap) => {
            const categories = querySnap.docs.map((doc) => {
              const item = { id: doc.id, ...doc.data() }
              store.setItem('categories', item)
              return item
            })
            resolve(categories)
          })
      })
    }
  }
})
