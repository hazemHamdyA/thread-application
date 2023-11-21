<!-- eslint-disable no-unused-vars -->
<template>
  <div class="col-large push-top" v-if="asyncDataStatues_isReady">
    <h1>
      {{ thread.title }}

      <router-link
        v-if="thread.userId == authUser?.id"
        :to="{ name: 'threadEdit', params: { id: this.id } }"
        custom
        v-slot="{ navigate }"
      >
        <button @click="navigate" class="btn-green btn-small">Edit Thread</button>
      </router-link>
    </h1>
    <p>
      By <a href="#" class="link-unstyled">{{ thread.author?.name }}</a
      >,
      <AppDate :time-change="thread.publishedAt" />

      <span style="float: right; margin-top: 2px" class="hide-mobile text-faded text-small"
        >{{ thread.replaiesCount }} replies by {{ thread.contributorsCount }} contributors</span
      >
    </p>

    <post-list :posts="threadPosts" />

    <PostEditor v-if="authUser" @save="addPost" />

    <div v-else class="text-center" style="margin-bottom: 50px">
      <router-link
        :to="{
          name: 'login',
          query: {
            redirectTo: $route.path
          }
        }"
        >Login</router-link
      >
      or
      <router-link
        :to="{
          name: 'register',
          query: {
            redirectTo: $route.path
          }
        }"
        >Register</router-link
      >
      to can replay on thread
    </div>
  </div>
</template>

<script>
import max from '@/stories/index.js'
import threads from '@/stories/threads.js'
import users from '@/stories/users.js'
import posts from '@/stories/posts.js'
import auth from '@/stories/authentication.js'
import { mapStores } from 'pinia'
import asyncDataStatues from '@/mixins/asyncDataStatues.js'
import UseNotifications from '../Composables/UseNotifications'
import difference from 'lodash/difference'
export default {
  props: ['id'],
  emits: ['ready'],
  data: () => ({}),
  setup() {
    const { addNotification } = UseNotifications()
    // addNotification({ message: 'welcome' })
    return { addNotification }
  },
  mixins: [asyncDataStatues],
  computed: {
    ...mapStores(max),
    ...mapStores(threads),
    ...mapStores(users),
    ...mapStores(posts),
    ...mapStores(auth),
    authUser() {
      return this.authStore.authUser
    },
    threads() {
      return this.threadsStore.items
    },
    posts() {
      return this.postsStore.items
    },
    thread() {
      return this.threadsStore.thread(this.id)
    },
    threadPosts() {
      const threadPosts = this.posts?.filter((e) => e.threadId === this.id)
      return threadPosts
    }
  },
  methods: {
    addPost(eventData) {
      const nwPost = {
        ...eventData,
        threadId: this.id
      }
      this.postsStore.addPost(nwPost)

      this.postsStore.appendPostToThread({ threadId: nwPost.threadId, id: nwPost.id })
    },
    async featchPostsWithUsers(ids) {
      // this method to realtime featched from firestore
      const posts = await this.postsStore.featchPosts(ids, false, ({ islocal }) => {
        if (!this.asyncDataStatues_isReady || islocal) return
        this.addNotification({ message: 'thread recently updated', timeout: 3000 })
      })

      const users = await posts.map((post) => post.userId).concat(this.thread.userId)

      await this.usersStore.featchUsers(users)
    }
  },
  async created() {
    const thread = await this.threadsStore.featchThread(
      this.id,
      false,
      async ({ islocal, item, previousItem }) => {
        if (!this.asyncDataStatues_isReady || islocal) return
        // here we want to get the last post added to firestore so instead caling it with the last inx of the posts array
        // we can get the diffrence between items and previousItem that i added in actions to onsnapshot
        const newPostIds = difference(item.posts, previousItem.posts)
        const hasNewPosts = newPostIds.length > 0
        if (hasNewPosts) {
          await this.featchPostsWithUsers(newPostIds)
        } else {
          this.addNotification({ message: 'thread recently updated', timeout: 3000 })
        }
      }
    )

    await this.featchPostsWithUsers(thread.posts)

    this.asyncDataStatues_featched()
  }
}
</script>

<style scoped></style>
