<template>
  <div class="profile-card">
    <p class="text-center">
      <AppAvatar :src="actieUser.avatar" :alt="`${actieUser.name}`" class="avatar-xlarge" />
      <!-- <img :src="actieUser.avatar" :alt="`${actieUser.name}`" class="avatar-xlarge" /> -->
    </p>

    <h1 class="title">{{ actieUser.name }}</h1>

    <p class="text-lead">{{ actieUser.username }}</p>

    <p class="text-justify">{{ actieUser.bio ?? 'No bio specified' }}.</p>

    <span class="online">{{ actieUser.username }} is online</span>

    <div class="stats">
      <span>{{ userPostsCount }} posts</span>
      <span>{{ userThreadsCount }} threads</span>
    </div>
    <div class="text-center">
      <hr />
      <RouterLink :to="{ name: 'edit' }" class="btn-green btn-small">Edit Profile</RouterLink>
    </div>

    <hr />

    <p class="text-large text-center">
      <i class="fa fa-globe"></i> <a :href="actieUser.website">{{ actieUser.website }}</a>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import auth from '@/stories/authentication.js'
const authStore = auth()

const userPostsCount = computed(() => authStore.authUser?.postsCount)
const userThreadsCount = computed(() => authStore.authUser?.threadsCount)
defineProps(['actieUser'])
</script>

<style scoped></style>
