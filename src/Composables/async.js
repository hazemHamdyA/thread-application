export const useIsReady = function () {
  return {
    async_isReady: false,
    async_featched() {
      this.async_isReady = true
    }
  }
}
