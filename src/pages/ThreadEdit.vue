<template>
  <div class="container" v-if="asyncDataStatues_isReady">
    <div class="col-full push-top">
      <h1>
        Edit <i>{{ thread.title }}</i>
      </h1>

      <ThreadEditor :title="thread.title" :text="text" @save="save" @cancle="cancle" />
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import asyncDataStatues from '@/mixins/asyncDataStatues.js'
import threads from '@/stories/threads.js'
import posts from '@/stories/posts.js'
export default {
  props: {
    id: { type: String, required: true }
  },
  mixins: [asyncDataStatues],
  data: () => ({}),
  computed: {
    ...mapStores(threads),
    ...mapStores(posts),
    thread() {
      return this.threadsStore.items.find((e) => e.id === this.id) ?? {}
    },

    text() {
      // const post = this.maxStore.posts.find((e) => e.id === this.thread.posts[0])?.text
      return this.postsStore.items.find((e) => e.id === this.thread?.posts[0])?.text
      // return post ? post.text : ''
    }
  },
  methods: {
    async save({ title, text }) {
      await this.threadsStore.updateThread({ id: this.id, title, text })
      this.$router.push(`/thread/${this.id}`)
    },
    cancle() {
      this.$router.push({
        name: 'thread',
        params: {
          id: this.thread.id
        }
      })
    }
  },
  async created() {
    const thread = await this.threadsStore.featchThread(this.id)
    await this.postsStore.featchPost(thread?.posts[0])
    this.asyncDataStatues_featched()
  }
}
/*
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import max from '@/stories/index.js'

const store = max()
const router = useRouter()
const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const thread = computed(() => store.data.threads.find((e) => e.id === props.id))

// to get post of the thread id
const text = computed(() => store.data.posts.find((e) => e.id === thread.value.posts[0]).text)

const save = async function ({ title, text }) {

  await store.updateThread({
    id: props.id,
    title,
    text
  })
  // router.replace(`/thread/${props.id}`)
}

const cancle = function () {
  .log('cancle')
  router.push({
    name: 'thread',
    params: {
      id: thread.value.id
    }
  })
}
*/
</script>
