<!-- eslint-disable no-unused-vars -->
<template>
  <div v-if="isReady" class="container">
    <div class="col-full push-top">
      <h1>
        Create new thread in <i>{{ fourm.name }}</i>
      </h1>

      <ThreadEditor
        @save="save"
        @cancle="cancle"
        @dirty="isFormDirty = true"
        @clean="isFormDirty = false"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import fourms from '@/stories/forums.js'
import threadss from '@/stories/threads.js'

const fourmsStore = fourms()
const threadsStore = threadss()
const emits = defineEmits(['ready'])
const router = useRouter()
const props = defineProps({
  forumId: {
    type: String,
    required: true
  }
})

const isFormDirty = ref(false)
const isReady = ref(false)
const fourm = computed(() => fourmsStore.items.find((e) => e.id === props.forumId) ?? {})
const save = async function ({ title, text }) {
  const thread = await threadsStore.createThread({
    forumId: props.forumId,
    title,
    text
  })

  router.push(`/thread/${thread.id}`)
}

const cancle = function () {
  router.push({
    name: 'fourm',
    params: {
      id: fourm.value.id
    }
  })
}

const created = async function () {
  await fourmsStore.featchFourm(props.forumId)
  isReady.value = true
  emits('ready')
}
onBeforeRouteLeave(() => {
  if (!isFormDirty.value) return true
  else {
    // eslint-disable-next-line no-unused-vars
    return confirm('are you sure you want to leave before publish thread?') ? true : false
  }
})
created()
</script>

<style scoped></style>
