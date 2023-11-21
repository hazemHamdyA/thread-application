<script setup>
defineProps(['src'])
</script>

<template>
  <img :src="src || '/user-placeholder.png'" />
</template>

<style scoped></style>
