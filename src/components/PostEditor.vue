<template>
  <VForm @submit="save">
    <AppFormField
      name="thread_content"
      label="Content:"
      as="textarea"
      v-model="postCopy.text"
      rules="required"
      rows="8"
      cols="30"
    />

    <div class="btn-group">
      <button v-if="props.post.text === null" type="button" class="btn btn-ghost" @click="cancel">
        Cancel
      </button>
      <button class="btn btn-blue" type="submit" name="Publish">
        {{ props.post.text === null ? 'Submit' : 'Update' }}
      </button>
    </div>
  </VForm>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  id: {
    required: false
  },
  post: {
    type: Object,
    default: () => ({ text: null })
  }
})

const emit = defineEmits(['save'])

const postCopy = ref(props.post)
const formKey = ref(Math.random())

const save = function () {
  emit('save', postCopy.value)
  postCopy.value.text = ''
  formKey.value = Math.random()
}

const cancel = function () {
  router.back()
}
</script>

<style scoped></style>
