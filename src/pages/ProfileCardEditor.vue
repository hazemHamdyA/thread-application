<template>
  <form @submit.prevent="save">
    <div class="profile-card">
      <p class="text-center avatar-edit">
        <label for="avatar">
          <AppAvatar
            :src="emtyImg ?? user.avatar"
            :alt="`${actieUser.name} pic`"
            class="avatar-xlarge img-update"
          />
          <div class="avatar-upload-overlay">
            <AppSpinner v-if="isLoading" :spinnerColor="'white'" />
            <fa v-else icon="camera" size="3x" :style="{ color: 'white', opacity: '.8' }" />
          </div>

          <input v-show="false" type="file" id="avatar" accept="image/*" @change="avatarUpload" />
        </label>
      </p>
      <div>
        <RandomAvatar @hit="test" />
      </div>

      <div class="form-group">
        <input
          type="text"
          placeholder="Username"
          class="form-input text-lead text-bold"
          v-model="user.userName"
        />
      </div>

      <div class="form-group">
        <input
          type="text"
          placeholder="Full Name"
          class="form-input text-lead"
          v-model="user.name"
        />
      </div>

      <div class="form-group">
        <label for="user_bio">Bio</label>
        <textarea
          v-model="user.bio"
          class="form-input"
          id="user_bio"
          placeholder="Write a few words about yourself."
        ></textarea>
      </div>

      <div class="stats">
        <span>{{ authStore.authUser.postsCount }} posts</span>
        <span>{{ authStore.authUser.threadsCount }} threads</span>
      </div>

      <hr />

      <div class="form-group">
        <label class="form-label" for="user_website">Website</label>
        <input autocomplete="off" class="form-input" id="user_website" v-model="user.website" />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_email">Email</label>
        <input autocomplete="off" class="form-input" id="user_email" v-model="user.email" />
      </div>

      <div class="form-group">
        <label class="form-label" for="user_location">Location</label>
        <input
          @mouseenter="getCountries"
          autocomplete="off"
          class="form-input"
          id="user_location"
          v-model="user.location"
          list="locations"
        />
      </div>
      <datalist id="locations">
        <option
          v-for="countruy in countries[0]"
          :value="countruy.name.common"
          :key="countruy.name.common"
        />
      </datalist>

      <div class="btn-group space-between">
        <button hclass="btn-ghost" @click.prevent="cancel">Cancel</button>
        <button type="submit" class="btn-blue">Save</button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import users from '@/stories/users.js'
import auth from '@/stories/authentication.js'

const usersStore = users()
const authStore = auth()
const router = useRouter()
const props = defineProps(['actieUser'])
const emits = defineEmits(['ready'])
const user = { ...reactive(props.actieUser) }
const isLoading = ref(false)
const emtyImg = ref(null)
const countries = reactive([])

const save = async function () {
  await usersStore.setUser({ ...user, threads: usersStore.threadIds })
  router.push('/me')
}
const cancel = function () {
  router.push('/me')
}

const test = function (e) {
  user.avatar = e
  emtyImg.value = e
}

const getCountries = async function () {
  const responce = await fetch('https://restcountries.com/v3.1/all')
  const data = await responce.json()

  countries[0] = data
}
const avatarUpload = async function (e) {
  isLoading.value = true
  const file = e.target.files[0]
  user.avatar = await authStore.uploadUserAvatar(null, file)
  isLoading.value = false
}

emits('ready')

/*
&& request.resource.contentType.matchs('image/*')
*/
</script>

<style scoped>
img {
  object-fit: cover;
}
</style>
