<template>
  <div class="notifications">
    <TransitionGroup name="notification">
      <div class="notification" v-for="noti in notifications" :key="noti.id">
        <span> {{ noti.message }}</span>
        <button @click="removeNotification">X</button>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup>
import UseNotifications from '../Composables/UseNotifications'
const { notifications } = UseNotifications()
const { removeNotification } = UseNotifications()
</script>

<style>
.notification-enter-active,
.notification-leave-active {
  transition: all 0.5s ease;
}
.notification-enter-from,
.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.notification-move {
  transition: transform 0.8s ease;
}
</style>
