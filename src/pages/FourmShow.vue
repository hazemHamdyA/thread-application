<template>
  <div v-if="isReady" class="col-full push-top">
    <div class="forum-header">
      <div class="forum-details">
        <h1>{{ forum.name }}</h1>
        <p class="text-lead">{{ forum.description }}</p>
      </div>
      <RouterLink
        :to="{
          name: 'createThread',
          params: {
            forumId: forum.id
          }
        }"
        class="btn-green btn-small"
        >Start a thread</RouterLink
      >
    </div>
    <ThreadList :threads="threads" />
    <div v-if="threadCount">
      <v-pagination v-model="page" :pages="totalPages" active-color="#57ad8d" />
    </div>
    <div v-else style="padding: 2rem; font-weight: bolder">
      <em>there are not any threads yet </em>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'

import fourms from '@/stories/forums.js'
import threadss from '@/stories/threads.js'
import users from '@/stories/users.js'
import { useRoute, useRouter } from 'vue-router'

const fourmsStore = fourms()
const threadsStore = threadss()
const usersStore = users()
const route = useRoute()
const router = useRouter()

const emits = defineEmits(['ready'])
const props = defineProps(['id'])
const isReady = ref(false)

const page = ref(route.query.page ? +route.query.page : 1)

const perPage = ref(10)

const forum = computed(() =>
  fourmsStore.items.find((e) => {
    return e.id === props.id ?? {}
  })
)

const threads = computed(() => {
  return (
    threadsStore.items
      .filter((e) => e.forumId === forum.value.id)
      .map((e) => threadsStore.thread(e.id)) ?? []
  )
})

const threadCount = computed(() => forum.value.threads?.length)
const totalPages = computed(() => {
  if (!threadCount.value) return 0
  return Math.ceil(threadCount.value / perPage.value)
})
onMounted(async () => {
  const fourm = await fourmsStore.featchFourm(props.id)
  const threads = await threadsStore.feathThreadsByPage(fourm.threads, page.value, perPage.value)
  await usersStore.featchUsers(threads.map((e) => e.userId))

  isReady.value = true
  emits('ready')
})

watch(page, async () => {
  router.push({ query: { page: page.value } })
})
</script>

<style scoped></style>
