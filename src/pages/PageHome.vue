<template>
  <div v-if="asyncDataStatues_isReady" class="container">
    <h1 class="push-top">welcome to Fourm</h1>
    <CategoriesList :categories="categories" />
  </div>
</template>

<script>
import max from '@/stories/index.js'
import { mapStores } from 'pinia'
import asyncDataStatues from '@/mixins/asyncDataStatues.js'
import category from '@/stories/categories.js'
import fourms from '@/stories/forums.js'

export default {
  mixins: [asyncDataStatues],
  computed: {
    ...mapStores(max),
    ...mapStores(category),
    ...mapStores(fourms),
    categories() {
      return category().items
    }
  },
  async created() {
    const categories = await category().featchAllCategories()
    const fourmId = categories.flatMap((categoury) => categoury.forums)
    await this.fourmsStore.featchFourms(fourmId)
    this.asyncDataStatues_featched()
  }
}
</script>

<style scoped></style>
