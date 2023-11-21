<template>
  <div class="col-2">
    <VForm @submit="login" class="card card-form">
      <h1 class="text-center">Login</h1>

      <AppFormField name="email" label="Email" v-model="form.email" rules="required|email" />
      <AppFormField name="password" label="Password" v-model="form.password" rules="required" />

      <div class="push-top">
        <button type="submit" class="btn-blue btn-block">Log in</button>
      </div>

      <div class="form-actions text-right">
        <routerLink :to="{ name: 'register' }">Create an account?</routerLink>
      </div>
    </VForm>

    <div class="push-top text-center">
      <button class="btn-red btn-xsmall" @click="loginWithGoogle">
        <i class="fa fa-google fa-btn"></i>Sign in with Google
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import auth from '@/stories/authentication.js'

const authStore = auth()
const router = useRouter()
const route = useRoute()
const emits = defineEmits(['ready'])
const form = reactive({ email: null, password: null })

const login = async function () {
  try {
    await authStore.logIn(form)
    successLogin()
  } catch (error) {
    console.warn(error.message)
  }
}
const loginWithGoogle = async function () {
  await authStore.loginWithGoogle()
  successLogin()
}
function successLogin() {
  const redirectTo = route.query.redirectTo || { name: 'home' }
  return router.push(redirectTo)
}
emits('ready')
</script>

<style scoped></style>
