import debounce from 'lodash/debounce'

const PageScrollHndler = {
  mounted(el, binding) {
    el.__pageScroll__ = debounce(
      () => {
        binding.value()
      },
      400,
      // this mean invoke the function first and then do the timeout
      { leading: true }
    )

    document.addEventListener('scroll', el.__pageScroll__)
  },
  unmounted(el) {
    document.removeEventListener('scroll', el.__pageScroll__)
  }
}

export default (app) => {
  app.directive('page-scroll', PageScrollHndler)
}
