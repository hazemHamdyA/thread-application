<template>
  <header
    class="header"
    id="header"
    v-click-outside="() => (barOpened = false)"
    v-page-scroll="() => (showMenu = false)"
  >
    <routerLink to="/" class="logo">
      <!-- <img src="@/assets/svg/vueschool-logo.svg" /> -->
      <img src="@/assets/king.png" />
    </routerLink>

    <div
      @click="barOpened = !barOpened"
      v-page-scroll="() => (barOpened = false)"
      class="btn-hamburger"
    >
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <nav
      :class="[
        'navbar',
        {
          'navbar-open': barOpened
        }
      ]"
    >
      <ul>
        <li class="navbar-user" v-if="activeUser">
          <a v-click-outside="() => (showMenu = false)" @click="showMenu = !showMenu">
            <AppAvatar
              class="avatar-small"
              :src="activeUser.avatar || '/user-placeholder.png'"
              alt="image for the person"
            />

            <span>
              {{ activeUser.name }}
              <img class="icon-profile" src="@/assets/svg/arrow-profile.svg" alt="" />
            </span>
          </a>

          <div id="user-dropdown" :class="{ 'active-drop': showMenu }">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item">
                <RouterLink :to="{ name: 'profile' }">View profile</RouterLink>
              </li>
              <li class="dropdown-menu-item">
                <a v-if="activeUser" @click.prevent="authStore.logOut()">LogOut</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navbar-item">
          <router-link v-if="!activeUser" :to="{ name: 'login' }">Login</router-link>
        </li>

        <li class="navbar-item">
          <router-link v-if="!activeUser" :to="{ name: 'register' }">Register Now</router-link>
        </li>
      </ul>

      <ul>
        <li class="navbar-item">
          <routerLink to="/">Home</routerLink>
        </li>

        <li class="navbar-item mobile-only">
          <router-link :to="{ name: 'profile' }">My Profile</router-link>
        </li>
        <li v-if="activeUser" class="navbar-item mobile-only">
          <a @click.prevent="authStore.logOut(), $router.push('/')">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue'
import auth from '@/stories/authentication.js'

const authStore = auth()
const showMenu = ref(false)
const barOpened = ref(false)
const activeUser = computed(() => authStore.authUser)
</script>

<style scoped></style>
