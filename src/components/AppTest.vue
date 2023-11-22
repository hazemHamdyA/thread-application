<template>
  <div></div>
</template>

<script setup>
import { toast } from 'vue3-toastify'
const props = defineProps(['content'])
const emts = defineEmits(['notify-now'])
emts('notify-now', notify)
function notify() {
  toast(`${props.content}`, {
    autoClose: 1000,
    position: toast.POSITION.BOTTOM_RIGHT,
    loading: true
  })
}
</script>
