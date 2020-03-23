const registerModule = (Vue) => {
  Vue.component('m-area-title', () => import('./area-title'))
  Vue.component('m-area-image', () => import('./area-image'))
  Vue.component('m-area-text', () => import('./area-text'))
  Vue.component('m-area-wrap', () => import('./area-wrap'))
}

export default registerModule
