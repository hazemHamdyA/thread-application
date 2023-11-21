<template>
  <TheNavbar />
  <div class="container">
    <!-- to force router destory the router after each route we have to give it a key 
    to can route to thread from another thread 
    -->
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
/*  whenever we need some code run on every page we can use this code inside App.vue */
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
</style>
