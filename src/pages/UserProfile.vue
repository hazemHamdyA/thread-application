<template>
  <div class="container" style="width: 100%">
    <div class="flex-grid">
      <div class="col-3 push-top">
        <p class="text-xsmall text-faded text-center">
          Member since june 2003, last visited 4 hours ago
        </p>

        <UserProfileCard v-if="!edit" :actieUser="actieUser" />
        <ProfileCardEditor v-else :actieUser="actieUser" />
      </div>

      <div class="col-7 push-top">
        <div class="profile-header">
          <span class="text-lead"> {{ actieUser.name }} recent activity </span>
        </div>

        <hr />

        <PostList :posts="userPosts" />
        <AppInfiniteScroll
          @load="authStore.featchAuthUsersPosts(lastPostFeatched)"
          :done="userPosts.length === actieUser.postsCount"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import ProfileCardEditor from '@/pages/ProfileCardEditor.vue'
import auth from '@/stories/authentication.js'

const authStore = auth()

const emits = defineEmits(['ready'])

defineProps({
  edit: {
    type: Boolean,
    default: false
  }
})

const userPosts = computed(() => authStore.authUser.posts)
const actieUser = computed(() => authStore.authUser)
const lastPostFeatched = computed(() => {
  if (userPosts.value === 0) return null
  return userPosts.value.at(-1)
})

/**
 * @todo investegate abouth if we have info on when the user creat his account and get it
 */

onMounted(async () => {
  await authStore.featchAuthUsersPosts(lastPostFeatched.value)

  emits('ready')
})
</script>

<style scoped></style>
