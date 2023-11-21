<template>
  <div class="text-center" style="margin-bottom: 15px">
    <button class="btn-green btn-xsmall" @click.prevent="getRandomAvatar">Random Avatar</button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { RandomWord } from '@/helper'
const emits = defineEmits(['hit'])
// prettier-ignore
const searchTerms = reactive(['cats','dogs','abstract','cars','mountains','beach','landscape','object','food','flowers','architecture','yellow','green','blue','orange','black','white','brown','red','patterns','animal','code','space'])
const RandomWords = RandomWord(searchTerms)
const getRandomAvatar = async function () {
  const responce = await fetch(
    `https://pixabay.com/api/?key=40797758-a6184c70be735879e30a0ad92&q=${RandomWords}`
  )
  const data = await responce.json()
  const randomImg = RandomWord(data.hits)
  emits('hit', randomImg.webformatURL)
}
</script>

<style scoped></style>
