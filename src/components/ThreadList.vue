<template>
  <div v-if="threads" class="col-full">
    <div class="thread-list">
      <h2 class="list-title">Threads</h2>

      <div class="thread" v-for="thread in threads" :key="thread.id">
        <div>
          <p>
            <router-link :to="{ name: 'thread', params: { id: thread.id } }">{{
              thread.title
            }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By
            <router-link v-if="thread.id" :to="{ name: 'thread', params: { id: thread.id } }">{{
              userById(thread.userId).name
            }}</router-link
            >,
            <AppDate :time-change="thread.publishedAt" />
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">{{ thread.replaiesCount }} replaies</p>
          <AppAvatar class="avatar-medium" :src="userById(thread.userId).avatar" alt="person" />
          <!-- <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="person" /> -->

          <div>
            <p class="text-xsmall">
              <RouterLink :to="{ name: 'profile' }">{{ userById(thread.userId).name }}</RouterLink>
            </p>
            <p class="text-xsmall text-faded">
              <AppDate :time-change="thread.publishedAt" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import userss from '@/stories/users.js'
const usersStore = userss()

defineProps({
  threads: { required: true }
})

// const posts = reactive(data.posts)
const users = reactive(usersStore.items)

// const postById = function (postId) {
//   return posts.find((e) => e.id === postId)
// }

const userById = function (userId) {
  return users.find((e) => e.id === userId) ?? {}
}
</script>

<style scoped></style>
