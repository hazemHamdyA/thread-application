<template>
  <div class="col-full push-top" v-if="isReady">
    <h1>{{ category.name }}</h1>
    <FourmList
      :key="category.id"
      :catName="category.name"
      :forums="getFourms(category)"
      :catId="category.id"
    />
  </div>
</template>

<script setup>
import { reactive, computed, ref } from 'vue'
import categoriess from '@/stories/categories.js'
import fourms from '@/stories/forums.js'

const categoryStore = categoriess()
const fourmsStore = fourms()

const props = defineProps(['id'])
const isReady = ref(false)
const categories = reactive(categoryStore.items)
const category = computed(() => categories.find((e) => e.id === props.id) ?? {})

function getFourms(cat) {
  return fourmsStore.items.filter((e) => {
    return e.categoryId === cat.id
  })
}
const created = async function () {
  const category = await categoryStore.featchCategoury(props.id)
  await fourmsStore.featchFourms(category.forums)
  isReady.value = true
}
created()
</script>

<style scoped></style>
