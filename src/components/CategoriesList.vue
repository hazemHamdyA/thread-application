<template>
  <FourmList
    v-for="category in categories"
    :key="category.id"
    :catName="category.name"
    :forums="getFourms(category)"
    :catId="category.id"
  />
</template>

<script setup>
import fourms from '@/stories/forums.js'

const fourmsStore = fourms()

defineProps({
  categories: {
    required: true,
    type: Array
  }
})

function getFourms(cat) {
  return fourmsStore.items.filter((e) => {
    return e.categoryId === cat.id
  })
}
</script>

<style scoped></style>
