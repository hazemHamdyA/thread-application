<template>
  <h1 class="col-full text-center">
    <slot> Not Found 404 </slot>
  </h1>
  <router-link to="/">see some cool threads</router-link>
</template>

<script>
export default {
  created() {
    this.$emit('ready')
  }
}
</script>

<style scoped></style>
