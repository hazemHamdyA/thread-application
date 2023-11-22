<template>
  <div class="container" style="margin-bottom: 3rem">
    <div v-if="!sending" class="flex-grid justify-center">
      <div class="col-2">
        <VForm @submit="register" class="card card-form">
          <h1 class="text-center">Register</h1>

          <AppFormField
            name="name"
            label="Full Name"
            v-model="form.name"
            rules="required|unique:users,name"
          />

          <AppFormField
            name="username"
            label="Username"
            v-model="form.userName"
            rules="required|unique:users,usernameLower"
          />

          <AppFormField
            name="email"
            label="Email"
            v-model="form.email"
            rules="required|unique:users,usernameLowerrequired|email|unique:users,email"
            type="email"
          />
          <AppFormField
            name="password"
            label="Password"
            v-model="form.password"
            rules="required|min:8"
            type="password"
          />

          <div class="form-group">
            <label for="avatar"
              >Avatar
              <div v-if="avaterPreview">
                <img :src="avaterPreview" alt="person Image" class="avater-xlarge" />
              </div>
            </label>

            <VField
              name="avatar"
              id="avatar"
              v-show="!avaterPreview"
              type="file"
              class="form-input"
              @change="handelImageUpload"
              accept="image/*"
            />
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-blue btn-block">Register</button>
          </div>
        </VForm>
        <div class="text-center push-top">
          <button @click="loginWithGoogle" class="btn-red btn-xsmall">
            <i class="fa fa-google fa-btn"></i>Sign up with Google
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <AppSpinner epic class="spinner" />
      <h3 style="margin-top: -2rem">Creating Your Account</h3>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import auth from '@/stories/authentication.js'
import { reactive, ref } from 'vue'

const authStore = auth()
const router = useRouter()
const emits = defineEmits(['ready'])
const avaterPreview = ref(null)
const sending = ref(false)
const form = reactive({
  name: null,
  userName: null,
  email: null,
  password: null,
  avatar: ''
})
const register = async function () {
  sending.value = true
  await authStore.registerUserWithEmailAndPassword(form)
  sending.value = false

  router.push('/')
}
const loginWithGoogle = async function () {
  await authStore.loginWithGoogle()
  router.push('/')
}
const handelImageUpload = function (e) {
  form.avatar = e.target.files[0]
  const reader = new FileReader()
  reader.onload = (e) => {
    avaterPreview.value = e.target.result
  }
  reader.readAsDataURL(form.avatar)
}

emits('ready')
</script>

<style scoped>
.spinner {
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
</style>
