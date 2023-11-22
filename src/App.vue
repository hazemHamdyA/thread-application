<template>
  <TheNavbar />
  <div class="container">
    <RouterView
      v-show="!isLoading"
      @ready="onReady"
      :key="$route.path + JSON.stringify($route.query)"
    />
    <AppSpinner v-show="isLoading" />
  </div>
  <AppNotifications />
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import NProgress from 'nprogress'
import auth from '@/stories/authentication.js'

const authStore = auth()
const router = useRouter()
const isLoading = ref(true)
const onReady = function () {
  isLoading.value = false
  NProgress.done()
}
const created = function () {
  NProgress.configure({
    speed: 200,
    showSpinner: false
  })
  authStore.featchAuthUser()
  router.beforeEach(() => {
    isLoading.value = true
    NProgress.start()
  })
}

created()
</script>

<style>
@import '../node_modules/nprogress/nprogress.css';
/* #nprogress .bar {
  background: #263959;
} */
@import 'vue3-toastify/dist/index.css';
</style>
