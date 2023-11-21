<template>
  <div class="col-full">
    <div class="forum-list">
      <h2 class="list-title">
        <routerLink
          :to="{
            name: 'category',
            params: { id: catId }
          }"
          >{{ catName }}</routerLink
        >
      </h2>

      <div class="forum-listing" v-for="forum in forums" :key="forum.id">
        <div class="forum-details">
          <routerLink :to="{ name: 'fourm', params: { id: forum.id } }" class="text-xlarge">{{
            forum.name
          }}</routerLink>
          <p>{{ forum.description }}</p>
        </div>

        <div class="threads-count">
          <p>
            <span class="count">
              {{ len(forum) }}
            </span>
            {{ len(forum) ? (len(forum) > 1 ? 'threads' : 'thread') : 'no threads' }}
          </p>
        </div>

        <div class="last-thread"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['forums', 'catName', 'catId'])

const len = (forum) => forum.threads?.length
</script>

<style scoped></style>
