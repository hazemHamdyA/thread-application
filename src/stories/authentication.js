import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
// import { findById, upsert, docToResource } from '@/helper'
import users from './users'
import max from './index.js'
import { docToResource } from '../helper/index.js'

export default defineStore('auth', {
  state: () => ({
    id: null,
    unsubscripers: [],
    authUnsubscripers: null,
    authObserverUnsubscripers: null
  }),
  getters: {
    authUser(state) {
      const usersStore = users()
      return usersStore.user(state.id)
    }
  },
  actions: {
    async initAuthenication() {
      // this firebase sycale hooks
      if (this.authObserverUnsubscripers) return
      const unsubscripe = new Promise((resolve) => {
        firebase.auth().onAuthStateChanged(async (user) => {
          this.unsubscripeAuthUserSnapshot()
          if (user) {
            await this.featchAuthUser()
            resolve(user)
          }
          resolve(null)
        })
      })
      this.setAuthObserverUnsubscripers(unsubscripe)
    },
    async updateUser(email) {
      return await firebase.auth().currentUser.updateEmail(email)
    },
    async reAuthuntecated({ email, password }) {
      const credintal = firebase.auth.EmailAuthProvider.credential(email, password)
      await firebase.auth().currentUser.reauthenticateWithCredential(credintal)
    },
    appenUnsubscripe(unsubscripe) {
      this.unsubscripers.push(unsubscripe)
    },
    clearAllUnsubscripe() {
      this.unsubscripers = []
    },
    async featchAuthUser() {
      const userId = firebase.auth().currentUser?.uid
      const store = max()
      if (!userId) return

      const that = this
      function handleUnsescribe(un) {
        that.setAuthUnsubscripers(un)
      }

      await store.featchItem('users', userId, handleUnsescribe)
      this.id = userId
    },
    setAuthUnsubscripers(un) {
      this.authUnsubscripers = un
    },
    async setAuthObserverUnsubscripers(un) {
      this.authObserverUnsubscripers = un
    },
    async unsubscripeAllSnapShots() {
      this.unsubscripers.forEach((uns) => uns())
      this.clearAllUnsubscripe()
    },

    async unsubscripeAuthUserSnapshot() {
      if (this.authUnsubscripers) {
        this.authUnsubscripers()
      } else {
        this.setAuthUnsubscripers(null)
      }
    },
    async registerUserWithEmailAndPassword({ name, password, userName, email, avatar }) {
      const usersStore = users()
      const result = await firebase.auth().createUserWithEmailAndPassword(email, password)

      avatar = await this.uploadUserAvatar(result.user.uid, avatar)
      await usersStore.createUser({ id: result.user.uid, name, userName, email, avatar })
    },
    async uploadUserAvatar(authId, file) {
      if (!file) return null
      authId = authId ?? this.id
      const storageBucket = firebase
        .storage()
        .ref()
        .child(`uploads/${authId}/images/${Date.now()}-${file.name}`)
      const snapshot = await storageBucket.put(file)
      const url = await snapshot.ref.getDownloadURL()
      return url
    },
    async loginWithGoogle() {
      const usersStore = users()

      const provider = new firebase.auth.GoogleAuthProvider()
      const responce = await firebase.auth().signInWithPopup(provider)
      const { user } = responce
      const userRef = firebase.firestore().collection('users').doc(user.uid)
      const userData = userRef.get()
      if (!userData.exists) {
        await usersStore.createUser({
          id: user.uid,
          email: user.email,
          name: user.displayName,
          userName: user.email,
          avatar: user.photoURL
        })
      }
    },

    async logIn({ email, password }) {
      return await firebase.auth().signInWithEmailAndPassword(email, password)
    },

    async logOut() {
      await firebase.auth().signOut()
      this.id = null
    },
    async featchAuthUsersPosts(lastPost) {
      const store = max()
      let qury = firebase
        .firestore()
        .collection('posts')
        .where('userId', '==', this.id)
        .orderBy('publishedAt', 'desc')
        .limit(10)
      if (lastPost) {
        const doc = await firebase.firestore().collection('posts').doc(lastPost.id).get()
        qury = qury.startAfter(doc)
      }

      const posts = await docToResource(qury.get())

      posts.forEach((e) => {
        store.setItem('posts', e)
      })
    }
  }
})
