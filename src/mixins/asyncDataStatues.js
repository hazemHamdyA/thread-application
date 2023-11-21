export default {
  data() {
    return {
      asyncDataStatues_isReady: false
    }
  },
  methods: {
    asyncDataStatues_featched() {
      this.asyncDataStatues_isReady = true
      this.$emit('ready')
    }
  }
}
