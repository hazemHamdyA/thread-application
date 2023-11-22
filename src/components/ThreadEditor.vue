<template>
  <VForm @submit="save">
    <AppFormField
      name="thread_title"
      label="Title:"
      type="text"
      v-model="form.title"
      rules="required"
    />
    <AppFormField
      name="thread_content"
      label="Content:"
      as="textarea"
      v-model="form.text"
      rules="required"
      rows="8"
      cols="140"
    />

    <div class="btn-group">
      <button type="button" class="btn btn-ghost" @click="$emit('cancle')">Cancel</button>
      <button class="btn btn-blue" type="submit" name="Edit">
        {{ existing ? 'Update' : 'Publish' }}
        <AppTest content="New Thread Added" :now="true" @notify-now="toast" />
      </button>
    </div>
  </VForm>
</template>

<script setup>
import { reactive, computed, watch, ref } from 'vue'
import { useRouter } from 'vue-router'
import auth from '@/stories/authentication.js'
const authStore = auth()
const emit = defineEmits(['save', 'cancle', 'dirty', 'clean'])
const router = useRouter()
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  }
})

const existing = computed(() => !!props.title)
const getToas = ref(null)
const form = reactive({
  title: props.title,
  text: props.text
})
const save = () => {
  emit('save', { ...form })
  emit('clean')
  getToas.value()
}
function toast(val) {
  getToas.value = val
}
watch(
  form,
  () => {
    if (form.text !== props.text || form.title !== props.title) {
      emit('dirty')
    } else {
      emit('clean')
    }
  },
  {
    deep: true
  }
)
</script>

<style scoped></style>
