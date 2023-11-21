<template>
  <div class="post-list">
    <div class="post" v-for="post in props.posts" :key="post.id">
      <div class="user-info" v-if="userById(post.userId)">
        <a href="#" class="user-name">{{ userById(post.userId).name }}</a>

        <a href="#">
          <AppAvatar class="avatar-large" :src="userById(post.userId).avatar" alt="person" />
          <!-- <img class="avatar-large" :src="userById(post.userId).avatar" alt="person" /> -->
        </a>

        <p class="desktop-only text-small">{{ userById(post.userId).postsCount }} posts</p>
        <p class="desktop-only text-small">{{ userById(post.userId).threadsCount }} threads</p>
      </div>

      <div class="post-content">
        <div v-if="edit === post.id">
          <PostEditor :post="post" @save="updatePost" />
        </div>
        <div v-else>
          <p>
            {{ post.text }}
          </p>
        </div>
        <a
          v-if="post.userId === authStore.id"
          @click="toggleEdit(post.id)"
          style="margin-left: 1rem"
          class="link-unstyled"
          title="Make a change"
        >
          <fa icon="fa-solid fa-pencil" />
        </a>
      </div>
      <div class="post-date text-faded">
        <div v-if="post.edited?.at" class="edition-info">edited</div>
        <AppDate :time-change="post.publishedAt" />
      </div>
    </div>
  </div>
</template>

<script setup>
import users from '@/stories/users.js'
import postss from '@/stories/posts.js'
import auth from '@/stories/authentication.js'

const authStore = auth()
const usersStore = users()
const postsStore = postss()
import { ref } from 'vue'

const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
})

const edit = ref(null)

const toggleEdit = function (id) {
  edit.value = id === edit.value ? null : id
}
const userById = function (userId) {
  return usersStore.user(userId)
}
const updatePost = function (e) {
  postsStore.updatePost(e)
  edit.value = null
}
</script>

<style scoped></style>
