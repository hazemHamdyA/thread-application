<template>
  <div class="form-group">
    <label :for="name">{{ label }}</label>
    <VField
      :name="name"
      :modelValue="modelValue"
      @input="$emit('modelUpdate', $event)"
      :id="name"
      class="form-input"
      v-bind="$attrs"
    />

    <ErrorMessage :name="name" class="form-error" />
  </div>
</template>

<script setup>
defineProps(['name', 'label', 'modelValue'])
defineEmits(['modelUpdate'])
</script>

<style scoped></style>
