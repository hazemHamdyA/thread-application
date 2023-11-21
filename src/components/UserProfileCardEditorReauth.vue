<template>
  <ModalsContainer />
  <VueFinalModal v-model="showModal" contentClass="model">
    <div class="model-content">
      <h4>Login again to change your login information</h4>
      <VForm @submit="reAuth">
        <AppFormField name="email" label="Email" v-model="email" />
        <AppFormField name="password" label="Password" v-model="password" />
        <button class="btn btn-green btn-small">Login</button>
      </VForm>
    </div>
  </VueFinalModal>
  <ModalsContainer />
</template>

<script setup>
import { ref, computed } from 'vue'
import auth from '@/stories/authentication.js'
import { VueFinalModal, ModalsContainer } from 'vue-final-modal'

const authStore = auth()
const props = defineProps(['modelValue'])
const emits = defineEmits(['success', 'falid', 'update:modelValue'])
const email = ref(null)
const password = ref(null)

const showModal = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emits('update:modelValue', value)
  }
})
const reAuth = async function () {
  try {
    await authStore.reAuthuntecated({ email: email.value, password: password.value })
    emits('success')
  } catch (error) {
    emits('falid')
    console.log(error)
  }
}
</script>

<style scoped></style>
