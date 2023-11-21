<template>
  <span :title="showData">
    {{ diffForHuman }}
  </span>
</template>

<script setup>
import { computed } from 'vue'

import dayjs from 'dayjs'
import realativeTime from 'dayjs/plugin/relativeTime'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(realativeTime)
dayjs.extend(localizedFormat)
const props = defineProps({
  timeChange: {
    type: [Number, Object],
    required: true
  }
})

const normlizeTimeStamp = computed(() => props.timeChange?.seconds ?? props.timeChange)

const diffForHuman = computed(() => dayjs.unix(normlizeTimeStamp.value).fromNow())

const showData = computed(() => dayjs.unix(normlizeTimeStamp.value).format('llll'))
</script>

<style scoped></style>
